import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "reject-function-extensible.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/reject-function-extensible.js"),
);
