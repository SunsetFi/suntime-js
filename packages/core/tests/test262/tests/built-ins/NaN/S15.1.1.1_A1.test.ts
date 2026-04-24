import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1.1.1_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NaN/S15.1.1.1_A1.js"),
);
