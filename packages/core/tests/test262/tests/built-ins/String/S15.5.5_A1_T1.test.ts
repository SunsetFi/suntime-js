import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.5.5_A1_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/S15.5.5_A1_T1.js"),
);
