import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "return-abrupt-from-tonumber-number.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/isFinite/return-abrupt-from-tonumber-number.js"),
);
