import alpine from '@astrojs/alpinejs'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig, fontProviders } from 'astro/config'

let prefixCounter = 0

// https://astro.build/config
export default defineConfig({
  site: 'https://lanceguyatt.com',
  integrations: [
    mdx(),
    sitemap({
      // Leave out the error page and the UI playground pages
      filter: (page) => !/\/(404|menu|popover|ui)\/$/.test(new URL(page).pathname),
    }),
    alpine({
      entrypoint: './src/scripts/app.ts',
    }),
    icon({
      svgoOptions: {
        plugins: [
          { name: 'preset-default' },
          'prefixIds',
          {
            name: 'prefixIds',
            params: {
              delim: '',
              prefix: () => `icon-${prefixCounter++}-`,
            },
          },
        ],
      },
    }),
    (await import('@playform/compress')).default(),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Topaz',
      cssVariable: '--font-topaz',
      options: {
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: ['./src/assets/fonts/topaz.woff2'],
          },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwind()],
  },
})
