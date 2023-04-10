import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import svelte from '@astrojs/svelte'
// import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import remarkToc from 'remark-toc'
import remarkCollapse from 'remark-collapse'
import UnoCSS from 'unocss/astro'

// import rehypeExternalLinks from 'rehype-external-links'

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
      injectReset: true, // or a path to the reset file
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
    // tailwind({
    //   config: {
    //     applyBaseStyles: false,
    //   },
    // }),
    svelte(),
    compress(),
  ],

  // vite: {
  //   build: {
  //     rollupOptions: {
  //       output: {
  //         assetFileNames: 'assets/[name][extname]',
  //       }
  //     }
  //   }
  // }
})
