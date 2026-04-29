import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.5.5.1_A5.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/String/S15.5.5.1_A5.js"),
);
