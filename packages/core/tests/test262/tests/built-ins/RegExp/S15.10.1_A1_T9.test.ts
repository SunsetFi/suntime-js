import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.10.1_A1_T9.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/S15.10.1_A1_T9.js"),
);
