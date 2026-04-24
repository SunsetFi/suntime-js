import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-fn-expr-arrow-function-boolean-literal.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-fn-expr-arrow-function-boolean-literal.js"),
);
