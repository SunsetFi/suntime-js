import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-fn-block.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-fn-block.js"),
);
