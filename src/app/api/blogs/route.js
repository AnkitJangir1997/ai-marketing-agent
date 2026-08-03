import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateBlogArticle } from "@/lib/aiService";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const websiteId = searchParams.get("websiteId");

    let where = {};
    if (websiteId) {
      where = { websiteId: parseInt(websiteId, 10) };
    } else {
      const website = await prisma.website.findFirst({
        orderBy: { createdAt: "desc" },
      });
      if (!website) return NextResponse.json([]);
      where = { websiteId: website.id };
    }

    const blogs = await prisma.blogPost.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { topic, tone, wordCount, websiteId } = body;

    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });
    }

    let website;
    if (websiteId) {
      website = await prisma.website.findUnique({ where: { id: parseInt(websiteId, 10) } });
    } else {
      website = await prisma.website.findFirst({ orderBy: { createdAt: "desc" } });
    }

    if (!website) {
      return NextResponse.json({ error: "No target website found. Please add a website first." }, { status: 400 });
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

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id"), 10);
    if (!id) return NextResponse.json({ error: "Blog ID required" }, { status: 400 });
    await prisma.blogPost.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
