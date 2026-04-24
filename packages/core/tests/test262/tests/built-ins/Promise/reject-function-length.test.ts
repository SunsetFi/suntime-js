import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "reject-function-length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/reject-function-length.js"),
);
