"use client";

import Link from "next/link";
import useWebsites from "@/features/website/hooks/useWebsites";

export default function WebsiteTable() {
  const { websites, loading, error } = useWebsites();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
          Your Websites
        </h2>

        <Link href="/dashboard/websites/add" passHref>
          <span className="rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 transition cursor-pointer text-sm">
            Add Website
          </span>
        </Link>
      </div>

      {loading && (
        <div className="flex flex-col items-center gap-3 py-8">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600"></div>
          <p className="text-slate-400 text-sm">Loading websites...</p>
        </div>
      )}

      {error && (
        <div className="py-6 text-center text-red-500 text-sm font-medium">
          Error: {error}
        </div>
      )}

      {!loading && !error && websites.length === 0 && (
        <div className="py-8 text-center text-slate-400 text-sm">
          No websites registered yet.
        </div>
      )}

      {!loading && !error && websites.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-400 text-sm text-left">
                <th className="pb-3 font-semibold">Website</th>
                <th className="pb-3 font-semibold">SEO Score</th>
                <th className="pb-3 font-semibold">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-50 dark:divide-slate-800/60">
              {websites.slice(0, 5).map((site) => (
                <tr
                  key={site.id}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition"
                >
                  <td className="py-3">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      {site.name}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-400 font-mono">
                      {site.domain}
                    </p>
                  </td>

                  <td className="font-extrabold text-slate-700 dark:text-slate-200">
                    {site.seoScore !== undefined ? site.seoScore : site.score || 0}
                  </td>

                  <td>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                        site.status === "Healthy"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/50"
                          : "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/50"
                      }`}
                    >
                      {site.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}