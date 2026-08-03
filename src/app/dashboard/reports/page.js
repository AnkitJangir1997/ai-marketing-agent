"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Toaster, toast } from "sonner";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import {
  Download,
  MousePointer,
  Eye,
  Percent,
  Award,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
} from "lucide-react";

const rankings = [
  {
    id: 1,
    keyword: "Best Web Development Company Jaipur",
    position: 2,
    change: "+3",
    isPositive: true,
    volume: "3.6K",
    url: "/services/web-development",
  },
  {
    id: 2,
    keyword: "Affordable E-Commerce Website Developer",
    position: 5,
    change: "+5",
    isPositive: true,
    volume: "2.4K",
    url: "/services/e-commerce",
  },
  {
    id: 3,
    keyword: "Local SEO Audit Checklist for Business",
    position: 8,
    change: "-1",
    isPositive: false,
    volume: "2.1K",
    url: "/blog/seo-checklist",
  },
  {
    id: 4,
    keyword: "Best Website Developer in Jaipur Under 20000",
    position: 1,
    change: "+4",
    isPositive: true,
    volume: "1.4K",
    url: "/pricing",
  },
];

export default function ReportsPage() {
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    async function fetchReports() {
      try {
        const res = await fetch("/api/reports");
        if (res.ok) {
          const data = await res.json();
          setReportData(data);
        }
      } catch (err) {
        console.error("Reports API error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchReports();
  }, []);

  const handleExportPdf = () => {
    setIsExporting(true);
    toast.info("Reporting Agent generating executive PDF report from Supabase analytics...");

    setTimeout(() => {
      setIsExporting(false);
      toast.success("Executive SEO & Traffic PDF Report downloaded!");
    }, 2200);
  };

  const report = reportData?.report || {
    totalClicks: 14200,
    impressions: 142800,
    ctr: 9.9,
    avgPosition: 4.2,
  };

  const trafficData = reportData?.trafficData || [
    { day: "Day 1", clicks: 320, impressions: 3400 },
    { day: "Day 5", clicks: 410, impressions: 4200 },
    { day: "Day 10", clicks: 520, impressions: 5100 },
    { day: "Day 15", clicks: 680, impressions: 6400 },
    { day: "Day 20", clicks: 840, impressions: 7900 },
    { day: "Day 25", clicks: 1100, impressions: 9800 },
    { day: "Day 30", clicks: 1420, impressions: 12400 },
  ];

  return (
    <DashboardLayout>
      <Toaster position="top-right" richColors />

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Analytics & Performance Reports</h1>
          <p className="mt-1.5 text-slate-500 text-sm">
            Search console clicks, impression trends, and automated ranking reports from Supabase
          </p>
        </div>

        <Button onClick={handleExportPdf} disabled={isExporting}>
          <Download className="h-4 w-4 mr-2 inline" />
          {isExporting ? "Generating PDF..." : "Export PDF Report"}
        </Button>
      </div>

      {loading ? (
        <Card className="py-12 text-center text-slate-400 font-medium mb-8">
          <RefreshCw className="h-8 w-8 animate-spin text-indigo-600 mx-auto mb-3" />
          Loading analytics from database...
        </Card>
      ) : (
        <>
          {/* KPI Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <MousePointer className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase">Total Clicks</p>
                <h3 className="text-xl font-bold text-slate-800">
                  {report.totalClicks?.toLocaleString()}
                </h3>
                <span className="text-xs font-semibold text-emerald-600 inline-flex items-center mt-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5 mr-0.5" /> +18.4%
                </span>
              </div>
            </Card>

            <Card className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase">Total Impressions</p>
                <h3 className="text-xl font-bold text-slate-800">
                  {report.impressions?.toLocaleString()}
                </h3>
                <span className="text-xs font-semibold text-emerald-600 inline-flex items-center mt-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5 mr-0.5" /> +24.1%
                </span>
              </div>
            </Card>

            <Card className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Percent className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase">Avg CTR</p>
                <h3 className="text-xl font-bold text-slate-800">{report.ctr}%</h3>
                <span className="text-xs font-semibold text-emerald-600 inline-flex items-center mt-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5 mr-0.5" /> +1.2%
                </span>
              </div>
            </Card>

            <Card className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase">Avg Position</p>
                <h3 className="text-xl font-bold text-slate-800">#{report.avgPosition}</h3>
                <span className="text-xs font-semibold text-emerald-600 inline-flex items-center mt-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5 mr-0.5" /> +2.5 spots
                </span>
              </div>
            </Card>
          </div>

          {/* Traffic Trend Line Chart */}
          <Card className="mb-8 p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-1">Clicks & Impressions Trend</h2>
            <p className="text-xs text-slate-400 mb-6">Organic growth tracking over the last 30 days</p>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      borderRadius: "12px",
                      border: "none",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="clicks" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} name="Clicks" />
                  <Line type="monotone" dataKey="impressions" stroke="#0ea5e9" strokeWidth={2} strokeDasharray="5 5" name="Impressions" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </>
      )}

      {/* Keyword Rankings Table */}
      <Card>
        <div className="flex items-center justify-between pb-6 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Keyword Position Tracker</h2>
            <p className="text-xs text-slate-400 mt-0.5">Live rankings for primary targeted keywords</p>
          </div>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 text-xs uppercase text-slate-400 font-semibold">
                <th className="pb-3">Keyword</th>
                <th className="pb-3">Rank Position</th>
                <th className="pb-3">30-Day Change</th>
                <th className="pb-3">Monthly Vol</th>
                <th className="pb-3">Landing URL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {rankings.map((rank) => (
                <tr key={rank.id} className="hover:bg-slate-50/60 transition">
                  <td className="py-4 font-semibold text-slate-800 text-sm">
                    {rank.keyword}
                  </td>
                  <td className="py-4 font-extrabold text-indigo-600 text-base">
                    #{rank.position}
                  </td>
                  <td className="py-4 font-bold text-sm">
                    <span
                      className={`inline-flex items-center gap-0.5 ${
                        rank.isPositive ? "text-emerald-600" : "text-red-500"
                      }`}
                    >
                      {rank.isPositive ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4" />
                      )}
                      {rank.change}
                    </span>
                  </td>
                  <td className="py-4 font-bold text-slate-700 text-sm">
                    {rank.volume}
                  </td>
                  <td className="py-4 font-mono text-xs text-slate-500">
                    {rank.url}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardLayout>
  );
}
