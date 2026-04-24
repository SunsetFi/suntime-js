import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.10.2.6_A6_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/S15.10.2.6_A6_T1.js"),
);
