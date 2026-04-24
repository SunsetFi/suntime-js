import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-expr-arrow-function-boolean-literal.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/block-expr-arrow-function-boolean-literal.js"),
);
