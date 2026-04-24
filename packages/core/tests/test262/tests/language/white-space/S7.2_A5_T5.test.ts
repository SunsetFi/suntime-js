import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.2_A5_T5.js",
  { tags: ["known-failing"] },
  createTestHandler("language/white-space/S7.2_A5_T5.js"),
);
