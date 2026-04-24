import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S10.6_A3_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("language/arguments-object/S10.6_A3_T1.js"),
);
