import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "syntax-err-arithmetic-modifiers-add-remove-s-escape.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/syntax-err-arithmetic-modifiers-add-remove-s-escape.js"),
);
