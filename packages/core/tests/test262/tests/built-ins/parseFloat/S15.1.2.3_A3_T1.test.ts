import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1.2.3_A3_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/parseFloat/S15.1.2.3_A3_T1.js"),
);
