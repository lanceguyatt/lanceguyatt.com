module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  plugins: ['import', 'prettier', 'react', 'react-hooks'],
  rules: {
    // 'react/prop-types': 'off',

    // We don't need to import React when using Next.js
    // 'react/react-in-jsx-scope': 'off',

    // Allows us to use JSX in js files
    // 'react/jsx-filename-extension': 'off',

    // Allows us to spread props
    'react/jsx-props-no-spreading': 'off',

    // When using Link, we specify the href on Link instead of a.
    // Link will add it to a so we leave it off. This disables
    // warnings about a not having an href in JSX.
    'jsx-a11y/anchor-is-valid': 'off',

    'import/no-unresolved': [
      2,
      {
        ignore: [
          '@axa-health',
          '@actions',
          '@api',
          '@components',
          '@containers',
          '@data',
          '@shared',
          '@state',
          '@themes',
          '@utils',
        ],
      },
    ],
    'react/jsx-pascal-case': 0,
    // 'react/jsx-wrap-multilines': 0,
    // 'react/jsx-one-expression-per-line': 0,
  },
}
