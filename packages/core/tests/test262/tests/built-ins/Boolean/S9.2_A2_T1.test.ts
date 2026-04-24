import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S9.2_A2_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Boolean/S9.2_A2_T1.js"),
);
