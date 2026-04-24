import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.1.3.4_A4_T3.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/encodeURIComponent/S15.1.3.4_A4_T3.js"),
);
