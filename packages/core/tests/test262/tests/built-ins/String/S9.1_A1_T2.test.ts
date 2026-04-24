import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S9.1_A1_T2.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/S9.1_A1_T2.js"),
);
