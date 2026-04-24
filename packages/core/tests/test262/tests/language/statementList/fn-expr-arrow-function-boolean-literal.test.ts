import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "fn-expr-arrow-function-boolean-literal.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/fn-expr-arrow-function-boolean-literal.js"),
);
