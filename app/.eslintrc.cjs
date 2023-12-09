module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'testing-library', 'jest-dom'],
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['info', 'error'],
      },
    ],
    'react/prop-types': 'off',
    'react/self-closing-comp': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // 'testing-library/await-async-query': 'error', //TODO: check this false positive report
    // 'testing-library/no-await-sync-query': 'error', //TODO: check this false positive report
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
    'jest-dom/prefer-checked': 'error',
    'jest-dom/prefer-enabled-disabled': 'error',
    'jest-dom/prefer-required': 'error',
    'jest-dom/prefer-to-have-attribute': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
