import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "class-expr-arrow-function-boolean-literal.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/class-expr-arrow-function-boolean-literal.js"),
);
