module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
      'next',
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      // Your custom rules
      'react/react-in-jsx-scope': 'off',
    },
  };
  