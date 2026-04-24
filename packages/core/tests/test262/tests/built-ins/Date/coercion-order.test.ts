import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "coercion-order.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/coercion-order.js"),
);
