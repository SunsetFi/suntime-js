import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-block-with-statment-arrow-function-assignment-expr.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/statementList/eval-block-with-statment-arrow-function-assignment-expr.js",
  ),
);
