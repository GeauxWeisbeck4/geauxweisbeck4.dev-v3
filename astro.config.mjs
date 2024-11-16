// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
  integrations: [tailwind(), react(), icon()]
});
