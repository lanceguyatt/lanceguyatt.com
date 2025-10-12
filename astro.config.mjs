import alpine from '@astrojs/alpinejs'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import playformCompress from '@playform/compress'
import tailwind from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

let prefixCounter = 0

// https://astro.build/config
export default defineConfig({
  // site: 'https://lanceguyatt.surge.sh/',
  integrations: [
    // (await import('@playform/compress')).default(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    mdx(),
    alpine({
      entrypoint: './src/scripts/app.ts',
    }),
    playformCompress(),
    icon({svgoOptions: {
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
    }}),
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
  // output: 'server',
})
