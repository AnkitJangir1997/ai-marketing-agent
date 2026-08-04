/**
 * Robots.txt Parser & Checker
 */

import { fetchWithTimeout } from "./utils.js";

export async function parseRobotsTxt(originUrl) {
  try {
    const origin = new URL(originUrl).origin;
    const robotsUrl = `${origin}/robots.txt`;
    const res = await fetchWithTimeout(robotsUrl, {}, 5000);

    if (!res.ok) {
      return { exists: false, disallowed: [], sitemaps: [] };
    }

    const text = await res.text();
    const lines = text.split("\n");
    const disallowed = [];
    const sitemaps = [];

    let isMatchingUserAgent = true;

    for (let line of lines) {
      line = line.trim();
      if (!line || line.startsWith("#")) continue;

      const lower = line.toLowerCase();
      if (lower.startsWith("user-agent:")) {
        const ua = line.slice(11).trim();
        isMatchingUserAgent = ua === "*" || ua.toLowerCase().includes("ai-marketing-agent");
      } else if (lower.startsWith("disallow:") && isMatchingUserAgent) {
        const path = line.slice(9).trim();
        if (path) disallowed.push(path);
      } else if (lower.startsWith("sitemap:")) {
        const sitemapUrl = line.slice(8).trim();
        if (sitemapUrl) sitemaps.push(sitemapUrl);
      }
    }

    return { exists: true, disallowed, sitemaps };
  } catch {
    return { exists: false, disallowed: [], sitemaps: [] };
  }
}

export function isAllowedByRobots(urlPath, disallowedList = []) {
  for (const pattern of disallowedList) {
    if (pattern === "/" || urlPath.startsWith(pattern)) {
      return false;
    }
  }
  return true;
}
