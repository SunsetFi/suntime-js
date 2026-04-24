import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.3_A7_T7.js",
  { tags: ["known-failing"] },
  createTestHandler("language/line-terminators/S7.3_A7_T7.js"),
);
