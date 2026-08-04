"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import useBlogs from "@/features/blogs/hooks/useBlogs";
import { Toaster, toast } from "sonner";
import {
  Sparkles,
  FileText,
  Send,
  CheckCircle2,
  ArrowLeft,
  RefreshCw,
} from "lucide-react";

function BlogCreateForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialKeyword = searchParams.get("keyword") || "";
  const { generateBlog, publishToWp } = useBlogs();

  const [topic, setTopic] = useState(initialKeyword);
  const [tone, setTone] = useState("Authoritative");
  const [wordCount, setWordCount] = useState(2500);

  const [generationStep, setGenerationStep] = useState(0);
  const [generatedArticle, setGeneratedArticle] = useState(null);
  const [activeTab, setActiveTab] = useState("preview");

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!topic.trim()) {
      toast.error("Please enter a target topic or keyword.");
      return;
    }

    setGenerationStep(1);
    toast.info("Blog Writer Agent: Crawling Top 10 SERP articles...");

    setTimeout(() => {
      setGenerationStep(2);
      toast.info("Blog Writer Agent: Extracting facts & generating outline...");
    }, 1200);

    setTimeout(() => {
      setGenerationStep(3);
      toast.info(`Blog Writer Agent: Writing ${wordCount}-word SEO article & FAQ schema...`);
    }, 2400);

    try {
      // Call backend API to write article & store in Supabase
      const created = await generateBlog({
        topic: topic.trim(),
        tone,
        wordCount,
      });

      setGenerationStep(4);
      setGeneratedArticle(created);
      toast.success("AI Article & Schema generated & saved to Supabase!");
    } catch (err) {
      toast.error(err.message || "Article generation failed");
      setGenerationStep(0);
    }
  };

  const handlePublishWp = async () => {
    if (!generatedArticle?.id) return;

    toast.info("WordPress Agent uploading article & metadata via REST API...");
    try {
      await publishToWp({ blogId: generatedArticle.id });
      toast.success("Article successfully published to WordPress!");
      router.push("/dashboard/blogs");
    } catch (err) {
      toast.error(err.message || "WordPress publishing failed");
    }
  };

  return (
    <DashboardLayout>
      <Toaster position="top-right" richColors />

      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => router.push("/dashboard/blogs")}
          className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-slate-800 transition"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog Manager
        </button>
      </div>

      <PageHeader
        title="AI Article Writer"
        description="Generate 2500+ word rank-ready SEO blogs complete with meta titles, FAQ schema, and images"
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Column: Form Controls */}
        <div className="lg:col-span-5 space-y-6">
          <Card>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Article Configuration</h2>
            <form onSubmit={handleGenerate} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Target Topic / Primary Keyword *
                </label>
                <Input
                  placeholder="e.g. Web Design Jaipur, Local SEO Strategy"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  disabled={generationStep > 0 && generationStep < 4}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Tone of Voice
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  disabled={generationStep > 0 && generationStep < 4}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 bg-white text-sm"
                >
                  <option value="Authoritative">Authoritative & Technical</option>
                  <option value="Engaging">Engaging & Conversational</option>
                  <option value="Professional">Professional Corporate</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Target Word Count ({wordCount} words)
                </label>
                <input
                  type="range"
                  min="1200"
                  max="3500"
                  step="100"
                  value={wordCount}
                  onChange={(e) => setWordCount(Number(e.target.value))}
                  disabled={generationStep > 0 && generationStep < 4}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>1,200 words</span>
                  <span>2,500 words</span>
                  <span>3,500 words</span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={generationStep > 0 && generationStep < 4}
                className="w-full py-3"
              >
                <Sparkles className="h-4 w-4 mr-2 inline" />
                {generationStep > 0 && generationStep < 4
                  ? "Blog Agent Generating..."
                  : "Generate AI Article"}
              </Button>
            </form>
          </Card>

          {/* Workflow Simulation Status Box */}
          {generationStep > 0 && (
            <Card className="border-indigo-100 bg-indigo-50/30">
              <h3 className="font-bold text-slate-800 text-sm mb-3">AI Multi-Agent Pipeline</h3>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2">
                  {generationStep >= 1 ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <RefreshCw className="h-4 w-4 text-slate-300" />
                  )}
                  <span className={generationStep >= 1 ? "font-semibold text-slate-800" : "text-slate-400"}>
                    Step 1: SERP Scraper & Competitor Analysis
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {generationStep >= 2 ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <RefreshCw className="h-4 w-4 text-slate-300" />
                  )}
                  <span className={generationStep >= 2 ? "font-semibold text-slate-800" : "text-slate-400"}>
                    Step 2: Fact Extraction & Outline Generation
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {generationStep >= 3 ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <RefreshCw className="h-4 w-4 text-slate-300" />
                  )}
                  <span className={generationStep >= 3 ? "font-semibold text-slate-800" : "text-slate-400"}>
                    Step 3: 2500+ Word Content Drafting
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {generationStep >= 4 ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <RefreshCw className="h-4 w-4 text-slate-300" />
                  )}
                  <span className={generationStep >= 4 ? "font-semibold text-slate-800" : "text-slate-400"}>
                    Step 4: Schema & Meta SEO Finalization
                  </span>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Right Column: Article Preview */}
        <div className="lg:col-span-7">
          <Card className="min-h-[500px]">
            {!generatedArticle ? (
              <div className="h-[450px] flex flex-col items-center justify-center text-center text-slate-400">
                <FileText className="h-14 w-14 mb-3 text-slate-300" />
                <h3 className="text-lg font-bold text-slate-700">Article Preview Workspace</h3>
                <p className="text-xs text-slate-400 max-w-sm mt-1">
                  Configure your topic on the left and click &quot;Generate AI Article&quot; to watch the agents build your SEO post.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveTab("preview")}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                        activeTab === "preview"
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      Article Content
                    </button>
                    <button
                      onClick={() => setActiveTab("meta")}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                        activeTab === "meta"
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      Meta SEO
                    </button>
                    <button
                      onClick={() => setActiveTab("schema")}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                        activeTab === "schema"
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      FAQ Schema JSON
                    </button>
                  </div>

                  <Button onClick={handlePublishWp} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs">
                    <Send className="h-3.5 w-3.5 mr-1.5 inline" />
                    Publish to WordPress
                  </Button>
                </div>

                {activeTab === "preview" && (
                  <div className="prose prose-slate max-w-none">
                    <h1 className="text-2xl font-bold text-slate-900 mb-4">{generatedArticle.title}</h1>
                    <div
                      className="text-slate-700 text-sm leading-relaxed space-y-4"
                      dangerouslySetInnerHTML={{ __html: generatedArticle.content }}
                    />
                  </div>
                )}

                {activeTab === "meta" && (
                  <div className="space-y-4 text-sm">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <span className="text-xs text-slate-400 uppercase font-semibold block mb-1">
                        Meta Title
                      </span>
                      <p className="font-bold text-indigo-600">{generatedArticle.metaTitle}</p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <span className="text-xs text-slate-400 uppercase font-semibold block mb-1">
                        Meta Description
                      </span>
                      <p className="text-slate-700">{generatedArticle.metaDescription}</p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <span className="text-xs text-slate-400 uppercase font-semibold block mb-1">
                        URL Slug
                      </span>
                      <p className="font-mono text-slate-800">/{generatedArticle.slug}</p>
                    </div>
                  </div>
                )}

                {activeTab === "schema" && (
                  <pre className="bg-slate-900 text-emerald-400 p-4 rounded-xl text-xs font-mono overflow-x-auto">
                    {generatedArticle.schemaJson}
                  </pre>
                )}
              </div>
            )}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function BlogCreatePage() {
  return (
    <Suspense fallback={<div>Loading Article Builder...</div>}>
      <BlogCreateForm />
    </Suspense>
  );
}
