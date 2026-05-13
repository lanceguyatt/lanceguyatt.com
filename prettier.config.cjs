/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  semi: false,
  printWidth: 100,
  importOrder: ['^blocks/(.*)$', '^components/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  tailwindFunctions: ['tv'],
  overrides: [
    {
      files: ['**/*.astro'],
      options: {
        astroAllowShorthand: true,
        parser: 'astro',
      },
    },
  ],
}
