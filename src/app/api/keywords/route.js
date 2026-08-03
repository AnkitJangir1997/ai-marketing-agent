import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateKeywordResearch } from "@/lib/aiService";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const websiteId = searchParams.get("websiteId");

    let where = {};
    if (websiteId) {
      where = { websiteId: parseInt(websiteId, 10) };
    } else {
      // Get keywords for the most recent website
      const website = await prisma.website.findFirst({
        orderBy: { createdAt: "desc" },
      });
      if (!website) return NextResponse.json([]);
      where = { websiteId: website.id };
    }

    const keywords = await prisma.keyword.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(keywords);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { term, websiteId } = body;

    if (!term) {
      return NextResponse.json({ error: "Seed term is required" }, { status: 400 });
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

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id"), 10);
    if (!id) return NextResponse.json({ error: "Keyword ID required" }, { status: 400 });
    await prisma.keyword.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
