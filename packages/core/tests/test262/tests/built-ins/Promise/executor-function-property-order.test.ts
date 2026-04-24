import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "executor-function-property-order.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/executor-function-property-order.js"),
);
