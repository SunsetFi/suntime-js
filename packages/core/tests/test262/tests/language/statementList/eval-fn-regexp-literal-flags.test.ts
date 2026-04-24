import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-fn-regexp-literal-flags.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-fn-regexp-literal-flags.js"),
);
