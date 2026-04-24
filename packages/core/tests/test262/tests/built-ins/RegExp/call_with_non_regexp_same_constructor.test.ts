import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "call_with_non_regexp_same_constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/call_with_non_regexp_same_constructor.js"),
);
