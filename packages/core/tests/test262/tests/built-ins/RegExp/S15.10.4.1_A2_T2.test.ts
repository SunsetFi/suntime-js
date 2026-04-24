import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.10.4.1_A2_T2.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/S15.10.4.1_A2_T2.js"),
);
