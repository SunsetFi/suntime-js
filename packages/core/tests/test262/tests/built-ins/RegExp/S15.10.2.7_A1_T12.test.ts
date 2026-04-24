import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.10.2.7_A1_T12.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/S15.10.2.7_A1_T12.js"),
);
