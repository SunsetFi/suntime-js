import { defineConfig } from "vitest/config";
import { JsonReporter } from "vitest/node";

import createBaseline from "./tests/env/create-baseline.js";
import createBuiltinsBaseline from "./tests/env/create-builtins-baseline.js";
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
          name: "Test262:Language",
          include: ["./tests/test262/tests/language/**/*.ts"],
          isolate: false,
          testTimeout: 60_000,
        },
      },
      {
        test: {
          name: "Test262:Built-ins",
          include: ["./tests/test262/tests/built-ins/**/*.ts"],
          isolate: false,
          testTimeout: 60_000,
        },
      },
    ],
    coverage:
      createBaseline || createBuiltinsBaseline
        ? {}
        : {
            include: ["./src/**/*.ts"],
            exclude: ["./src/**/*.spec.ts"],
          },
    reporters: [
      "default",
      "html",
      createBaseline &&
        new JsonReporter({ outputFile: "tests/test-results-language-baseline.json" }),
      createBaseline &&
        new VitestBadgeReporter({
          outputFile: "badges/test262-language.json",
          label: "Test262 Language Suite",
        }),
      createBuiltinsBaseline &&
        new JsonReporter({ outputFile: "tests/test-results-builtins-baseline.json" }),
      createBuiltinsBaseline &&
        new VitestBadgeReporter({
          outputFile: "badges/test262-builtins.json",
          label: "Test262 Built-ins Suite",
        }),
    ].filter(isNotFalse),
  },
});

function isNotFalse<T>(value: T | false): value is T {
  return value !== false;
}
