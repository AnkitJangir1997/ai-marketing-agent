/**
 * Sitemap XML Parser
 */

import { fetchWithTimeout } from "./utils.js";

export async function parseSitemap(sitemapUrl) {
  try {
    const res = await fetchWithTimeout(sitemapUrl, {}, 6000);
    if (!res.ok) return [];

    const xml = await res.text();
    const urls = [];
    const matches = xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi);

    for (const match of matches) {
      if (match[1]) {
        const cleanUrl = match[1].trim();
        if (cleanUrl.startsWith("http")) {
          urls.push(cleanUrl);
        }
      }
    }

    return Array.from(new Set(urls));
  } catch {
    return [];
  }
}
