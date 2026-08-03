import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { generateBlogArticle } from "@/lib/aiService";

const initialBlogData = [
  {
    title: "10 Proven Local SEO Strategies for Small Businesses in 2026",
    slug: "local-seo-strategies-2026",
    targetKeyword: "Local SEO Strategies",
    wordCount: 2450,
    content: "<p>Comprehensive guide on scaling local SEO for small business owners...</p>",
    metaTitle: "Local SEO Strategies 2026 | Small Business Guide",
    metaDescription: "Learn 10 actionable local SEO strategies to rank #1 on Google Maps and search results.",
    status: "Published",
    publishedAt: new Date(),
  },
  {
    title: "Why Modern Web Design Impacts Conversion Rates",
    slug: "modern-web-design-conversion-rates",
    targetKeyword: "Modern Web Design",
    wordCount: 2180,
    content: "<p>Deep dive into UI/UX architecture and conversion funnel optimization...</p>",
    metaTitle: "Web Design & Conversion Rates Guide",
    metaDescription: "Discover how modern responsive web design increases visitor conversion rates.",
    status: "Published",
    publishedAt: new Date(Date.now() - 86400000),
  },
  {
    title: "Complete Guide to Keyword Clustering for Content Marketing",
    slug: "keyword-clustering-guide",
    targetKeyword: "Keyword Clustering",
    wordCount: 2890,
    content: "<p>Learn semantic keyword clustering to build topical authority...</p>",
    metaTitle: "Keyword Clustering Guide 2026",
    metaDescription: "Step-by-step framework to group search intent queries into content clusters.",
    status: "Draft",
  },
];

export async function GET() {
  try {
    const prisma = getPrisma();
    let website = await prisma.website.findFirst({
      orderBy: { createdAt: "desc" },
    });

    if (!website) {
      return NextResponse.json([]);
    }

    let blogs = await prisma.blogPost.findMany({
      where: { websiteId: website.id },
      orderBy: { createdAt: "desc" },
    });

    if (blogs.length === 0) {
      await prisma.blogPost.createMany({
        data: initialBlogData.map((b) => ({
          websiteId: website.id,
          ...b,
        })),
      });

      blogs = await prisma.blogPost.findMany({
        where: { websiteId: website.id },
        orderBy: { createdAt: "desc" },
      });
    }

    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const prisma = getPrisma();
    const body = await request.json();
    const { topic, tone, wordCount } = body;

    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });
    }

    let website = await prisma.website.findFirst({
      orderBy: { createdAt: "desc" },
    });

    if (!website) {
      return NextResponse.json({ error: "No target website available" }, { status: 400 });
    }

    const generated = await generateBlogArticle({
      topic,
      tone: tone || "Authoritative",
      wordCount: wordCount || 2500,
    });

    const createdBlog = await prisma.blogPost.create({
      data: {
        websiteId: website.id,
        title: generated.title,
        slug: generated.slug,
        targetKeyword: generated.targetKeyword,
        wordCount: generated.wordCount,
        content: generated.content,
        metaTitle: generated.metaTitle,
        metaDescription: generated.metaDescription,
        schemaJson: generated.schemaJson,
        status: "Draft",
      },
    });

    return NextResponse.json(createdBlog);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
