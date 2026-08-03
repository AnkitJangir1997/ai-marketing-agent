"use client";

import Card from "@/components/ui/Card";
import WebsiteStatusBadge from "./WebsiteStatusBadge";
import useWebsites from "@/features/website/hooks/useWebsites";

export default function WebsiteTable({ searchQuery = "" }) {
  const { websites, loading, error } = useWebsites();

  if (loading) {
    return (
      <Card className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600"></div>
          <p className="text-slate-500 font-medium">Loading websites...</p>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="py-8 text-center text-red-500 font-medium">
        Error loading websites: {error}
      </Card>
    );
  }

  const filtered = websites.filter(
    (site) =>
      site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.domain.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filtered.length === 0) {
    return (
      <Card className="py-12 text-center text-slate-500">
        <p className="font-medium text-lg text-slate-700">No websites found</p>
        <p className="text-sm text-slate-400 mt-1">
          {searchQuery ? "Try searching for a different name or domain" : "Add a website to get started!"}
        </p>
      </Card>
    );
  }

  return (
    <Card className="overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-slate-100 text-slate-400 text-sm font-semibold uppercase">
            <th className="pb-3 text-left font-semibold">Website</th>
            <th className="pb-3 text-left font-semibold">Domain</th>
            <th className="pb-3 text-left font-semibold">SEO</th>
            <th className="pb-3 text-left font-semibold">Status</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-50">
          {filtered.map((site) => (
            <tr key={site.id} className="hover:bg-slate-50/50 transition">
              <td className="py-4 font-semibold text-slate-800">{site.name}</td>
              <td className="py-4 text-slate-500">{site.domain}</td>
              <td className="py-4 font-bold text-indigo-600">
                {site.seoScore !== undefined ? site.seoScore : site.seo || 0}
              </td>
              <td className="py-4">
                <WebsiteStatusBadge status={site.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}