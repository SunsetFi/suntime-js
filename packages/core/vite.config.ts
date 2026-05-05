import { defineConfig, TestTagDefinition } from "vitest/config";
import { JsonReporter } from "vitest/node";

import createBaseline from "./tests/env/create-baseline.js";
import createBuiltinsBaseline from "./tests/env/create-builtins-baseline.js";
import VitestBadgeReporter from "./tests/reporters/VitestBadgeReporter.js";
import { ScriptTimeout } from "./tests/test262/timeouts.js";

const test262Tags: TestTagDefinition[] = [
  { name: "known-passing", description: "Tests that are known to pass." },
  { name: "known-failing", description: "Tests that are known to fail." },
];
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
          testTimeout: ScriptTimeout,
          tags: test262Tags,
        },
      },
      {
        test: {
          name: "Test262:Built-ins",
          include: ["./tests/test262/tests/built-ins/**/*.ts"],
          isolate: false,
          testTimeout: ScriptTimeout,
          tags: test262Tags,
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
      createBaseline &&
        new JsonReporter({ outputFile: "tests/test-results-language-baseline.json" }),
      createBaseline &&
        new VitestBadgeReporter({
          outputFile: "badges/test262-language.json",
          label: "Test262 Language Suite",
          totalsFile: "badges/test262.json",
        }),
      createBuiltinsBaseline &&
        new JsonReporter({ outputFile: "tests/test-results-builtins-baseline.json" }),
      createBuiltinsBaseline &&
        new VitestBadgeReporter({
          outputFile: "badges/test262-builtins.json",
          label: "Test262 Built-ins Suite",
          totalsFile: "badges/test262.json",
        }),
    ].filter(isNotFalse),
  },
});

function isNotFalse<T>(value: T | false): value is T {
  return value !== false;
}
