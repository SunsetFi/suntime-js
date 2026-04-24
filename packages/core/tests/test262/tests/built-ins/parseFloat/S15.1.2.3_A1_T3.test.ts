import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1.2.3_A1_T3.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/parseFloat/S15.1.2.3_A1_T3.js"),
);
