import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S9.8.1_A9_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/S9.8.1_A9_T1.js"),
);
