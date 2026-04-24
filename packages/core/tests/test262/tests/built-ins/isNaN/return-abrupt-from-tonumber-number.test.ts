import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "return-abrupt-from-tonumber-number.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/isNaN/return-abrupt-from-tonumber-number.js"),
);
