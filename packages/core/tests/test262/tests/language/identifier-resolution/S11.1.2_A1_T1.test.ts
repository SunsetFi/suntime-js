import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S11.1.2_A1_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("language/identifier-resolution/S11.1.2_A1_T1.js"),
);
