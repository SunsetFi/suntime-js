import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.5.2.1_A1_T11.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/S15.5.2.1_A1_T11.js"),
);
