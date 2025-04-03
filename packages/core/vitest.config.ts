import { defineConfig } from "vitest/config";
import { readFileSync } from "fs";

export default defineConfig({
  esbuild: {
    tsconfigRaw: readFileSync("./tsconfig.spec.json", "utf-8"),
  },
  test: {
    include: ["./e2e/**/*.ts", "./src/**/*.spec.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary", "json"] as const,
      reportOnFailure: true,
      include: ["src/**/*.ts"],
      exclude: ["**/*.spec.ts"],
    },
  },
});
