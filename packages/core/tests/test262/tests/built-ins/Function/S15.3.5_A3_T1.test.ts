import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.3.5_A3_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Function/S15.3.5_A3_T1.js"),
);
