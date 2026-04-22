import { defineConfig } from "oxlint";

export default defineConfig({
  ignorePatterns: ["memory-profile.js", "/tests/test262/repo"],
  rules: {
    // Most of our runtime uses generators.  We need these functions to return iterators, even if
    // they don't actually yield anything.
    "require-yield": "off",
    // Also mirrored by the typescript setting.
    "no-unused-vars": "error",
  },
});
