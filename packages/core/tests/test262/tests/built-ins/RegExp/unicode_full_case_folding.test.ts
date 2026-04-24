import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "unicode_full_case_folding.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/unicode_full_case_folding.js"),
);
