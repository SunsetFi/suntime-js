import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.9_A6.1_T7.js",
  { tags: ["known-passing"] },
  createTestHandler("language/asi/S7.9_A6.1_T7.js"),
);
