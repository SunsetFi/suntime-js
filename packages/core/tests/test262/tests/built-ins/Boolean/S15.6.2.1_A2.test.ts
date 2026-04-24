import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.6.2.1_A2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Boolean/S15.6.2.1_A2.js"),
);
