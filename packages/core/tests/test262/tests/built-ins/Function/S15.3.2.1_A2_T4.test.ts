import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.3.2.1_A2_T4.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Function/S15.3.2.1_A2_T4.js"),
);
