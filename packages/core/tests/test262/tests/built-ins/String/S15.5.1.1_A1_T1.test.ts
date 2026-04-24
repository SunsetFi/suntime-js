import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.5.1.1_A1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/String/S15.5.1.1_A1_T1.js"),
);
