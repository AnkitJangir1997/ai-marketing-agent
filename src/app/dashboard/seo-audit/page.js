"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import useSeoAudit from "@/features/seo/hooks/useSeoAudit";
import { Toaster, toast } from "sonner";
import {
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Sparkles,
} from "lucide-react";

export default function SeoAuditPage() {
  const { audit, website, loading, error, runScan, autoFix } = useSeoAudit();
  const [filterSeverity, setFilterSeverity] = useState("All");
  const [isScanning, setIsScanning] = useState(false);

  const handleRunScan = async () => {
    setIsScanning(true);
    toast.info("AI Web Crawler Agent running live HTTP scan on site...");
    try {
      const domainToScan = website?.domain;
      if (!domainToScan) {
        toast.error("Please add a website to run an SEO audit.");
        setIsScanning(false);
        return;
      }
      await runScan(domainToScan);
      toast.success("Live SEO Health Audit completed!");
    } catch (err) {
      toast.error(err.message || "Audit failed");
    } finally {
      setIsScanning(false);
    }
  };

  const handleAutoFix = async (issueId, title) => {
    try {
      await autoFix(issueId);
      toast.success(`AI Agent fixed issue: ${title}`);
    } catch (err) {
      toast.error(err.message || "Failed to apply fix");
    }
  };

  const issuesList = audit?.issues || [];
  const filteredIssues = issuesList.filter((item) => {
    if (filterSeverity === "All") return true;
    return item.severity === filterSeverity;
  });

  return (
    <DashboardLayout>
      <Toaster position="top-right" richColors />

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">SEO Technical Audit</h1>
          <p className="mt-1.5 text-slate-500 text-sm">
            Live web crawler diagnostics for{" "}
            <span className="font-semibold text-slate-800">
              {website?.domain ? website.domain : "No website selected"}
            </span>
          </p>
        </div>

        <Button onClick={handleRunScan} disabled={isScanning || loading}>
          <RefreshCw className={`h-4 w-4 mr-2 inline ${isScanning ? "animate-spin" : ""}`} />
          {isScanning ? "Scanning Web Pages..." : "Run AI Health Scan"}
        </Button>
      </div>

      {loading && !audit && (
        <Card className="py-12 text-center text-slate-500">
          <RefreshCw className="h-8 w-8 animate-spin text-indigo-600 mx-auto mb-3" />
          <p className="font-medium">Loading live audit data from database...</p>
        </Card>
      )}

      {error && (
        <Card className="py-8 text-center text-red-500 font-medium">
          Error loading audit data: {error}
        </Card>
      )}

      {audit && (
        <>
          {/* Score Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="flex items-center gap-4 border-l-4 border-l-emerald-500">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 font-bold text-xl">
                {audit.healthScore}
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Health Score
                </p>
                <h3 className="text-lg font-bold text-slate-800">
                  {audit.healthScore >= 80 ? "Good Status" : "Needs Review"}
                </h3>
              </div>
            </Card>

            <Card className="flex items-center gap-4 border-l-4 border-l-amber-500">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 font-bold text-xl">
                {audit.criticalCount || 0}
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Critical Issues
                </p>
                <h3 className="text-lg font-bold text-slate-800">Requires Action</h3>
              </div>
            </Card>

            <Card className="flex items-center gap-4 border-l-4 border-l-indigo-500">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 font-bold text-xl">
                {audit.pagesCrawled || 1}
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Pages Crawled
                </p>
                <h3 className="text-lg font-bold text-slate-800">Live HTML Parsed</h3>
              </div>
            </Card>

            <Card className="flex items-center gap-4 border-l-4 border-l-blue-500">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 font-bold text-xl">
                1.2s
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Avg Page Speed
                </p>
                <h3 className="text-lg font-bold text-slate-800">Fast Response</h3>
              </div>
            </Card>
          </div>

          {/* Issues Table Card */}
          <Card>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Crawled Diagnostics ({filteredIssues.length})
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Real-time page tags and metadata analysis from Supabase database
                </p>
              </div>

              <div className="flex items-center gap-2">
                {["All", "Critical", "Warning", "Notice"].map((sev) => (
                  <button
                    key={sev}
                    onClick={() => setFilterSeverity(sev)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                      filterSeverity === sev
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {sev}
                  </button>
                ))}
              </div>
            </div>

            {filteredIssues.length === 0 ? (
              <div className="py-16 text-center text-slate-400">
                <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto mb-3" />
                <p className="font-semibold text-slate-700">No issues found in this category!</p>
                <p className="text-xs text-slate-400 mt-1">Your website HTML structure is healthy.</p>
              </div>
            ) : (
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs uppercase text-slate-400 font-semibold">
                      <th className="pb-3">Issue Title</th>
                      <th className="pb-3">Category</th>
                      <th className="pb-3">Severity</th>
                      <th className="pb-3">Affected</th>
                      <th className="pb-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {filteredIssues.map((issue) => (
                      <tr key={issue.id} className="hover:bg-slate-50/60 transition">
                        <td className="py-4">
                          <div className="font-semibold text-slate-800 text-sm">
                            {issue.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 font-mono">
                            e.g. {(issue.pages || []).join(", ")}
                          </div>
                        </td>
                        <td className="py-4">
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                            {issue.category}
                          </span>
                        </td>
                        <td className="py-4">
                          <Badge
                            color={
                              issue.severity === "Critical"
                                ? "red"
                                : issue.severity === "Warning"
                                ? "yellow"
                                : "blue"
                            }
                          >
                            {issue.severity}
                          </Badge>
                        </td>
                        <td className="py-4 font-bold text-slate-700 text-sm">
                          {issue.count} pages
                        </td>
                        <td className="py-4 text-right">
                          <button
                            onClick={() => handleAutoFix(issue.id, issue.title)}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 border border-indigo-200 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-600 hover:text-white transition shadow-2xs"
                          >
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Auto-Fix with AI</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </>
      )}
    </DashboardLayout>
  );
}
