import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import svelte from '@astrojs/svelte'
import compress from 'astro-compress'
import remarkToc from 'remark-toc'
import remarkCollapse from 'remark-collapse'
import UnoCSS from 'unocss/astro'

import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: 'https://lanceguyatt.surge.sh/',
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: 'Table of contents',
        },
      ],
    ],
  },
  integrations: [
    UnoCSS({
      injectReset: false,
    }),
    mdx({
      remarkPlugins: [
        remarkToc,
        [
          remarkCollapse,
          {
            test: 'Table of contents',
          },
        ],
      ],
    }),
    svelte(),
    compress(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  vite: {
    build: {
      // cssCodeSplit: false,
      // rollupOptions: {
      //   output: {
      //     entryFileNames: 'scripts/[name].js',
      //     chunkFileNames: 'chunks/[name].js',
      //     assetFileNames: 'assets/[name][extname]',
      //   },
      // },
    },
  },
})
