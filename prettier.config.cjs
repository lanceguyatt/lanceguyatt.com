module.exports = {
  singleQuote: true,
  semi: false,
  importOrder: ["^components/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("@trivago/prettier-plugin-sort-imports"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        astroAllowShorthand: true,
        parser: "astro",
      },
    },
  ],
};
