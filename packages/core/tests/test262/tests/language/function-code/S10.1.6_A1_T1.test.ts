import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S10.1.6_A1_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("language/function-code/S10.1.6_A1_T1.js"),
);
