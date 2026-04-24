import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.4_A1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/S7.4_A1_T1.js"),
);
