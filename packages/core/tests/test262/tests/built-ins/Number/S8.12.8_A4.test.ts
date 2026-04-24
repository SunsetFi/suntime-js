import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S8.12.8_A4.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/S8.12.8_A4.js"),
);
