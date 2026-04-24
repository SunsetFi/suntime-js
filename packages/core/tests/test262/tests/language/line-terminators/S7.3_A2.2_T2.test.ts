import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S7.3_A2.2_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/line-terminators/S7.3_A2.2_T2.js"),
);
