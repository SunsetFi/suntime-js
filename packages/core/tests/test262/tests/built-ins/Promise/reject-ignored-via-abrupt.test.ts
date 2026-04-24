import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "reject-ignored-via-abrupt.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/reject-ignored-via-abrupt.js"),
);
