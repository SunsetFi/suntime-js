import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1.2.3_A5_T2.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/parseFloat/S15.1.2.3_A5_T2.js"),
);
