// @ts-check

import { globalIgnores } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
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
    },
  }
);
