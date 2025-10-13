import alpine from '@astrojs/alpinejs'
import mdx from '@astrojs/mdx'
import tailwind from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

let prefixCounter = 0

// https://astro.build/config
export default defineConfig({
  // site: 'https://lanceguyatt.surge.sh/',
  integrations: [
    mdx(),
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
  experimental: {
    contentIntellisense: true,
    headingIdCompat: true,
    chromeDevtoolsWorkspace: true,
    fonts: [
      {
        provider: 'local',
        name: 'Topaz',
        cssVariable: '--topaz',
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: ['./src/assets/fonts/topaz.woff2'],
          },
        ],
      },
    ],
  },
  vite: {
    plugins: [tailwind()],
  },
})
