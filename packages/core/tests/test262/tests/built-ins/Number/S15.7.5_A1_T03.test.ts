import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.7.5_A1_T03.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/S15.7.5_A1_T03.js"),
);
