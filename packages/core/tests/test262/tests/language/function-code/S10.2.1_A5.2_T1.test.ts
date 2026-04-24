import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S10.2.1_A5.2_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("language/function-code/S10.2.1_A5.2_T1.js"),
);
