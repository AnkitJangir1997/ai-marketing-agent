import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

const initialCompetitorData = [
  { name: "TAXTICKLES", domain: "taxtickles.com", traffic: "28.4K", dr: 42, keywordsCount: 1840, backlinksCount: 340 },
  { name: "STEAM SAUNA UAE", domain: "steamsaunauae.com", traffic: "14.2K", dr: 38, keywordsCount: 920, backlinksCount: 210 },
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

    let competitors = await prisma.competitor.findMany({
      where: { websiteId: website.id },
      orderBy: { createdAt: "desc" },
    });

    if (competitors.length === 0) {
      await prisma.competitor.createMany({
        data: initialCompetitorData.map((c) => ({
          websiteId: website.id,
          ...c,
        })),
      });

      competitors = await prisma.competitor.findMany({
        where: { websiteId: website.id },
        orderBy: { createdAt: "desc" },
      });
    }

    return NextResponse.json(competitors);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const prisma = getPrisma();
    const body = await request.json();
    const { domain } = body;

    if (!domain) {
      return NextResponse.json({ error: "Domain is required" }, { status: 400 });
    }

    let website = await prisma.website.findFirst({
      orderBy: { createdAt: "desc" },
    });

    if (!website) {
      return NextResponse.json({ error: "No active target website found" }, { status: 400 });
    }

    let cleanDomain = domain.trim().toLowerCase();
    cleanDomain = cleanDomain.replace(/^(https?:\/\/)?(www\.)?/, "").split("/")[0];

    const newComp = await prisma.competitor.create({
      data: {
        websiteId: website.id,
        name: cleanDomain.split(".")[0].toUpperCase(),
        domain: cleanDomain,
        traffic: `${(Math.random() * 20 + 5).toFixed(1)}K`,
        dr: Math.floor(Math.random() * 20) + 30,
        keywordsCount: Math.floor(Math.random() * 1000) + 800,
        backlinksCount: Math.floor(Math.random() * 200) + 100,
      },
    });

    return NextResponse.json(newComp);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
