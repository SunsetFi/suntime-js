import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-fn-array-literal-with-item.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-fn-array-literal-with-item.js"),
);
