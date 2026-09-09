import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { copyFile } from 'node:fs/promises';

export default defineConfig({
  site: 'https://alphasportsmed.com.au',
  output: 'static',
  integrations: [
    sitemap(),
    {
      name: 'sitemap-xml-alias',
      hooks: {
        // Keep /sitemap.xml available in both Astro preview and Cloudflare Pages.
        'astro:build:done': async ({ dir }) => {
          await copyFile(new URL('sitemap-index.xml', dir), new URL('sitemap.xml', dir));
        },
      },
    },
  ],
});
