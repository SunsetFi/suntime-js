import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.4_A1.1_T9.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Array/S15.4_A1.1_T9.js"),
);
