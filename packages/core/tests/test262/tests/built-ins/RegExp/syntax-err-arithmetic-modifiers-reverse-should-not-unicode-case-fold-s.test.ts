import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "syntax-err-arithmetic-modifiers-reverse-should-not-unicode-case-fold-s.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/RegExp/syntax-err-arithmetic-modifiers-reverse-should-not-unicode-case-fold-s.js",
  ),
);
