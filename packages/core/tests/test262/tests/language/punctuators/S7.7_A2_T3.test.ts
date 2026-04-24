import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.7_A2_T3.js",
  { tags: ["known-failing"] },
  createTestHandler("language/punctuators/S7.7_A2_T3.js"),
);
