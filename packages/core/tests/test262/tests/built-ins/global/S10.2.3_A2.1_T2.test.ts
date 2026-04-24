import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S10.2.3_A2.1_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/global/S10.2.3_A2.1_T2.js"),
);
