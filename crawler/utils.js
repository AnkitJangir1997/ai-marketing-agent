/**
 * Crawler Utility Helpers
 */

export function normalizeUrl(url, baseUrl) {
  try {
    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
      if (baseUrl) {
        cleanUrl = new URL(cleanUrl, baseUrl).href;
      } else {
        cleanUrl = `https://${cleanUrl}`;
      }
    }
    const parsed = new URL(cleanUrl);
    parsed.hash = ""; // Strip fragment
    return parsed.href;
  } catch {
    return null;
  }
}

export function extractDomain(url) {
  try {
    const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export async function fetchWithTimeout(url, options = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; AI-Marketing-Agent-Crawler/2.0)",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        ...options.headers,
      },
    });
    clearTimeout(id);
    return response;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}
