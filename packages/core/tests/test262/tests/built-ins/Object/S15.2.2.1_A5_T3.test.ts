import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.2.2.1_A5_T3.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/S15.2.2.1_A5_T3.js"),
);
