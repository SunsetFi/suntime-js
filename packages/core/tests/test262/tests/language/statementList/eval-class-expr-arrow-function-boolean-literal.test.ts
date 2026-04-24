import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-class-expr-arrow-function-boolean-literal.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-class-expr-arrow-function-boolean-literal.js"),
);
