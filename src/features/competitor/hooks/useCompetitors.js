"use client";

import { useState, useEffect, useCallback } from "react";

export default function useCompetitors() {
  const [competitors, setCompetitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCompetitors = useCallback(async () => {
    try {
      const res = await fetch("/api/competitors");
      if (!res.ok) throw new Error("Failed to fetch competitors");
      const data = await res.json();
      setCompetitors(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addCompetitor = async (domain) => {
    try {
      const res = await fetch("/api/competitors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain }),
      });
      if (!res.ok) throw new Error("Failed to add competitor");
      const newComp = await res.json();
      setCompetitors((prev) => [newComp, ...prev]);
      return newComp;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const res = await fetch("/api/competitors");
        if (!res.ok) throw new Error("Failed to fetch competitors");
        const data = await res.json();
        if (isMounted) {
          setCompetitors(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  return {
    competitors,
    loading,
    error,
    refetch: fetchCompetitors,
    addCompetitor,
  };
}
