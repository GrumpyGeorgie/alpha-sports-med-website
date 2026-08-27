# Decap CMS

The CMS is available at `/admin/` and edits content stored in this repository.

## Local editing

Run the Astro site and Decap's local backend in separate terminals:

```sh
npm run dev
npx decap-server
```

Then open `http://localhost:4321/admin/`. Local edits are written directly to
the repository working tree.

## Production authentication

The production site uses Decap's GitHub backend with Cloudflare Pages Functions
at `/api/auth` and `/api/callback`. Configure these encrypted bindings in both
the production and preview environments of the Pages project:

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

The registered GitHub OAuth callback is
`https://alpha-sports-med-prototype.pages.dev/api/callback`.

Do not place the GitHub client secret or an access token in this repository or
in the browser bundle. The callback validates a short-lived OAuth `state` cookie
and only returns credentials to the configured CMS origin.

CMS commits to `main`; the GitHub Actions workflow builds Astro and deploys the
result to the existing `alpha-sports-med-prototype` Cloudflare Pages project.
