import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "resolve-poisoned-then-deferred.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/resolve-poisoned-then-deferred.js"),
);
