import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.3_A3_T6.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Function/S15.3_A3_T6.js"),
);
