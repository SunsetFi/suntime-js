import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "unicode_character_class_backspace_escape.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/unicode_character_class_backspace_escape.js"),
);
