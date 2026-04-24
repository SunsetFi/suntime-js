import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.4.1_A1.1_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Array/S15.4.1_A1.1_T2.js"),
);
