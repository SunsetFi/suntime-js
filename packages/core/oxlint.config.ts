import { defineConfig } from "oxlint";

import baseConfig from "../../oxlint.config.ts";
const memoryEnabled = process.env.CI === "true" || process.env.SUNTIME_MEMORY === "true";

export default defineConfig({
  extends: [baseConfig],
  ignorePatterns: ["memory-profile.js", "/tests/test262/repo", "/tests/test262/tests"],
  rules: {
    ...baseConfig.rules,
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
