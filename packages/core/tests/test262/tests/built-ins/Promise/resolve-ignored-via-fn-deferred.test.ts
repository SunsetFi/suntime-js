import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "resolve-ignored-via-fn-deferred.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve-ignored-via-fn-deferred.js"),
);
