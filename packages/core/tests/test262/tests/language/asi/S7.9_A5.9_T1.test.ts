import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.9_A5.9_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/asi/S7.9_A5.9_T1.js"),
);
