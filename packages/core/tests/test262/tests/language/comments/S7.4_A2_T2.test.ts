import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.4_A2_T2.js",
  { tags: ["known-failing"] },
  createTestHandler("language/comments/S7.4_A2_T2.js"),
);
