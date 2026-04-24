import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.10.2.10_A1.2_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/S15.10.2.10_A1.2_T1.js"),
);
