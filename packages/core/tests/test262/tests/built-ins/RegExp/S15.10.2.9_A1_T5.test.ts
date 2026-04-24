import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.10.2.9_A1_T5.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/S15.10.2.9_A1_T5.js"),
);
