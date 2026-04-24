import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1.2.4_A2.7.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/isNaN/S15.1.2.4_A2.7.js"),
);
