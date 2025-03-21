import { defineConfig } from "vitest/config";
import { readFileSync } from "fs";

export default defineConfig({
  esbuild: {
    tsconfigRaw: readFileSync("./tsconfig.spec.json", "utf-8"),
  },
  resolve: {
    alias: {
      "static-js": "/src/index.ts",
    },
  },
  test: {
    include: ["./e2e/**/*.ts", "./src/**/*.spec.ts"],
  },
});
