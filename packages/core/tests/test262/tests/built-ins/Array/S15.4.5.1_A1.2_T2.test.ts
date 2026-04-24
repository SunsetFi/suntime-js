import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.4.5.1_A1.2_T2.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Array/S15.4.5.1_A1.2_T2.js"),
);
