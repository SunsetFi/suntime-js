import { defineConfig } from "oxlint";

export default defineConfig({
  ignorePatterns: ["memory-profile.js", "/tests/test262/repo"],
  rules: {
    // All of our node evaluators are generators, but they don't always need to send commands.
    // Many of them just send results.
    // We still need generators to be created for them.
    "require-yield": "off",
  },
});
