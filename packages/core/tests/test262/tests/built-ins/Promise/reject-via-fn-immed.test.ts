import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "reject-via-fn-immed.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/reject-via-fn-immed.js"),
);
