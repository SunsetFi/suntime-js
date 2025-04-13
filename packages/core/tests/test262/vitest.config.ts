import { defineConfig } from "vitest/config";
import { readFileSync } from "fs";

export default defineConfig({
  esbuild: {
    tsconfigRaw: readFileSync("../tsconfig.json", "utf-8"),
  },
  test: {
    name: "Test262",
    include: ["./**/*.ts"],
    exclude: ["./utils/*.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary", "json"] as const,
      reportOnFailure: true,
      include: ["src/**/*.ts"],
      exclude: ["**/*.spec.ts"],
    },
  },
});
