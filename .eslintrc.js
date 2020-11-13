module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    camelcase: 0,
    'react/jsx-pascal-case': 0,
    'react/no-danger': 0,
    'import/prefer-default-export': 1,
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     trailingComma: 'es5',
    //     semi: false,
    //     singleQuote: true,
    //     printWidth: 80,
    //   },
    // ],
  },
};
