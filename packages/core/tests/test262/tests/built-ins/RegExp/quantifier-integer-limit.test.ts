import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "quantifier-integer-limit.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/quantifier-integer-limit.js"),
);
