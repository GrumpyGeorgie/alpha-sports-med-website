const CMS_ORIGIN = "https://alpha-sports-med-prototype.pages.dev";

function readCookie(request, name) {
  const cookies = request.headers.get("Cookie") || "";
  for (const part of cookies.split(";")) {
    const [key, ...value] = part.trim().split("=");
    if (key === name) return value.join("=");
  }
  return null;
}

function htmlResponse(body, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Content-Security-Policy": `default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; frame-ancestors 'none'`,
      "Referrer-Policy": "no-referrer",
      "Set-Cookie": "decap_oauth_state=; Path=/api/callback; HttpOnly; Secure; SameSite=Lax; Max-Age=0",
    },
  });
}

function messagePage(message, isError = false) {
  const encodedMessage = JSON.stringify(message).replaceAll("<", "\\u003c");
  const result = isError
    ? `authorization:github:error:${encodedMessage}`
    : `authorization:github:success:${encodedMessage}`;

  return `<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><title>Alpha CMS sign-in</title></head>
  <body>
    <p>${isError ? "Sign-in could not be completed. You may close this window." : "Sign-in complete. This window will close automatically."}</p>
    <script>
      const cmsOrigin = ${JSON.stringify(CMS_ORIGIN)};
      const result = ${JSON.stringify(result)};
      function receiveMessage(event) {
        if (event.origin !== cmsOrigin) return;
        window.opener.postMessage(result, cmsOrigin);
        window.close();
      }
      window.addEventListener("message", receiveMessage, false);
      if (window.opener) window.opener.postMessage("authorizing:github", cmsOrigin);
    </script>
  </body>
</html>`;
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const expectedState = readCookie(request, "decap_oauth_state");

  if (!code || !state || !expectedState || state !== expectedState) {
    return htmlResponse(messagePage({ message: "Invalid or expired OAuth state." }, true), 400);
  }

  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
    return htmlResponse(messagePage({ message: "GitHub OAuth is not configured." }, true), 503);
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "alpha-sports-med-decap-cms",
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/api/callback`,
      state,
    }),
  });

  const payload = await tokenResponse.json();
  if (!tokenResponse.ok || !payload.access_token) {
    return htmlResponse(messagePage({ message: payload.error_description || "GitHub did not return an access token." }, true), 502);
  }

  return htmlResponse(messagePage({ token: payload.access_token, provider: "github" }));
}
