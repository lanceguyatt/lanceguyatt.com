import { defineConfig } from 'vite-plus'

// Astro ignores this file (its Vite config lives in astro.config.mjs); it only holds
// the Vite+ formatter (Oxfmt) and linter (Oxlint) settings.
export default defineConfig({
  fmt: {
    singleQuote: true,
    semi: false,
    printWidth: 100,
    astro: { allowShorthand: true },
    sortImports: {},
    sortTailwindcss: {
      stylesheet: './src/styles/app.css',
      functions: ['clsx', 'tv', 'cn'],
    },
    overrides: [{ files: ['**/*.json', '**/*.jsonc'], options: { trailingComma: 'none' } }],
    ignorePatterns: ['dist/**', '.astro/**', '.netlify/**', 'pnpm-lock.yaml'],
  },
  lint: {
    plugins: ['typescript', 'jsx-a11y'],
    ignorePatterns: ['**/*.d.ts', '.astro/**', 'dist/**', 'public/**', '.netlify/**'],
    rules: { 'no-undef': 'off' },
    overrides: [{ files: ['**/*.astro'], rules: { 'typescript/no-explicit-any': 'off' } }],
  },
})
