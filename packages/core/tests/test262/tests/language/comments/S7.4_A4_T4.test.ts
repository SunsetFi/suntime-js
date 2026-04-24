import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.4_A4_T4.js",
  { tags: ["known-failing"] },
  createTestHandler("language/comments/S7.4_A4_T4.js"),
);
