import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.7_A2_T7.js",
  { tags: ["known-passing"] },
  createTestHandler("language/punctuators/S7.7_A2_T7.js"),
);
