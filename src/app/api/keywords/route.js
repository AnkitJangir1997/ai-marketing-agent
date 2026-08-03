import { NextResponse } from "next/server";
// Import fresh Prisma instance
import { getPrisma } from "@/lib/prisma";
import { generateKeywordResearch } from "@/lib/aiService";

const initialKeywordsData = [
  { term: "Best Web Development Company Jaipur", volume: 3600, difficulty: 28, cpc: "$3.50", intent: "Transactional", cluster: "Web Agency" },
  { term: "Affordable E-Commerce Website Developer", volume: 2400, difficulty: 32, cpc: "$2.80", intent: "Commercial", cluster: "E-Commerce" },
  { term: "How to Choose an SEO Agency for Small Business", volume: 1800, difficulty: 19, cpc: "$1.40", intent: "Informational", cluster: "SEO Guide" },
  { term: "Digital Marketing Strategy for Startups 2026", volume: 2900, difficulty: 45, cpc: "$4.10", intent: "Informational", cluster: "Strategy" },
  { term: "Best Website Developer in Jaipur Under 20000", volume: 1400, difficulty: 14, cpc: "$1.90", intent: "Transactional", cluster: "Web Agency" },
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

    let keywords = await prisma.keyword.findMany({
      where: { websiteId: website.id },
      orderBy: { createdAt: "desc" },
    });

    if (keywords.length === 0) {
      await prisma.keyword.createMany({
        data: initialKeywordsData.map((kw) => ({
          websiteId: website.id,
          ...kw,
        })),
      });

      keywords = await prisma.keyword.findMany({
        where: { websiteId: website.id },
        orderBy: { createdAt: "desc" },
      });
    }

    return NextResponse.json(keywords);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const prisma = getPrisma();
    const body = await request.json();
    const { term } = body;

    if (!term) {
      return NextResponse.json({ error: "Seed term is required" }, { status: 400 });
    }

    let website = await prisma.website.findFirst({
      orderBy: { createdAt: "desc" },
    });

    if (!website) {
      return NextResponse.json({ error: "No target website available" }, { status: 400 });
    }

    const generatedList = await generateKeywordResearch(term, website.industry || "General");

    const createdRecords = [];
    for (const item of generatedList) {
      const created = await prisma.keyword.create({
        data: {
          websiteId: website.id,
          term: item.term,
          volume: item.volume,
          difficulty: item.difficulty,
          cpc: item.cpc,
          intent: item.intent,
          cluster: item.cluster,
        },
      });
      createdRecords.push(created);
    }

    return NextResponse.json(createdRecords);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
