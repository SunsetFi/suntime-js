import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "resolve-thenable-deferred.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve-thenable-deferred.js"),
);
