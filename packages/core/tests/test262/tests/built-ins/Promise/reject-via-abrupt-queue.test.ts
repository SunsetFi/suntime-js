import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "reject-via-abrupt-queue.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/reject-via-abrupt-queue.js"),
);
