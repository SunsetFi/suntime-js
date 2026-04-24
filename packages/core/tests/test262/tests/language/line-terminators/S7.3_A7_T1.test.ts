import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.3_A7_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("language/line-terminators/S7.3_A7_T1.js"),
);
