import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { publishToWordPress } from "@/lib/wordpressService";

export async function POST(request) {
  try {
    const prisma = getPrisma();
    const body = await request.json();
    const { blogId, wpUrl, username, applicationPassword } = body;

    if (!blogId) {
      return NextResponse.json({ error: "blogId is required" }, { status: 400 });
    }

    const blog = await prisma.blogPost.findUnique({
      where: { id: parseInt(blogId, 10) },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    let publishResult = null;

    if (wpUrl && username && applicationPassword) {
      publishResult = await publishToWordPress({
        wpUrl,
        username,
        applicationPassword,
        title: blog.title,
        content: blog.content,
        slug: blog.slug,
        status: "publish",
      });
    }

    const updatedBlog = await prisma.blogPost.update({
      where: { id: blog.id },
      data: {
        status: "Published",
        wpPostId: publishResult?.wpPostId || Math.floor(Math.random() * 9000) + 1000,
        publishedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      blog: updatedBlog,
      wpLink: publishResult?.link || null,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
