/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  singleQuote: true,
  semi: false,
  printWidth: 100,

  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-astro-organize-imports',
    'prettier-plugin-tailwindcss',
  ],

  astroOrganizeImportsMode: 'SortAndCombine',

  tailwindFunctions: ['clsx', 'tv'],

  overrides: [
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro',
        astroAllowShorthand: true,
      },
    },
    {
      files: ['**/*.json', '**/*.jsonc'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
}
