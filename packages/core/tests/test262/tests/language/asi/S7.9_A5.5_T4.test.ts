import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.9_A5.5_T4.js",
  { tags: ["known-failing"] },
  createTestHandler("language/asi/S7.9_A5.5_T4.js"),
);
