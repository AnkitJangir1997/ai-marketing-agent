import { NextResponse } from "next/server";
// Import fresh Prisma instance
import { getPrisma } from "@/lib/prisma";
import { crawlAndAuditWebsite } from "../../../../crawler/crawler";

export async function GET(request) {
  try {
    const prisma = getPrisma();
    const { searchParams } = new URL(request.url);
    const websiteIdParam = searchParams.get("websiteId");

    let website = null;
    if (websiteIdParam) {
      website = await prisma.website.findUnique({
        where: { id: parseInt(websiteIdParam, 10) },
      });
    } else {
      website = await prisma.website.findFirst({
        orderBy: { createdAt: "desc" },
      });
    }

    if (!website) {
      return NextResponse.json({ audit: null, website: null });
    }

    let latestAudit = await prisma.seoAudit.findFirst({
      where: { websiteId: website.id },
      orderBy: { createdAt: "desc" },
    });

    if (!latestAudit) {
      // Run initial live crawl if no audit exists yet
      const auditResult = await crawlAndAuditWebsite(website.domain);
      latestAudit = await prisma.seoAudit.create({
        data: {
          websiteId: website.id,
          healthScore: auditResult.healthScore,
          criticalCount: auditResult.criticalCount,
          warningCount: auditResult.warningCount,
          noticeCount: auditResult.noticeCount,
          pagesCrawled: auditResult.pagesCrawled,
          issues: auditResult.issues,
        },
      });

      // Update website seoScore
      await prisma.website.update({
        where: { id: website.id },
        data: { seoScore: auditResult.healthScore },
      });
    }

    return NextResponse.json({ audit: latestAudit, website });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const prisma = getPrisma();
    const body = await request.json();
    const { domain, websiteId } = body;

    let targetWebsite = null;
    if (websiteId) {
      targetWebsite = await prisma.website.findUnique({
        where: { id: parseInt(websiteId, 10) },
      });
    } else if (domain) {
      targetWebsite = await prisma.website.findUnique({
        where: { domain: domain.trim().toLowerCase() },
      });
    }

    if (!targetWebsite) {
      targetWebsite = await prisma.website.findFirst({
        orderBy: { createdAt: "desc" },
      });
    }

    if (!targetWebsite) {
      return NextResponse.json({ error: "No target website found" }, { status: 404 });
    }

    // Run active live crawler scan
    const crawlResult = await crawlAndAuditWebsite(targetWebsite.domain);

    const newAudit = await prisma.seoAudit.create({
      data: {
        websiteId: targetWebsite.id,
        healthScore: crawlResult.healthScore,
        criticalCount: crawlResult.criticalCount,
        warningCount: crawlResult.warningCount,
        noticeCount: crawlResult.noticeCount,
        pagesCrawled: crawlResult.pagesCrawled,
        issues: crawlResult.issues,
      },
    });

    await prisma.website.update({
      where: { id: targetWebsite.id },
      data: { seoScore: crawlResult.healthScore },
    });

    return NextResponse.json(newAudit);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const prisma = getPrisma();
    const body = await request.json();
    const { auditId, issueId } = body;

    if (!auditId || !issueId) {
      return NextResponse.json({ error: "Audit ID and Issue ID required" }, { status: 400 });
    }

    const currentAudit = await prisma.seoAudit.findUnique({
      where: { id: parseInt(auditId, 10) },
    });

    if (!currentAudit) {
      return NextResponse.json({ error: "Audit not found" }, { status: 404 });
    }

    const updatedIssues = (currentAudit.issues || []).filter((i) => i.id !== issueId);
    const newHealthScore = Math.min(100, currentAudit.healthScore + 6);

    const updatedAudit = await prisma.seoAudit.update({
      where: { id: currentAudit.id },
      data: {
        healthScore: newHealthScore,
        issues: updatedIssues,
        criticalCount: updatedIssues.filter((i) => i.severity === "Critical").length,
        warningCount: updatedIssues.filter((i) => i.severity === "Warning").length,
      },
    });

    return NextResponse.json(updatedAudit);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
