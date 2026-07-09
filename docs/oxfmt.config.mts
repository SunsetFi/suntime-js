import { defineConfig } from "oxfmt";

import baseConfig from "../oxfmt.config.ts";

export default defineConfig({
  extends: baseConfig,
  ignorePatterns: ["/static"],
});
