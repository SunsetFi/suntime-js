import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "resolve-poisoned-then-immed.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/resolve-poisoned-then-immed.js"),
);
