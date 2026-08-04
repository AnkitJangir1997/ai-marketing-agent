/**
 * Link Extractor
 */

import { normalizeUrl, extractDomain } from "./utils.js";

export function extractLinks(html, currentUrl) {
  const baseDomain = extractDomain(currentUrl);
  const internalLinks = new Set();
  const externalLinks = new Set();

  const hrefMatches = html.matchAll(/href=["']([\s\S]*?)["']/gi);

  for (const match of hrefMatches) {
    if (!match[1]) continue;
    const rawHref = match[1].trim();

    if (
      rawHref.startsWith("#") ||
      rawHref.startsWith("javascript:") ||
      rawHref.startsWith("mailto:") ||
      rawHref.startsWith("tel:")
    ) {
      continue;
    }

    const normalized = normalizeUrl(rawHref, currentUrl);
    if (!normalized) continue;

    const linkDomain = extractDomain(normalized);
    if (linkDomain === baseDomain) {
      internalLinks.add(normalized);
    } else {
      externalLinks.add(normalized);
    }
  }

  return {
    internal: Array.from(internalLinks),
    external: Array.from(externalLinks),
  };
}
