import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-fn-block-with-labels.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/eval-fn-block-with-labels.js"),
);
