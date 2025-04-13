import { defineWorkspace } from "vitest/config";
import { readFileSync } from "fs";

export default defineWorkspace([
  {
    esbuild: {
      tsconfigRaw: readFileSync("./tsconfig.tests.json", "utf-8"),
    },
    test: {
      name: "e2e",
      include: ["./tests/e2e/**/*.ts"],
      exclude: ["./tests/e2e/**/utils/*.ts"],
    },
  },
  {
    esbuild: {
      tsconfigRaw: readFileSync("./tsconfig.tests.json", "utf-8"),
    },
    test: {
      name: "test262",
      include: ["./tests/test262/test262.ts"],
    },
  },
]);
