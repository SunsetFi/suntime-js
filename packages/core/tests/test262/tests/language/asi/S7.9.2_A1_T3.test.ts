import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.9.2_A1_T3.js",
  { tags: ["known-passing"] },
  createTestHandler("language/asi/S7.9.2_A1_T3.js"),
);
