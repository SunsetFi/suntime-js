import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-fn-block.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/eval-fn-block.js"),
);
