import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.3.5_A2_T2.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Function/S15.3.5_A2_T2.js"),
);
