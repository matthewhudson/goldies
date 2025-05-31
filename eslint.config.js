import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // Global settings for all files
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        // Add UMD/AMD module globals
        define: 'readonly',
        module: 'readonly',
        global: 'readonly',
        process: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        console: 'readonly',
        document: 'readonly',
      },
    },
  },
  {
    // TypeScript-specific settings for source files
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: '.',
      },
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  {
    // For config files, don't require strict typechecking
    files: ['*.config.ts', 'vitest.setup.ts', '*.config.js', 'rollup.config.js'],
    languageOptions: {
      parserOptions: {
        project: null, // Don't require TypeScript project for these files
      },
    },
  },
  {
    // Ignore files
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      'docs/**/*.min.js', // Ignore minified third-party scripts
      'docs/**/*.js', // Ignore all JS in docs
      'docs/scripts/third-party/**', // Ignore all third-party scripts
      '**/*.d.ts',
    ],
  }
];
