import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "func-expr-parse.js",
  { tags: ["known-passing"] },
  createTestHandler("language/directive-prologue/func-expr-parse.js"),
);
