import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-with-statment-arrow-function-assignment-expr.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/block-with-statment-arrow-function-assignment-expr.js"),
);
