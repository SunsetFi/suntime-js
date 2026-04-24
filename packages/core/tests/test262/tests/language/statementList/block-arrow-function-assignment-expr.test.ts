import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-arrow-function-assignment-expr.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/block-arrow-function-assignment-expr.js"),
);
