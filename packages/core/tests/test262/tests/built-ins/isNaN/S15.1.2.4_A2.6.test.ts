import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1.2.4_A2.6.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/isNaN/S15.1.2.4_A2.6.js"),
);
