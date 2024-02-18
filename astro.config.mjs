import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'
// import partytown from '@astrojs/partytown'
// import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import AutoImport from 'astro-auto-import'

import alpine from '@astrojs/alpinejs'

// https://astro.build/config
export default defineConfig({
  // site: 'https://lanceguyatt.surge.sh/',
  integrations: [
    AutoImport({
      imports: [
        '@/components/Alert.astro',
        {
          // Explicitly alias a default export
          // generates:
          // import { default as B } from './src/components/B.astro';
          // './src/components/B.astro': [['default', 'B']],
          // Import a module’s named exports
          // generates:
          // import { Tweet, YouTube } from 'astro-embed';
          // 'astro-embed': ['Tweet', 'YouTube']
        }
      ]
    }),
    compress(),
    // partytown({
    //   // Adds dataLayer.push as a forwarding-event.
    //   config: {
    //     forward: ['dataLayer.push']
    //   }
    // }),
    // react(),
    tailwind({
      applyBaseStyles: false
    }),
    mdx(),
    alpine({
      entrypoint: '/src/scripts/app'
    })
  ]
})
