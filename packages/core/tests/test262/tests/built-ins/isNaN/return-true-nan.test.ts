import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "return-true-nan.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/isNaN/return-true-nan.js"),
);
