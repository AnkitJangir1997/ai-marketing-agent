import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export async function GET() {
  try {
    const prisma = getPrisma();
    let website = await prisma.website.findFirst({
      orderBy: { createdAt: "desc" },
    });

    if (!website) {
      return NextResponse.json({
        report: null,
        trafficData: [],
      });
    }

    let report = await prisma.analyticsReport.findFirst({
      where: { websiteId: website.id },
      orderBy: { createdAt: "desc" },
    });

    if (!report) {
      report = await prisma.analyticsReport.create({
        data: {
          websiteId: website.id,
          totalClicks: 14200,
          impressions: 142800,
          ctr: 9.9,
          avgPosition: 4.2,
        },
      });
    }

    const trafficData = [
      { day: "Day 1", clicks: 320, impressions: 3400 },
      { day: "Day 5", clicks: 410, impressions: 4200 },
      { day: "Day 10", clicks: 520, impressions: 5100 },
      { day: "Day 15", clicks: 680, impressions: 6400 },
      { day: "Day 20", clicks: 840, impressions: 7900 },
      { day: "Day 25", clicks: 1100, impressions: 9800 },
      { day: "Day 30", clicks: 1420, impressions: 12400 },
    ];

    return NextResponse.json({
      report,
      trafficData,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
