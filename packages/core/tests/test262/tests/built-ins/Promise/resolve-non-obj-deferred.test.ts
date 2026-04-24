import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "resolve-non-obj-deferred.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/resolve-non-obj-deferred.js"),
);
