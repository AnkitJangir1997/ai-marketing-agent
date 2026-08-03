"use client";

import { useState, useEffect, useCallback } from "react";

export default function useWebsites() {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWebsites = useCallback(async () => {
    try {
      const res = await fetch("/api/websites");
      if (!res.ok) {
        throw new Error("Failed to fetch websites");
      }
      const data = await res.json();
      setWebsites(data);
      setError(null);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWebsites();
  }, [fetchWebsites]);

  return {
    websites,
    loading,
    error,
    refetch: fetchWebsites,
  };
}