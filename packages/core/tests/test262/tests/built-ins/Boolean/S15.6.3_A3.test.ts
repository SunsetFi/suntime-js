import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.6.3_A3.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Boolean/S15.6.3_A3.js"),
);
