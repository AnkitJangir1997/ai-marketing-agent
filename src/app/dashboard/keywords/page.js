"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import useKeywords from "@/features/keyword/hooks/useKeywords";
import { Toaster, toast } from "sonner";
import { Search, Sparkles, FileEdit, RefreshCw } from "lucide-react";

export default function KeywordResearchPage() {
  const router = useRouter();
  const { keywords, loading, error, researchKeywords } = useKeywords();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIntent, setSelectedIntent] = useState("All");
  const [isSearching, setIsSearching] = useState(false);

  const handleResearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    toast.info(`AI Keyword Agent analyzing SERP volume & difficulty for "${searchQuery}"...`);

    try {
      const newCluster = await researchKeywords(searchQuery.trim());
      toast.success(`Found ${newCluster.length} new high-intent keyword clusters! Saved to Supabase.`);
      setSearchQuery("");
    } catch (err) {
      toast.error(err.message || "Research failed");
    } finally {
      setIsSearching(false);
    }
  };

  const filteredKeywords = keywords.filter((kw) => {
    const matchesIntent = selectedIntent === "All" || kw.intent === selectedIntent;
    const matchesQuery = kw.term.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIntent && matchesQuery;
  });

  const getDifficultyColor = (diff) => {
    if (diff < 30) return "text-emerald-600 bg-emerald-50 border-emerald-200";
    if (diff < 60) return "text-amber-600 bg-amber-50 border-amber-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  return (
    <DashboardLayout>
      <Toaster position="top-right" richColors />

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Keyword Research</h1>
          <p className="mt-1.5 text-slate-500 text-sm">
            Discover low-competition, high-intent keywords persisted in Supabase database
          </p>
        </div>
      </div>

      {/* Search & AI Research Bar */}
      <Card className="mb-8 p-6 bg-gradient-to-r from-indigo-900 to-slate-900 text-white">
        <form onSubmit={handleResearch} className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Enter seed topic (e.g. Web Design, Local SEO)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl bg-slate-800/90 pl-12 pr-4 py-3 text-white placeholder-slate-400 outline-none border border-slate-700 focus:border-indigo-500 transition"
            />
          </div>
          <Button type="submit" disabled={isSearching} className="bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-6">
            <Sparkles className="h-4 w-4 mr-2 inline" />
            {isSearching ? "Searching AI..." : "Research Keywords"}
          </Button>
        </form>
      </Card>

      {/* Keyword Table Card */}
      <Card>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center pb-6 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Target Keywords ({filteredKeywords.length})</h2>
            <p className="text-xs text-slate-400 mt-0.5">High opportunity keywords loaded live from database</p>
          </div>

          <div className="flex items-center gap-2">
            {["All", "Transactional", "Commercial", "Informational"].map((intent) => (
              <button
                key={intent}
                onClick={() => setSelectedIntent(intent)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  selectedIntent === intent
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {intent}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="py-12 text-center text-slate-400 font-medium">
            <RefreshCw className="h-8 w-8 animate-spin text-indigo-600 mx-auto mb-3" />
            Loading keywords from Supabase...
          </div>
        )}

        {error && (
          <div className="py-8 text-center text-red-500 font-medium">
            Error loading keywords: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase text-slate-400 font-semibold">
                  <th className="pb-3">Keyword</th>
                  <th className="pb-3">Monthly Search Vol</th>
                  <th className="pb-3">Difficulty (KD)</th>
                  <th className="pb-3">CPC</th>
                  <th className="pb-3">Search Intent</th>
                  <th className="pb-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredKeywords.map((kw) => (
                  <tr key={kw.id} className="hover:bg-slate-50/60 transition">
                    <td className="py-4 font-semibold text-slate-800 text-sm">
                      {kw.term}
                      <span className="block text-xs font-normal text-slate-400 mt-0.5">
                        Cluster: {kw.cluster || "General"}
                      </span>
                    </td>
                    <td className="py-4 font-bold text-slate-700 text-sm">
                      {kw.volume.toLocaleString()} / mo
                    </td>
                    <td className="py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border ${getDifficultyColor(
                          kw.difficulty
                        )}`}
                      >
                        {kw.difficulty} / 100
                      </span>
                    </td>
                    <td className="py-4 font-medium text-slate-600 text-sm">{kw.cpc}</td>
                    <td className="py-4">
                      <span className="inline-block bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium">
                        {kw.intent}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button
                        onClick={() =>
                          router.push(`/dashboard/blogs/create?keyword=${encodeURIComponent(kw.term)}`)
                        }
                        className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 transition shadow-2xs"
                      >
                        <FileEdit className="h-3.5 w-3.5" />
                        <span>Write Article</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </DashboardLayout>
  );
}
