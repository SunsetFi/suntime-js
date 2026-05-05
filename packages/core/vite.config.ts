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
      "./tests/e2e/vite.config.ts",
      "./tests/test262/vite.config.language.ts",
      "./tests/test262/vite.config.builtins.ts",
    ],
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
