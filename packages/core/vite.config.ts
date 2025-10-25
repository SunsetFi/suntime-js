import { defineConfig } from "vitest/config";
import { readFileSync } from "fs";

const tsconfigRaw = readFileSync("./tsconfig.tests.json", "utf-8");

export default defineConfig({
  test: {
    projects: [
      {
        esbuild: {
          tsconfigRaw,
        },
        test: {
          name: "e2e",
          include: ["./tests/e2e/**/*.ts"],
          exclude: ["./tests/e2e/**/utils/*.ts"],
        },
      },
      {
        esbuild: {
          tsconfigRaw,
        },
        test: {
          name: "Test262",
          include: ["./tests/test262/test262.ts"],
        },
      },
    ],
    reporters: ["default", "html"],
  },
});

// coverage: {
//             provider: "v8",
//             reporter: ["text", "json-summary", "json"] as const,
//             reportOnFailure: true,
//             include: ["src/**/*.ts"],
//             exclude: ["**/*.spec.ts"],
//           },
