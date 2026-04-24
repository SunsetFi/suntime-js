import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "func-expr-inside-func-decl-runtime.js",
  { tags: ["known-passing"] },
  createTestHandler("language/directive-prologue/func-expr-inside-func-decl-runtime.js"),
);
