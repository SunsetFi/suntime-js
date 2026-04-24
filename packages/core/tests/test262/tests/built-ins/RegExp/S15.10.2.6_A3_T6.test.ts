import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.10.2.6_A3_T6.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/S15.10.2.6_A3_T6.js"),
);
