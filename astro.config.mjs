// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

import netlify from '@astrojs/netlify';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://geauxweisbeck4.dev",

  prefetch: {
    prefetchAll: true
  },

  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },

  integrations: [tailwind(), react(), icon(), sitemap(), robotsTxt(), mdx()],
  adapter: netlify()
});