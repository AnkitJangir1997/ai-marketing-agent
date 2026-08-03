"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Globe, Search, Send, ShieldAlert } from "lucide-react";

const iconMap = {
  audit: CheckCircle2,
  blog: Send,
  website: Globe,
  keyword: Search,
  issue: ShieldAlert,
};

const colorMap = {
  audit: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400",
  blog: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-400",
  website: "text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-400",
  keyword: "text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400",
  issue: "text-red-600 bg-red-50 dark:bg-red-950/40 dark:text-red-400",
};

function timeAgo(dateStr) {
  const now = new Date();
  const then = new Date(dateStr);
  const diff = Math.floor((now - then) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hrs ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function ActivityCard() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((r) => r.json())
      .then((data) => {
        if (data.activities) setActivities(data.activities);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="h-[420px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between dark:border-slate-800 dark:bg-slate-900">
      <div>
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
          Agent Activity Log
        </h2>
        <p className="text-xs text-slate-400 dark:text-slate-400 mt-1">
          Real-time log of AI agent tasks from database
        </p>
      </div>

      <div className="mt-4 flex-1 space-y-3.5 overflow-y-auto">
        {loading && (
          <div className="flex items-center gap-3 py-6">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />
            <p className="text-sm text-slate-400">Loading activity...</p>
          </div>
        )}

        {!loading && activities.length === 0 && (
          <div className="py-10 text-center text-slate-400 text-sm">
            No activity yet. Add a website to get started.
          </div>
        )}

        {activities.map((item, idx) => {
          const Icon = iconMap[item.type] || CheckCircle2;
          const color = colorMap[item.type] || colorMap.audit;
          return (
            <div
              key={idx}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-3 transition hover:bg-slate-50 dark:border-slate-800/80 dark:bg-slate-800/40 dark:hover:bg-slate-800/80"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 truncate max-w-[180px]">
                    {item.details}
                  </p>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500 shrink-0">
                {timeAgo(item.time)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}