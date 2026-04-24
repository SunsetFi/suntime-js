import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "unicode_restricted_character_class_escape.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/unicode_restricted_character_class_escape.js"),
);
