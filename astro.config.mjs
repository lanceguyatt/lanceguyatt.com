import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
  site: 'https://lanceguyatt.surge.sh',
  markdown: {
  },
  integrations: [
    mdx({
      // rehypePlugins: [
      //   rehypeExternalLinks()
      // ],
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    svelte(),
    compress(),
  ],
})
