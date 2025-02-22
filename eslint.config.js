// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsparser from '@typescript-eslint/parser';
import playwright from 'eslint-plugin-playwright';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,

  {    
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js'],
        }
      },
    },    
    rules: {
      "curly": ["warn", "multi-line"],
      "no-empty-pattern": "off",
      "no-inner-declarations": "off",
      "no-duplicate-imports": "error",
      "no-use-before-define": "warn",

      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/unbound-method": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    }
  },

  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,

      "playwright/no-skipped-test": "off",
      "playwright/expect-expect": "warn",
      "playwright/valid-expect": ["warn", { "minArgs": 2, "maxArgs": 2 }],
      "playwright/require-top-level-describe": "warn",
    },
  },
);