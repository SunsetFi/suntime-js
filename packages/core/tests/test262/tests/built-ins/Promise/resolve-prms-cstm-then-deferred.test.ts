import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "resolve-prms-cstm-then-deferred.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/resolve-prms-cstm-then-deferred.js"),
);
