import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'
import remarkToc from 'remark-toc'
import remarkCollapse from 'remark-collapse'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import AutoImport from 'astro-auto-import'

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
    AutoImport({
      imports: ['./src/containers/Work.astro']
    }),

    compress(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push']
      }
    }),
    react(),
    tailwind({
      applyBaseStyles: false
    }),
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
    })
  ]
})
