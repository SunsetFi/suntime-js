import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1.2.2_A3.1_T4.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/parseInt/S15.1.2.2_A3.1_T4.js"),
);
