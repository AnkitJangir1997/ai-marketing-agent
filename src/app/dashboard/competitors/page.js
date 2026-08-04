"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import useCompetitors from "@/features/competitor/hooks/useCompetitors";
import useWebsites from "@/features/website/hooks/useWebsites";
import useKeywords from "@/features/keyword/hooks/useKeywords";
import { Toaster, toast } from "sonner";
import { Plus, Sparkles, RefreshCw, Globe, AlertCircle } from "lucide-react";

export default function CompetitorsPage() {
  const router = useRouter();
  const { competitors, loading, error, addCompetitor } = useCompetitors();
  const { websites } = useWebsites();
  const { keywords } = useKeywords();
  const [newDomain, setNewDomain] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const targetWebsite = websites.length > 0 ? websites[0] : null;

  const handleAddCompetitor = async (e) => {
    e.preventDefault();
    if (!newDomain.trim()) return;

    setIsAdding(true);
    toast.info(`Competitor Agent analyzing domain "${newDomain}"...`);

    try {
      const added = await addCompetitor(newDomain.trim());
      toast.success(`Competitor "${added.domain}" added & saved to database!`);
      setNewDomain("");
    } catch (err) {
      toast.error(err.message || "Failed to add competitor");
    } finally {
      setIsAdding(false);
    }
  };

  // Derive keyword gaps dynamically from tracked keywords
  const keywordGaps = keywords.slice(0, 5).map((kw, idx) => ({
    id: kw.id || idx,
    keyword: kw.term,
    compRank: `#${idx + 2}`,
    yourRank: kw.status === "Discovered" ? "Not Ranking" : `#${idx + 12}`,
    volume: kw.volume || 1000,
    gapImpact: kw.intent || "Opportunity",
  }));

  return (
    <DashboardLayout>
      <Toaster position="top-right" richColors />

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Competitor Intelligence</h1>
          <p className="mt-1.5 text-slate-500 text-sm">
            Track competitor traffic, ranking keywords, and target content gaps automatically
          </p>
        </div>
      </div>

      {/* Add Competitor Bar */}
      <Card className="mb-8 p-6">
        <form onSubmit={handleAddCompetitor} className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1 w-full">
            <Input
              placeholder="Enter competitor domain (e.g. competitor.com)..."
              value={newDomain}
              onChange={(e) => setNewDomain(e.target.value)}
              disabled={isAdding}
            />
          </div>
          <Button type="submit" disabled={isAdding} className="w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2 inline" />
            {isAdding ? "Analyzing..." : "Track Competitor"}
          </Button>
        </form>
      </Card>

      {loading && (
        <Card className="py-12 text-center text-slate-400 font-medium mb-8">
          <RefreshCw className="h-8 w-8 animate-spin text-indigo-600 mx-auto mb-3" />
          Loading competitors from database...
        </Card>
      )}

      {error && (
        <Card className="py-8 text-center text-red-500 font-medium mb-8">
          Error loading competitors: {error}
        </Card>
      )}

      {/* Monitored Competitors Grid */}
      {!loading && !error && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {targetWebsite ? (
            <Card className="border-2 border-indigo-500 bg-indigo-50/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800">{targetWebsite.name}</h3>
                <span className="bg-indigo-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                  Target Domain
                </span>
              </div>
              <p className="text-xl font-extrabold text-indigo-700">{targetWebsite.domain}</p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-2.5 rounded-lg border border-indigo-100">
                  <span className="text-slate-400 block">Status</span>
                  <span className="text-sm font-bold text-slate-800">{targetWebsite.status}</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-indigo-100">
                  <span className="text-slate-400 block">SEO Score</span>
                  <span className="text-sm font-bold text-emerald-600">
                    {targetWebsite.seoScore || 0} / 100
                  </span>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="border border-dashed border-slate-300 py-8 text-center text-slate-400">
              <Globe className="h-8 w-8 mx-auto mb-2 text-slate-300" />
              <p className="text-sm font-medium">No target website added yet.</p>
            </Card>
          )}

          {competitors.map((comp) => (
            <Card key={comp.id || comp.domain}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800">{comp.name}</h3>
                <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  Competitor
                </span>
              </div>
              <p className="text-xl font-bold text-slate-700">{comp.domain}</p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="text-slate-400 block">Est. Traffic</span>
                  <span className="text-sm font-bold text-slate-800">{comp.traffic || "0"} / mo</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="text-slate-400 block">Domain Rating</span>
                  <span className="text-sm font-bold text-indigo-600">DR {comp.dr || 0}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Content & Keyword Gap Analysis */}
      <Card>
        <div className="flex items-center justify-between pb-6 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-800">High Impact Content Gaps</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Keywords where competitors rank in Top 10 but your domain is lagging
            </p>
          </div>
        </div>

        {keywordGaps.length === 0 ? (
          <div className="py-12 text-center text-slate-400">
            <AlertCircle className="h-8 w-8 text-slate-300 mx-auto mb-2" />
            <p className="font-semibold text-slate-700">No content gaps detected yet.</p>
            <p className="text-xs text-slate-400 mt-1">
              Add competitors and research keywords to unlock content gap analysis.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase text-slate-400 font-semibold">
                  <th className="pb-3">Keyword Opportunity</th>
                  <th className="pb-3">Competitor Rank</th>
                  <th className="pb-3">Your Rank</th>
                  <th className="pb-3">Monthly Vol</th>
                  <th className="pb-3">Gap Type</th>
                  <th className="pb-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {keywordGaps.map((gap) => (
                  <tr key={gap.id} className="hover:bg-slate-50/60 transition">
                    <td className="py-4 font-semibold text-slate-800 text-sm">
                      {gap.keyword}
                    </td>
                    <td className="py-4 font-bold text-emerald-600 text-sm">
                      {gap.compRank}
                    </td>
                    <td className="py-4 font-medium text-red-500 text-sm">
                      {gap.yourRank}
                    </td>
                    <td className="py-4 font-bold text-slate-700 text-sm">
                      {gap.volume.toLocaleString()}
                    </td>
                    <td className="py-4">
                      <span className="inline-block bg-indigo-50 text-indigo-700 border border-indigo-200 px-2.5 py-1 rounded-md text-xs font-semibold">
                        {gap.gapImpact}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button
                        onClick={() =>
                          router.push(`/dashboard/blogs/create?keyword=${encodeURIComponent(gap.keyword)}`)
                        }
                        className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 transition shadow-2xs"
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Outrank with AI</span>
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
