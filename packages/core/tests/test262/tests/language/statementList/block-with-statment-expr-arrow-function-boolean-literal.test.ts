import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-with-statment-expr-arrow-function-boolean-literal.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/statementList/block-with-statment-expr-arrow-function-boolean-literal.js",
  ),
);
