import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const defaultWebsites = [
  {
    name: "AJStudio",
    domain: "ajstudio.in",
    seoScore: 91,
    status: "Healthy",
    country: "India",
    industry: "Design",
    language: "English",
  },
  {
    name: "TaxTickles",
    domain: "taxtickles.com",
    seoScore: 84,
    status: "Warning",
    country: "India",
    industry: "Finance",
    language: "English",
  },
  {
    name: "Steam Sauna UAE",
    domain: "steamsaunauae.com",
    seoScore: 95,
    status: "Healthy",
    country: "UAE",
    industry: "E-commerce",
    language: "English",
  },
];

export async function GET() {
  try {
    let websites = await prisma.website.findMany({
      orderBy: { createdAt: "desc" },
    });

    if (websites.length === 0) {
      // Seed database with default websites if empty
      await prisma.website.createMany({
        data: defaultWebsites,
      });
      websites = await prisma.website.findMany({
        orderBy: { createdAt: "desc" },
      });
    }

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

    // Generate random seoScore (50 to 99) and status
    const seoScore = Math.floor(Math.random() * 50) + 50;
    const status = seoScore >= 80 ? "Healthy" : "Warning";

    const website = await prisma.website.create({
      data: {
        name: name.trim(),
        domain: cleanedDomain,
        country: country?.trim() || null,
        industry: industry?.trim() || null,
        language: "English",
        seoScore,
        status,
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
