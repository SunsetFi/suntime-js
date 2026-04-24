import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-fn-array-literal.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-fn-array-literal.js"),
);
