import { defineConfig } from "oxfmt";

export default defineConfig({
  ignorePatterns: ["/tests/test262/repo", "/tests/test262/tests"],
  sortImports: {
    groups: [
      "type-import",
      ["value-builtin", "value-external"],
      ["type-internal", "value-internal"],
      ["type-parent", "value-parent"],
      ["type-sibling", "value-sibling"],
      ["type-index", "value-index"],
      "unknown",
    ],
  },
});
