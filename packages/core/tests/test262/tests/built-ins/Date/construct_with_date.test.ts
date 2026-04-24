import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "construct_with_date.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/construct_with_date.js"),
);
