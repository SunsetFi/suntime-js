import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.5.3_A1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/S15.5.3_A1.js"),
);
