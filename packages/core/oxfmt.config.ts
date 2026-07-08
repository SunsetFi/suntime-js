import { defineConfig } from "oxfmt";

import baseConfig from "../../oxfmt.config.ts";

export default defineConfig({
  extends: baseConfig,
  ignorePatterns: ["/tests/test262/repo", "/tests/test262/tests"],
});
