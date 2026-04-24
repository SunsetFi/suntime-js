import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "return-false-not-nan-numbers.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/isNaN/return-false-not-nan-numbers.js"),
);
