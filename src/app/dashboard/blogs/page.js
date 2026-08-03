"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import useBlogs from "@/features/blogs/hooks/useBlogs";
import { Toaster, toast } from "sonner";
import { Send, CheckCircle2, RefreshCw } from "lucide-react";

export default function BlogsPage() {
  const { blogs, loading, error, publishToWp } = useBlogs();

  const handleSyncWp = async (id, title) => {
    toast.info(`WordPress Agent publishing "${title}" via REST API...`);
    try {
      await publishToWp({ blogId: id });
      toast.success("Successfully published article to WordPress!");
    } catch (err) {
      toast.error(err.message || "WordPress publish failed");
    }
  };

  return (
    <DashboardLayout>
      <Toaster position="top-right" richColors />

      <PageHeader
        title="AI Blog Manager"
        description="Generate 2500+ word SEO articles and publish directly to WordPress"
        buttonText="Create New AI Blog"
        buttonHref="/dashboard/blogs/create"
      />

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 font-bold text-xl">
            {blogs.length}
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase">Total Generated</p>
            <h3 className="text-lg font-bold text-slate-800">Articles</h3>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 font-bold text-xl">
            {blogs.filter((b) => b.status === "Published").length}
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase">WordPress Synced</p>
            <h3 className="text-lg font-bold text-slate-800">Live Articles</h3>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 font-bold text-xl">
            2,500
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase">Avg Word Length</p>
            <h3 className="text-lg font-bold text-slate-800">In-Depth SEO</h3>
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex items-center justify-between pb-6 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Article Content Library</h2>
            <p className="text-xs text-slate-400 mt-0.5">Manage drafts and active WordPress publications from Supabase</p>
          </div>
        </div>

        {loading && (
          <div className="py-12 text-center text-slate-400 font-medium">
            <RefreshCw className="h-8 w-8 animate-spin text-indigo-600 mx-auto mb-3" />
            Loading blog articles from Supabase...
          </div>
        )}

        {error && (
          <div className="py-8 text-center text-red-500 font-medium">
            Error loading articles: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase text-slate-400 font-semibold">
                  <th className="pb-3">Article Title & Slug</th>
                  <th className="pb-3">Target Keyword</th>
                  <th className="pb-3">Word Count</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {blogs.map((article) => (
                  <tr key={article.id} className="hover:bg-slate-50/60 transition">
                    <td className="py-4">
                      <div className="font-semibold text-slate-800 text-sm max-w-md">
                        {article.title}
                      </div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">
                        /{article.slug}
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="inline-block bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium">
                        {article.targetKeyword || article.keyword}
                      </span>
                    </td>
                    <td className="py-4 font-bold text-slate-700 text-sm">
                      {article.wordCount.toLocaleString()} words
                    </td>
                    <td className="py-4">
                      <Badge color={article.status === "Published" ? "green" : "yellow"}>
                        {article.status}
                      </Badge>
                    </td>
                    <td className="py-4 text-right">
                      {article.status !== "Published" ? (
                        <button
                          onClick={() => handleSyncWp(article.id, article.title)}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 transition shadow-2xs"
                        >
                          <Send className="h-3.5 w-3.5" />
                          <span>Publish to WP</span>
                        </button>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Live on WP
                        </span>
                      )}
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
