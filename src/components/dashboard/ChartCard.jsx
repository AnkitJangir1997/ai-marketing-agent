"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const performanceData = [
  { month: "Jan", score: 65, traffic: 3200, keywords: 410 },
  { month: "Feb", score: 68, traffic: 4100, keywords: 480 },
  { month: "Mar", score: 74, traffic: 5800, keywords: 620 },
  { month: "Apr", score: 79, traffic: 7200, keywords: 790 },
  { month: "May", score: 85, traffic: 9400, keywords: 950 },
  { month: "Jun", score: 88, traffic: 11800, keywords: 1100 },
  { month: "Jul", score: 91, traffic: 14200, keywords: 1240 },
];

export default function ChartCard() {
  return (
    <div className="h-[420px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            SEO Performance Trend
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-400 mt-1">
            Organic traffic growth & keyword index expansion (Last 7 Months)
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-indigo-600 inline-block"></span>
            <span className="text-slate-600 dark:text-slate-300">Organic Traffic</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-emerald-500 inline-block"></span>
            <span className="text-slate-600 dark:text-slate-300">SEO Health Score</span>
          </div>
        </div>
      </div>

      <div className="mt-4 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={performanceData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                borderRadius: "12px",
                border: "1px solid #1e293b",
                color: "#fff",
                fontSize: "12px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
              }}
              formatter={(value, name) => [
                name === "traffic"
                  ? `${value.toLocaleString()} visits`
                  : `${value}/100`,
                name === "traffic" ? "Traffic" : "SEO Score",
              ]}
            />
            <Area
              type="monotone"
              dataKey="traffic"
              stroke="#6366f1"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorTraffic)"
            />
            <Area
              type="monotone"
              dataKey="score"
              stroke="#10b981"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorScore)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}