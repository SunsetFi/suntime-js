import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "return-true-for-valid-finite-numbers.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/isFinite/return-true-for-valid-finite-numbers.js"),
);
