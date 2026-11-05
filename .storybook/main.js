// This file has been automatically migrated to valid ESM format by Storybook.
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import tailwindcss from '@tailwindcss/vite'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['./public'],

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
    config.resolve.alias['~'] = path.resolve(__dirname, '../src')
    return config
  },

  addons: ['@storybook/addon-a11y'],
}
