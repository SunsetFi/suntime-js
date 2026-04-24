import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S8.12.8_A2.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/S8.12.8_A2.js"),
);
