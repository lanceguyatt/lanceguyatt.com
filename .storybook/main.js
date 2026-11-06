import path from 'node:path'
import { fileURLToPath } from 'node:url'

import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  features: {
    componentsManifest: true,
  },
  staticDirs: ['../public'],

  // Integrations, fonts and Vite plugins are read from astro.config.mjs. Point the builder at an
  // empty Vite config so it doesn't load the root vite.config.ts (see vite.config.mjs)
  framework: {
    name: '@storybook-astro/framework',
    options: {
      builder: { viteConfigPath: path.resolve(__dirname, 'vite.config.mjs') },
    },
  },

  async viteFinal(config) {
    config.plugins = config.plugins ?? []
    config.plugins.push(tailwindcss())

    config.resolve = config.resolve ?? {}
    config.resolve.alias = config.resolve.alias ?? {}
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    return config
  },

  addons: ['@storybook/addon-a11y', '@storybook/addon-mcp'],
}
