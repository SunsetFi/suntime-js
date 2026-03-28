import { defineConfig } from "vitest/config";
import { JsonReporter } from "vitest/node";

import createBaseline from "./tests/env/create-baseline.js";

import VitestBadgeReporter from "./tests/reporters/VitestBadgeReporter.js";

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "spec",
          setupFiles: ["./tests/setup.ts"],
          include: ["./src/**/*.spec.ts"],
        },
      },
      {
        test: {
          name: "e2e",
          setupFiles: ["./tests/setup.ts"],
          include: ["./tests/e2e/**/*.ts"],
          exclude: ["./tests/e2e/**/utils/*.ts"],
        },
      },
      {
        test: {
          name: "Test262",
          include: ["./tests/test262/tests/**/*.ts"],
          isolate: false,
        },
      },
    ],
    reporters: [
      "default",
      "html",
      createBaseline && new JsonReporter({ outputFile: "tests/test-results-baseline.json" }),
      createBaseline &&
        new VitestBadgeReporter({
          outputFile: "badges/test262.json",
          label: "Test262 Language Suite",
        }),
    ].filter(isNotFalse),
  },
});

function isNotFalse<T>(value: T | false): value is T {
  return value !== false;
}
