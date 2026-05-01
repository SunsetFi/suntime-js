import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "return-abrupt-tonumber-value-symbol.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Number/return-abrupt-tonumber-value-symbol.js"),
);
