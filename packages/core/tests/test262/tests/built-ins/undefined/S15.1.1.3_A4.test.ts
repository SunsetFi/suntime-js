import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1.1.3_A4.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/undefined/S15.1.1.3_A4.js"),
);
