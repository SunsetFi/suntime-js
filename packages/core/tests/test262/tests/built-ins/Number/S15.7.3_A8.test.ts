import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.7.3_A8.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/S15.7.3_A8.js"),
);
