import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.9_A6.2_T4.js",
  { tags: ["known-passing"] },
  createTestHandler("language/asi/S7.9_A6.2_T4.js"),
);
