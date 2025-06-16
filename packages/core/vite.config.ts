import { defineConfig } from "vitest/config";
import { readFileSync } from "fs";

export default defineConfig({
  test: {
    projects: [
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
      // {
      //   esbuild: {
      //     tsconfigRaw: readFileSync("./tsconfig.tests.json", "utf-8"),
      //   },
      //   test: {
      //     name: "Test262",
      //     include: ["./tests/test262/test262.ts"],
      //   },
      // },
    ],
  },
});

// coverage: {
//             provider: "v8",
//             reporter: ["text", "json-summary", "json"] as const,
//             reportOnFailure: true,
//             include: ["src/**/*.ts"],
//             exclude: ["**/*.spec.ts"],
//           },
