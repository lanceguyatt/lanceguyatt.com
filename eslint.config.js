import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },

  js.configs.recommended,
  tseslint.configs.recommended,

  astro.configs.recommended,
  astro.configs['jsx-a11y-recommended'],

  {
    files: ['**/*.astro'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'astro/no-exports-from-components': 'off'
    },
  },

  {
    ignores: [
      '**/*.d.ts',
      '.astro/**',
      '.vercel/**',
      'dist/**',
      'public/**',
      'storybook-static',
    ],
  },
])
