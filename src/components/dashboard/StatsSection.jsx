"use client";

import { useState, useEffect } from "react";
import StatsCard from "./StatsCard";
import { Globe, Search, ShieldCheck, AlertCircle } from "lucide-react";

export default function StatsSection() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((r) => r.json())
      .then((data) => {
        if (data.stats) setStats(data.stats);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    {
      title: "Websites",
      value: loading ? "—" : (stats?.websites ?? 0).toString(),
      change: stats?.websites > 0 ? `${stats.websites} active` : "Add first site",
      color: "bg-green-100 text-green-700",
      icon: Globe,
    },
    {
      title: "Keywords",
      value: loading ? "—" : (stats?.keywords ?? 0).toLocaleString(),
      change: stats?.keywords > 0 ? "Tracked keywords" : "Run research",
      color: "bg-blue-100 text-blue-700",
      icon: Search,
    },
    {
      title: "SEO Score",
      value: loading ? "—" : (stats?.seoScore ?? 0).toString(),
      change: stats?.seoScore >= 80 ? "Healthy" : stats?.seoScore > 0 ? "Needs work" : "Run audit",
      color: "bg-indigo-100 text-indigo-700",
      icon: ShieldCheck,
    },
    {
      title: "Issues",
      value: loading ? "—" : (stats?.issues ?? 0).toString(),
      change: stats?.issues === 0 ? "All clear" : `${stats?.issues} open`,
      color: stats?.issues > 0 ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700",
      icon: AlertCircle,
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((item) => (
        <StatsCard key={item.title} {...item} />
      ))}
    </section>
  );
}