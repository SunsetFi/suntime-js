import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.3_A5.4.js",
  { tags: ["known-failing"] },
  createTestHandler("language/line-terminators/S7.3_A5.4.js"),
);
