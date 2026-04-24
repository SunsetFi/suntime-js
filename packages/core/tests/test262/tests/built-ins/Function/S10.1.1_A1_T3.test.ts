import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S10.1.1_A1_T3.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Function/S10.1.1_A1_T3.js"),
);
