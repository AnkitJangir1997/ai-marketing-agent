/**
 * WordPress REST API Integration Service
 * Connects to remote WordPress sites using Application Passwords to publish posts,
 * upload featured images, and update content remotely.
 */

export async function publishToWordPress({
  wpUrl,
  username,
  applicationPassword,
  title,
  content,
  slug,
  status = "publish",
}) {
  if (!wpUrl || !username || !applicationPassword) {
    throw new Error(
      "WordPress Integration credentials (URL, Username, Application Password) are required."
    );
  }

  let cleanUrl = wpUrl.trim().replace(/\/$/, "");
  if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
    cleanUrl = `https://${cleanUrl}`;
  }

  const endpoint = `${cleanUrl}/wp-json/wp/v2/posts`;
  const authToken = Buffer.from(`${username.trim()}:${applicationPassword.trim()}`).toString("base64");

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${authToken}`,
      },
      body: JSON.stringify({
        title,
        content,
        slug,
        status,
      }),
      signal: AbortSignal.timeout(12000),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(
        errData.message || `WordPress API returned status ${response.status}`
      );
    }

    const data = await response.json();
    return {
      success: true,
      wpPostId: data.id,
      link: data.link,
    };
  } catch (error) {
    console.error("WordPress Publish Error:", error.message);
    throw error;
  }
}

export async function testWordPressConnection({ wpUrl, username, applicationPassword }) {
  let cleanUrl = wpUrl.trim().replace(/\/$/, "");
  if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
    cleanUrl = `https://${cleanUrl}`;
  }

  const endpoint = `${cleanUrl}/wp-json/wp/v2/users/me`;
  const authToken = Buffer.from(`${username.trim()}:${applicationPassword.trim()}`).toString("base64");

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Basic ${authToken}`,
      },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      throw new Error(`Connection failed with status ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      user: data.name || username,
    };
  } catch (error) {
    throw new Error(error.message || "Could not connect to WordPress REST API");
  }
}
