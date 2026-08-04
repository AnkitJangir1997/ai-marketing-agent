"use client";

import { useState, useEffect } from "react";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export default function WelcomeSection() {
  const [greeting] = useState(getGreeting);
  const [websiteCount, setWebsiteCount] = useState(null);

  useEffect(() => {
    fetch("/api/websites")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setWebsiteCount(data.length);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="mb-8">
      <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
        {greeting} 👋
      </h1>

      <p className="mt-2 text-lg font-medium text-slate-600 dark:text-slate-300">
        {websiteCount === null
          ? "Loading your dashboard..."
          : websiteCount === 0
          ? "Welcome! Add your first website to get started."
          : `You're managing ${websiteCount} website${websiteCount === 1 ? "" : "s"}.`}
      </p>

      <p className="mt-1 text-sm text-slate-400 dark:text-slate-400">
        Manage all your websites, SEO audits and AI content from one dashboard.
      </p>
    </section>
  );
}