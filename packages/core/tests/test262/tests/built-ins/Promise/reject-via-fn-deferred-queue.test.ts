import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "reject-via-fn-deferred-queue.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/reject-via-fn-deferred-queue.js"),
);
