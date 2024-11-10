import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import tailwind from '@astrojs/tailwind'
import alpine from '@astrojs/alpinejs'
import icon from 'astro-icon'
import playformCompress from '@playform/compress'

// https://astro.build/config
export default defineConfig({
  // site: 'https://lanceguyatt.surge.sh/',
  integrations: [
    // (await import('@playform/compress')).default(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push']
      }
    }),
    // react(),
    tailwind({
      applyBaseStyles: false
    }),
    mdx(),
    alpine({
      entrypoint: './src/scripts/app'
    }),
    icon(),
    playformCompress()
  ]
})
