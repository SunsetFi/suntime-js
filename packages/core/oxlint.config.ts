import { defineConfig } from "oxlint";

const memoryEnabled = process.env.CI === "true" || process.env.SUNTIME_MEMORY === "true";

export default defineConfig({
  ignorePatterns: ["memory-profile.js", "/tests/test262/repo", "/tests/test262/tests"],
  rules: {
    // Most of our runtime uses generators.  We need these functions to return iterators, even if
    // they don't actually yield anything.
    "require-yield": "off",
    // Also mirrored by the typescript setting.
    "no-unused-vars": "error",
    // Suddenly this is having massive amounts of false positives on very simple things.
    "no-unreachable": "off",
    ...(memoryEnabled
      ? {
          "suntime-memory/markable-capture": "error",
          "suntime-memory/allocate-self": "error",
        }
      : {}),
  },
  ...(memoryEnabled
    ? {
        jsPlugins: [{ name: "suntime-memory", specifier: "./tools/oxlint-memory/plugin.ts" }],
      }
    : {}),
});
