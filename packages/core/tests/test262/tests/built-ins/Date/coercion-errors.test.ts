import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "coercion-errors.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/coercion-errors.js"),
);
