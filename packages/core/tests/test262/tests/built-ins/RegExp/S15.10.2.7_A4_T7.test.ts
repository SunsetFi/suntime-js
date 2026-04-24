import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.10.2.7_A4_T7.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/S15.10.2.7_A4_T7.js"),
);
