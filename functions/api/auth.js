const CMS_ORIGIN = "https://alpha-sports-med-prototype.pages.dev";

function encodeBase64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

export async function onRequestGet({ request, env }) {
  if (!env.GITHUB_CLIENT_ID) {
    return new Response("GitHub OAuth is not configured.", { status: 503 });
  }

  const requestUrl = new URL(request.url);
  const siteId = requestUrl.searchParams.get("site_id");
  if (siteId && siteId !== new URL(CMS_ORIGIN).hostname) {
    return new Response("This CMS origin is not allowed.", { status: 403 });
  }

  const state = encodeBase64Url(crypto.getRandomValues(new Uint8Array(32)));
  const callbackUrl = `${requestUrl.origin}/api/callback`;
  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  authorizeUrl.searchParams.set("redirect_uri", callbackUrl);
  authorizeUrl.searchParams.set("scope", "repo,user");
  authorizeUrl.searchParams.set("state", state);

  return new Response(null, {
    status: 302,
    headers: {
      Location: authorizeUrl.toString(),
      "Cache-Control": "no-store",
      "Set-Cookie": `decap_oauth_state=${state}; Path=/api/callback; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
    },
  });
}
