import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "property-order.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ThrowTypeError/property-order.js"),
);
