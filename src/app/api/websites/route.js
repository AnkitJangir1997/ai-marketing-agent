import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const websites = await prisma.website.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(websites);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch websites" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, domain, country, industry } = body;

    if (!name || !domain) {
      return NextResponse.json(
        { error: "Name and Domain are required" },
        { status: 400 }
      );
    }

    // Clean up domain (remove http, https, trailing slash, etc.)
    let cleanedDomain = domain.trim().toLowerCase();
    cleanedDomain = cleanedDomain.replace(/^(https?:\/\/)?(www\.)?/, "");
    cleanedDomain = cleanedDomain.split("/")[0];

    // Check if domain already exists
    const existing = await prisma.website.findUnique({
      where: { domain: cleanedDomain },
    });

    if (existing) {
      return NextResponse.json(
        { error: "A website with this domain is already registered" },
        { status: 400 }
      );
    }

    const website = await prisma.website.create({
      data: {
        name: name.trim(),
        domain: cleanedDomain,
        country: country?.trim() || null,
        industry: industry?.trim() || null,
        language: "English",
        seoScore: 0,
        status: "Pending",
      },
    });

    return NextResponse.json(website);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to create website" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id"), 10);

    if (!id) {
      return NextResponse.json({ error: "Website ID is required" }, { status: 400 });
    }

    await prisma.website.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
