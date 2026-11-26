import { defineConfig } from 'vite-plus'

// Astro ignores this file (its Vite config lives in astro.config.mjs); it only holds
// the Vite+ formatter (Oxfmt) and linter (Oxlint) settings. Tests use vitest.config.ts.
export default defineConfig({
  lint: {
    plugins: ['typescript', 'jsx-a11y'],
    ignorePatterns: ['**/*.d.ts', '.astro/**', 'dist/**', 'public/**', '.netlify/**'],
    rules: { 'no-undef': 'off' },
    overrides: [{ files: ['**/*.astro'], rules: { 'typescript/no-explicit-any': 'off' } }],
  },
  fmt: {
    singleQuote: true,
    semi: false,
    printWidth: 100,
    sortImports: {
      // Mirrors the request flow (layout → feature → block → component), then the data layer;
      // remaining `@/*` aliases (lib, utils, config, scripts…) fall through to `internal`
      customGroups: [
        { groupName: 'layouts', elementNamePattern: ['@/layouts', '@/layouts/**'] },
        { groupName: 'routes', elementNamePattern: ['@/routes', '@/routes/**'] },
        { groupName: 'features', elementNamePattern: ['@/features', '@/features/**'] },
        { groupName: 'blocks', elementNamePattern: ['@/blocks', '@/blocks/**'] },
        { groupName: 'components', elementNamePattern: ['@/components', '@/components/**'] },
        {
          groupName: 'data',
          elementNamePattern: ['@/schema', '@/schema/**', '@/queries', '@/queries/**'],
        },
      ],
      groups: [
        'builtin',
        'external',
        'layouts',
        'routes',
        'features',
        'blocks',
        'components',
        'data',
        ['internal', 'subpath'],
        ['parent', 'sibling', 'index'],
        'style',
        'unknown',
      ],
    },
    astro: { allowShorthand: true },
    sortPackageJson: true,
    sortTailwindcss: {
      stylesheet: './src/styles/app.css',
      functions: ['clsx', 'cn', 'tv'],
    },
    overrides: [{ files: ['**/*.json', '**/*.jsonc'], options: { trailingComma: 'none' } }],
    ignorePatterns: ['dist/**', '.astro/**', '.netlify/**', 'public/**', 'pnpm-lock.yaml'],
  },
})
