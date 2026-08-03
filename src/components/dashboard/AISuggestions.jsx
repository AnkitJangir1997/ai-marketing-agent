"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, AlertTriangle, FileText, Search, Globe, ShieldCheck } from "lucide-react";

const iconMap = {
  critical: AlertTriangle,
  keyword: Search,
  content: FileText,
  website: Globe,
  audit: ShieldCheck,
};

const colorMap = {
  critical: "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/50",
  keyword: "bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-400 dark:border-indigo-900/50",
  content: "bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-900/50",
  website: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900/50",
  audit: "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/50",
};

export default function AISuggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((r) => r.json())
      .then((data) => {
        if (data.aiSuggestions) setSuggestions(data.aiSuggestions);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              Master AI Recommendations
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-400">
              Autonomous actions identified by Master AI Agent
            </p>
          </div>
        </div>
      </div>

      {loading && (
        <div className="flex items-center gap-3 py-6">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />
          <p className="text-sm text-slate-400">Analyzing your data...</p>
        </div>
      )}

      {!loading && suggestions.length === 0 && (
        <div className="py-8 text-center">
          <p className="text-slate-400 text-sm">Add a website and run an SEO audit to get AI recommendations.</p>
          <Link href="/dashboard/websites/add" className="mt-3 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition">
            Add Your First Website →
          </Link>
        </div>
      )}

      <div className="space-y-4">
        {suggestions.map((item, idx) => {
          const Icon = iconMap[item.type] || FileText;
          const colorClass = colorMap[item.type] || colorMap.content;
          return (
            <div
              key={idx}
              className="group flex flex-col justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/30 dark:border-slate-800/80 dark:bg-slate-800/40 dark:hover:border-slate-700 dark:hover:bg-slate-800/80 sm:flex-row sm:items-center"
            >
              <div className="flex items-start gap-3.5">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${colorClass}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>

              <Link href={item.actionHref} passHref>
                <button className="flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-xs transition hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-indigo-600 dark:hover:border-indigo-600">
                  <span>{item.actionText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
