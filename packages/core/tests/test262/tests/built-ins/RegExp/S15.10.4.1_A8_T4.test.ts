import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.10.4.1_A8_T4.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/S15.10.4.1_A8_T4.js"),
);
