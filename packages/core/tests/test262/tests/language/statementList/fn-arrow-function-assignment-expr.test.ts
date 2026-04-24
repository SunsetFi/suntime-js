import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "fn-arrow-function-assignment-expr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/fn-arrow-function-assignment-expr.js"),
);
