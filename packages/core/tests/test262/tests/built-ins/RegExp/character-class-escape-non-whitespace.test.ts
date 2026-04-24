import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "character-class-escape-non-whitespace.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/character-class-escape-non-whitespace.js"),
);
