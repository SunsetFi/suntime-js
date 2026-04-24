import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.7.1.1_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Number/S15.7.1.1_A1.js"),
);
