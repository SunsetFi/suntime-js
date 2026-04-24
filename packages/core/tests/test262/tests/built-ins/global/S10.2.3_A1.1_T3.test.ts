import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S10.2.3_A1.1_T3.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/global/S10.2.3_A1.1_T3.js"),
);
