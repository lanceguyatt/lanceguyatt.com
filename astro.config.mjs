import alpine from '@astrojs/alpinejs'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import playformCompress from '@playform/compress'
import tailwind from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

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
      entrypoint: './src/scripts/app',
    }),
    playformCompress(),
    icon(),
    react(),
  ],
  vite: {
    plugins: [tailwind()],
  },
  // output: 'server',
})
