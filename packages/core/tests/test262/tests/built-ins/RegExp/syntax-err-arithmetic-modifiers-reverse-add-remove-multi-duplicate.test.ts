import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "syntax-err-arithmetic-modifiers-reverse-add-remove-multi-duplicate.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/RegExp/syntax-err-arithmetic-modifiers-reverse-add-remove-multi-duplicate.js",
  ),
);
