import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "reject-function-property-order.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/reject-function-property-order.js"),
);
