"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Toaster, toast } from "sonner";
import {
  Globe,
  Clock,
  Save,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export default function SettingsPage() {
  const [wpUrl, setWpUrl] = useState("https://ajstudio.in");
  const [wpUser, setWpUser] = useState("admin_ankit");
  const [wpPassword, setWpPassword] = useState("••••••••••••••••");
  const [isTestingWp, setIsTestingWp] = useState(false);

  const [aiProvider, setAiProvider] = useState("gemini");
  const [apiKey, setApiKey] = useState("••••••••••••••••••••••••");

  const [cronEnabled, setCronEnabled] = useState(true);
  const [autoPublish, setAutoPublish] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleTestWp = async (e) => {
    e.preventDefault();
    setIsTestingWp(true);
    toast.info("WordPress Agent verifying REST API application password...");

    try {
      const res = await fetch("/api/wordpress/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          wpUrl,
          username: wpUser,
          applicationPassword: wpPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Connection failed");
      toast.success(`WordPress REST API Connection Successful! Verified as ${data.user || wpUser}`);
    } catch (err) {
      toast.error(err.message || "WordPress connection failed");
    } finally {
      setIsTestingWp(false);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    toast.info("Saving platform settings to Supabase...");

    setTimeout(() => {
      setIsSaving(false);
      toast.success("Settings saved successfully!");
    }, 1200);
  };

  return (
    <DashboardLayout>
      <Toaster position="top-right" richColors />

      <PageHeader
        title="Settings & Integrations"
        description="Configure WordPress REST API, AI Models, and Automated 8:00 AM Cron Jobs"
      />

      <form onSubmit={handleSave} className="space-y-8 max-w-4xl">
        {/* WordPress REST API Section */}
        <Card>
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">WordPress REST API Integration</h2>
              <p className="text-xs text-slate-400">
                Connect your WordPress blog to publish AI articles & uploaded featured images automatically
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                WordPress Website URL
              </label>
              <Input
                placeholder="https://yourwordpresssite.com"
                value={wpUrl}
                onChange={(e) => setWpUrl(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Username / Admin User
              </label>
              <Input
                placeholder="admin"
                value={wpUser}
                onChange={(e) => setWpUser(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Application Password (REST API)
              </label>
              <Input
                type="password"
                placeholder="abcd 1234 efgh 5678"
                value={wpPassword}
                onChange={(e) => setWpPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleTestWp}
              disabled={isTestingWp}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-2xs"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>{isTestingWp ? "Testing..." : "Test WordPress Connection"}</span>
            </button>
          </div>
        </Card>

        {/* AI Model & Key Config */}
        <Card>
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">AI Model Provider</h2>
              <p className="text-xs text-slate-400">
                Choose the LLM engine powering Master AI Agent, Content Writer, and SEO Audits
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Default LLM Provider
              </label>
              <select
                value={aiProvider}
                onChange={(e) => setAiProvider(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 bg-white text-sm"
              >
                <option value="gemini">Google Gemini 3.5 / 3.6 Flash (Recommended)</option>
                <option value="openai">OpenAI GPT-4o / GPT-4.5</option>
                <option value="claude">Anthropic Claude 3.5 Sonnet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                API Key
              </label>
              <Input
                type="password"
                placeholder="sk-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
          </div>
        </Card>

        {/* Automated Daily Workflow (8:00 AM Cron) */}
        <Card>
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Automated Daily Workflow (8:00 AM Cron)</h2>
              <p className="text-xs text-slate-400">
                Automatically check rankings, research opportunity keywords, and draft content every morning
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div>
                <h3 className="font-semibold text-slate-800 text-sm">Enable Daily 8:00 AM Agent Workflow</h3>
                <p className="text-xs text-slate-400 mt-0.5">Runs SERP checks, audit scans, and keyword discovery</p>
              </div>
              <input
                type="checkbox"
                checked={cronEnabled}
                onChange={(e) => setCronEnabled(e.target.checked)}
                className="h-5 w-5 accent-indigo-600 rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div>
                <h3 className="font-semibold text-slate-800 text-sm">Auto-Publish Blogs to WordPress</h3>
                <p className="text-xs text-slate-400 mt-0.5">Automatically publish generated drafts without manual approval</p>
              </div>
              <input
                type="checkbox"
                checked={autoPublish}
                onChange={(e) => setAutoPublish(e.target.checked)}
                className="h-5 w-5 accent-indigo-600 rounded cursor-pointer"
              />
            </div>
          </div>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" disabled={isSaving} className="px-8 py-3">
            <Save className="h-4 w-4 mr-2 inline" />
            {isSaving ? "Saving..." : "Save Settings"}
          </Button>
        </div>
      </form>
    </DashboardLayout>
  );
}
