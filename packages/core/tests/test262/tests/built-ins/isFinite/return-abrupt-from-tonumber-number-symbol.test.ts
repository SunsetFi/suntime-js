import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "return-abrupt-from-tonumber-number-symbol.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/isFinite/return-abrupt-from-tonumber-number-symbol.js"),
);
