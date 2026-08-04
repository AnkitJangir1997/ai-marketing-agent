"use client";

import { useState, useEffect, useCallback } from "react";

export default function useSeoAudit() {
  const [audit, setAudit] = useState(null);
  const [website, setWebsite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAudit = useCallback(async () => {
    try {
      const res = await fetch("/api/seo-audit");
      if (!res.ok) throw new Error("Failed to fetch audit data");
      const data = await res.json();
      setAudit(data.audit);
      setWebsite(data.website);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const runScan = async (domain) => {
    setLoading(true);
    try {
      const res = await fetch("/api/seo-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain }),
      });
      if (!res.ok) throw new Error("Crawl scan failed");
      const updated = await res.json();
      setAudit(updated);
      return updated;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const autoFix = async (issueId) => {
    if (!audit?.id) return;
    try {
      const res = await fetch("/api/seo-audit", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ auditId: audit.id, issueId }),
      });
      if (!res.ok) throw new Error("Auto-fix failed");
      const updated = await res.json();
      setAudit(updated);
      return updated;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const res = await fetch("/api/seo-audit");
        if (!res.ok) throw new Error("Failed to fetch audit data");
        const data = await res.json();
        if (isMounted) {
          setAudit(data.audit);
          setWebsite(data.website);
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
    audit,
    website,
    loading,
    error,
    refetch: fetchAudit,
    runScan,
    autoFix,
  };
}
