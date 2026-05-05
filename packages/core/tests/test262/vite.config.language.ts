import { defineProject, TestTagDefinition } from "vitest/config";

import { ScriptTimeout } from "./timeouts.js";

const test262Tags: TestTagDefinition[] = [
  { name: "known-passing", description: "Tests that are known to pass." },
  { name: "known-failing", description: "Tests that are known to fail." },
];

export default defineProject({
  test: {
    name: "Test262:Language",
    include: ["./tests/language/**/*.ts"],
    isolate: false,
    testTimeout: ScriptTimeout,
    tags: test262Tags,
  },
});
