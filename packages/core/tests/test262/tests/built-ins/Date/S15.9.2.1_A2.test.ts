import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.9.2.1_A2.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/S15.9.2.1_A2.js"),
);
