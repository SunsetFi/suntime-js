import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1.1.2_A1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Infinity/S15.1.1.2_A1.js"),
);
