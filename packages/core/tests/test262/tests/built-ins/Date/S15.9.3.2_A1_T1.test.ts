import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.9.3.2_A1_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/S15.9.3.2_A1_T1.js"),
);
