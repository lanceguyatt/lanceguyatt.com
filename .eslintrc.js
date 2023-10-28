module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true
  },
  extends: ['eslint:recommended', 'plugin:astro/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {}
    }
  ],
  rules: {
    'prettier/prettier': ['error']
  }
}
