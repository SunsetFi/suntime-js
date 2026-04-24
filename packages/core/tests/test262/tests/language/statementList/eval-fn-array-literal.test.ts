import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-fn-array-literal.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/eval-fn-array-literal.js"),
);
