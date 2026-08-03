"use client";

import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function SeoIssues() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((r) => r.json())
      .then((data) => {
        if (data.seoIssues) setIssues(data.seoIssues);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">SEO Issues</h2>
        <Link
          href="/dashboard/seo-audit"
          className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
        >
          View All →
        </Link>
      </div>

      {loading && (
        <div className="flex items-center gap-3 py-6">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />
          <p className="text-sm text-slate-400">Loading issues...</p>
        </div>
      )}

      {!loading && issues.length === 0 && (
        <div className="py-8 text-center">
          <AlertCircle className="mx-auto h-8 w-8 text-slate-300 dark:text-slate-600 mb-2" />
          <p className="text-slate-400 text-sm">No issues found.</p>
          <p className="text-xs text-slate-400 mt-1">Run an SEO Audit to detect problems.</p>
          <Link
            href="/dashboard/seo-audit"
            className="mt-3 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition"
          >
            Run SEO Audit →
          </Link>
        </div>
      )}

      <div className="space-y-4">
        {issues.map((issue) => (
          <div
            key={issue.title}
            className="flex items-center justify-between rounded-xl bg-slate-50/60 p-4 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80"
          >
            <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
              {issue.title}
            </span>
            <span className="rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs font-bold dark:bg-red-950/40 dark:text-red-400">
              {issue.total}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}