import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [websiteCount, keywordCount, auditResult, latestBlogs, recentWebsites] =
      await Promise.all([
        prisma.website.count(),
        prisma.keyword.count(),
        prisma.seoAudit.findFirst({ orderBy: { createdAt: "desc" } }),
        prisma.blogPost.findMany({
          orderBy: { createdAt: "desc" },
          take: 5,
          select: { id: true, title: true, status: true, createdAt: true },
        }),
        prisma.website.findMany({
          orderBy: { createdAt: "desc" },
          take: 5,
          select: { id: true, name: true, domain: true, createdAt: true },
        }),
      ]);

    // Build activity log from real database events
    const activities = [];

    // Recent audits
    const recentAudits = await prisma.seoAudit.findMany({
      orderBy: { createdAt: "desc" },
      take: 3,
      include: { website: { select: { name: true, domain: true } } },
    });
    for (const audit of recentAudits) {
      activities.push({
        type: "audit",
        title: "SEO Audit Completed",
        details: `${audit.website.domain} • Health Score: ${audit.healthScore}%`,
        time: audit.createdAt,
      });
    }

    // Recent blogs
    const recentPublishedBlogs = await prisma.blogPost.findMany({
      where: { status: "Published" },
      orderBy: { createdAt: "desc" },
      take: 2,
    });
    for (const blog of recentPublishedBlogs) {
      activities.push({
        type: "blog",
        title: "Blog Published",
        details: blog.title,
        time: blog.createdAt,
      });
    }

    // Recent websites added
    for (const site of recentWebsites.slice(0, 2)) {
      activities.push({
        type: "website",
        title: "New Website Added",
        details: `${site.domain} registered`,
        time: site.createdAt,
      });
    }

    // Sort all activities by time descending
    activities.sort((a, b) => new Date(b.time) - new Date(a.time));

    // Real SEO issues aggregated from latest audit
    const seoIssues = [];
    if (auditResult && Array.isArray(auditResult.issues)) {
      const grouped = {};
      for (const issue of auditResult.issues) {
        const cat = issue.category || issue.title;
        grouped[cat] = (grouped[cat] || 0) + (issue.count || 1);
      }
      for (const [title, count] of Object.entries(grouped)) {
        seoIssues.push({ title, total: count });
      }
    }

    // AI suggestions based on real data
    const aiSuggestions = [];
    if (auditResult?.criticalCount > 0) {
      aiSuggestions.push({
        type: "critical",
        title: `${auditResult.criticalCount} Critical SEO Issues Found`,
        description: `AI Agent detected ${auditResult.criticalCount} critical SEO problems needing immediate attention.`,
        actionText: "Fix in SEO Audit",
        actionHref: "/dashboard/seo-audit",
      });
    }
    if (keywordCount === 0) {
      aiSuggestions.push({
        type: "keyword",
        title: "Start Keyword Research",
        description: "No keywords tracked yet. Run AI keyword research to discover opportunities.",
        actionText: "Research Keywords",
        actionHref: "/dashboard/keywords",
      });
    } else {
      aiSuggestions.push({
        type: "keyword",
        title: `${keywordCount} Keywords Being Tracked`,
        description: "AI identified high-intent keyword opportunities. Write a blog to capture traffic.",
        actionText: "Write AI Article",
        actionHref: "/dashboard/blogs/create",
      });
    }
    if (latestBlogs.length === 0) {
      aiSuggestions.push({
        type: "content",
        title: "Generate Your First Blog Post",
        description: "AI Blog Writer can create 2500+ word SEO-optimized articles in seconds.",
        actionText: "Create Blog",
        actionHref: "/dashboard/blogs/create",
      });
    }

    return NextResponse.json({
      stats: {
        websites: websiteCount,
        keywords: keywordCount,
        seoScore: auditResult?.healthScore ?? 0,
        issues: (auditResult?.criticalCount ?? 0) + (auditResult?.warningCount ?? 0),
      },
      activities: activities.slice(0, 5),
      seoIssues: seoIssues.slice(0, 5),
      aiSuggestions: aiSuggestions.slice(0, 3),
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
