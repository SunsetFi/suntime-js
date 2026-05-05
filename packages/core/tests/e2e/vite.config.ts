import { defineProject } from "vitest/config";

export default defineProject({
  test: {
    name: "e2e",
    setupFiles: ["../setup.ts"],
    include: ["./**/*.ts"],
    exclude: ["./**/utils/*.ts"],
  },
});
