import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1.2.2_A6.1_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/parseInt/S15.1.2.2_A6.1_T1.js"),
);
