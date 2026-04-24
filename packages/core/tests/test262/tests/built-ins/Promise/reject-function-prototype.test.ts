import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "reject-function-prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/reject-function-prototype.js"),
);
