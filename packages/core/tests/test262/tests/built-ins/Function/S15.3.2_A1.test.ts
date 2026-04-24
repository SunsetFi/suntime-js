import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.3.2_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Function/S15.3.2_A1.js"),
);
