# Decap CMS

The CMS is available at `/admin/` and edits content stored in this repository.
The staging CMS is https://alpha-sports-med-prototype.pages.dev/admin/#/.

## Editorial workflow

Decap uses `publish_mode: editorial_workflow`. Client edits should be saved as
Draft, moved to In Review for the LHM team, then moved to Ready and published
only after approval. Publishing writes the approved content to `main`; GitHub
Actions then builds and deploys the Astro site to Cloudflare Pages.

Editable page groups currently include Core Pages, Staff Pages, Staff routing,
Services, Locations and Conditions. The six connected pages are Home, About,
Osteopathy, Knee Pain, Newport and Dr Ashton Wilson.

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

Approved CMS changes are published to `main`; the GitHub Actions workflow builds Astro and deploys the
result to the existing `alpha-sports-med-prototype` Cloudflare Pages project.
