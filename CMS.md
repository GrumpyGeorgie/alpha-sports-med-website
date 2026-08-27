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

The production site uses Decap's GitHub backend. Before production publishing
is enabled, configure a dedicated GitHub OAuth provider and add its secure
`base_url` and `auth_endpoint` values to `public/admin/config.yml`.

Do not place a GitHub client secret or access token in this repository or in the
browser bundle. The OAuth provider must keep the client secret server-side,
validate the OAuth `state`, and restrict access to approved editors.

CMS commits to `main`; the GitHub Actions workflow builds Astro and deploys the
result to the existing `alpha-sports-med-prototype` Cloudflare Pages project.
