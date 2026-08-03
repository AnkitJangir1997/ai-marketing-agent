"use client";

import { CheckCircle2, Globe, Search, Send } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "SEO Audit Completed",
    details: "AJStudio.in • Health Score: 91%",
    time: "10 mins ago",
    icon: CheckCircle2,
    color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400",
  },
  {
    id: 2,
    title: "New Blog Published",
    details: "10 SEO Tips for Small Business → WordPress",
    time: "2 hours ago",
    icon: Send,
    color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-400",
  },
  {
    id: 3,
    title: "New Website Added",
    details: "google.co.in registered",
    time: "4 hours ago",
    icon: Globe,
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-400",
  },
  {
    id: 4,
    title: "Keyword Research Finished",
    details: "24 new high-intent clusters found",
    time: "5 hours ago",
    icon: Search,
    color: "text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400",
  },
];

export default function ActivityCard() {
  return (
    <div className="h-[420px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between dark:border-slate-800 dark:bg-slate-900">
      <div>
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
          Agent Activity Log
        </h2>
        <p className="text-xs text-slate-400 dark:text-slate-400 mt-1">
          Real-time log of background agent tasks
        </p>
      </div>

      <div className="mt-4 space-y-3.5">
        {activities.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-3 transition hover:bg-slate-50 dark:border-slate-800/80 dark:bg-slate-800/40 dark:hover:bg-slate-800/80"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400">
                    {item.details}
                  </p>
                </div>
              </div>

              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                {item.time}
              </span>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-3 rounded-xl border border-slate-200 bg-white py-2 text-center text-xs font-semibold text-slate-600 hover:bg-slate-50 transition dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
        View All Logs
      </button>
    </div>
  );
}