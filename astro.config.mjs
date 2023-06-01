import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'
import remarkToc from 'remark-toc'
import remarkCollapse from 'remark-collapse'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  // site: 'https://lanceguyatt.surge.sh/',
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: 'Table of contents'
        }
      ]
    ]
  },
  integrations: [
    mdx({
      remarkPlugins: [
        remarkToc,
        [
          remarkCollapse,
          {
            test: 'Table of contents'
          }
        ]
      ]
    }),
    compress(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push']
      }
    }),
    react(),
    tailwind()
  ],
  vite: {
    ssr: {
      noExternal: ['@radix-ui/*']
    },
    build: {
      // cssCodeSplit: false,
      // rollupOptions: {
      //   output: {
      //     entryFileNames: 'scripts/[name].js',
      //     chunkFileNames: 'chunks/[name].js',
      //     assetFileNames: 'assets/[name][extname]',
      //   },
      // },
    }
  }
})
