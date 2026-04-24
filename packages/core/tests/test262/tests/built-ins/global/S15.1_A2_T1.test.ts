import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1_A2_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/global/S15.1_A2_T1.js"),
);
