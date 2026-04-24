import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "call_with_regexp_match_falsy.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/call_with_regexp_match_falsy.js"),
);
