import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S9.3_A2_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/S9.3_A2_T1.js"),
);
