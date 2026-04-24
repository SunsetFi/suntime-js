import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1.2.2_A1_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/parseInt/S15.1.2.2_A1_T2.js"),
);
