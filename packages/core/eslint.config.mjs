// @ts-check

import { defineConfig, globalIgnores } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { jsdoc } from "eslint-plugin-jsdoc";

export default defineConfig(
  globalIgnores([
    "**/*",
    "!src/",
    "!src/**/*",
    "!tests/",
    "!tests/**/*",
    "tests/test262/repo",
  ]),
  eslint.configs.recommended,
  tseslint.configs.recommended,
  jsdoc({
    config: "flat/recommended",
    rules: {
      // Would be nice to restrict this to only exported artifacts.
      "jsdoc/require-jsdoc": "off",
      // Typescript takes care of these.
      "jsdoc/require-param-type": "off",
      "jsdoc/require-returns-type": "off",
    },
  }),
  {
    rules: {
      // All of our node evaluators are generators, but they don't always need to send commands.
      // Many of them just send results.
      // We still need generators to be created for them.
      "require-yield": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-namespace": "off",
    },
  },
);
