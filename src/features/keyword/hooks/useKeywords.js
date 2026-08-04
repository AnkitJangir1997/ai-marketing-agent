"use client";

import { useState, useEffect, useCallback } from "react";

export default function useKeywords() {
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchKeywords = useCallback(async () => {
    try {
      const res = await fetch("/api/keywords");
      if (!res.ok) throw new Error("Failed to fetch keywords");
      const data = await res.json();
      setKeywords(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const researchKeywords = async (term) => {
    try {
      const res = await fetch("/api/keywords", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ term }),
      });
      if (!res.ok) throw new Error("Keyword research failed");
      const newCluster = await res.json();
      setKeywords((prev) => [...newCluster, ...prev]);
      return newCluster;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const res = await fetch("/api/keywords");
        if (!res.ok) throw new Error("Failed to fetch keywords");
        const data = await res.json();
        if (isMounted) {
          setKeywords(data);
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
    keywords,
    loading,
    error,
    refetch: fetchKeywords,
    researchKeywords,
  };
}
