import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.4.5.2_A2_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Array/S15.4.5.2_A2_T1.js"),
);
