import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1.2.5_A2.6.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/isFinite/S15.1.2.5_A2.6.js"),
);
