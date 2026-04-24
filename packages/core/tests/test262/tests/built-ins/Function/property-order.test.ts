import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "property-order.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Function/property-order.js"),
);
