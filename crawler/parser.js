/**
 * HTML Parser & Audit Inspector
 */

export function parseHtmlContent(html, pageUrl) {
  const issues = [];

  // 1. Title Analysis
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;
  if (!title) {
    issues.push({
      id: "missing-title",
      title: "Missing HTML Page Title Tag",
      category: "Meta Tags",
      severity: "Critical",
      count: 1,
      pages: [pageUrl],
      impact: "High",
    });
  } else if (title.length > 60) {
    issues.push({
      id: "long-title",
      title: `Page Title Too Long (${title.length} chars)`,
      category: "Meta Tags",
      severity: "Warning",
      count: 1,
      pages: [pageUrl],
      impact: "Medium",
    });
  } else if (title.length < 15) {
    issues.push({
      id: "short-title",
      title: `Page Title Too Short (${title.length} chars)`,
      category: "Meta Tags",
      severity: "Notice",
      count: 1,
      pages: [pageUrl],
      impact: "Low",
    });
  }

  // 2. Meta Description Analysis
  const metaDescMatch =
    html.match(
      /<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i
    ) ||
    html.match(
      /<meta[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["'][^>]*>/i
    );
  const metaDesc = metaDescMatch ? metaDescMatch[1].trim() : null;
  if (!metaDesc) {
    issues.push({
      id: "missing-meta-desc",
      title: "Missing Meta Description Tag",
      category: "Meta Tags",
      severity: "Critical",
      count: 1,
      pages: [pageUrl],
      impact: "High",
    });
  } else if (metaDesc.length > 160) {
    issues.push({
      id: "long-meta-desc",
      title: `Meta Description Exceeds Recommended Length (${metaDesc.length} chars)`,
      category: "Meta Tags",
      severity: "Warning",
      count: 1,
      pages: [pageUrl],
      impact: "Medium",
    });
  }

  // 3. Headings Analysis
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  if (h1Matches.length === 0) {
    issues.push({
      id: "missing-h1",
      title: "Missing Primary H1 Heading",
      category: "Headings",
      severity: "Critical",
      count: 1,
      pages: [pageUrl],
      impact: "High",
    });
  } else if (h1Matches.length > 1) {
    issues.push({
      id: "multiple-h1",
      title: `Multiple H1 Headings Found (${h1Matches.length})`,
      category: "Headings",
      severity: "Warning",
      count: h1Matches.length,
      pages: [pageUrl],
      impact: "Medium",
    });
  }

  // 4. Image ALT Tags
  const imgMatches = html.match(/<img[^>]*>/gi) || [];
  let missingAltCount = 0;
  imgMatches.forEach((imgTag) => {
    if (!/alt=["'][\s\S]*?["']/i.test(imgTag) || /alt=["']\s*["']/i.test(imgTag)) {
      missingAltCount++;
    }
  });

  if (missingAltCount > 0) {
    issues.push({
      id: "missing-img-alt",
      title: `${missingAltCount} Image${missingAltCount > 1 ? "s" : ""} Missing Alt Attributes`,
      category: "Images",
      severity: missingAltCount > 5 ? "Critical" : "Warning",
      count: missingAltCount,
      pages: [pageUrl],
      impact: "Medium",
    });
  }

  // 5. Canonical Tag
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([\s\S]*?)["'][^>]*>/i);
  const hasCanonical = !!canonicalMatch;
  if (!hasCanonical) {
    issues.push({
      id: "missing-canonical",
      title: "Missing Canonical Tag",
      category: "Indexing",
      severity: "Notice",
      count: 1,
      pages: [pageUrl],
      impact: "Low",
    });
  }

  // 6. Schema JSON-LD
  const hasSchema = /<script[^>]*type=["']application\/ld\+json["']/i.test(html);
  if (!hasSchema) {
    issues.push({
      id: "missing-schema",
      title: "Missing Structured Data (Schema JSON-LD)",
      category: "Schema",
      severity: "Notice",
      count: 1,
      pages: [pageUrl],
      impact: "Low",
    });
  }

  return {
    title,
    metaDesc,
    h1Count: h1Matches.length,
    missingAltCount,
    hasCanonical,
    hasSchema,
    issues,
  };
}
