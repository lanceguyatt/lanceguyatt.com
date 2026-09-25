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
    },
  },

  {
    ignores: [
      '**/*.d.ts',
      '.astro/**',
      '.vercel/**',
      'dist/**',
      'pages/css-scroll-trigger.astro',
      'public/**',
      'src/blocks/advertiserDirectory/scripts/widgets/**',
      'src/layouts/default/components/**',
      'src/pages/eventbrite.astro',
      'src/pages/pardot.astro',
      'src/pages/quiz.astro',
      'src/scripts/**',
      'storybook-static',

      'src/pages/css-scroll-trigger.astro',
      'src/pages/design-system/**',
    ],
  },
])
