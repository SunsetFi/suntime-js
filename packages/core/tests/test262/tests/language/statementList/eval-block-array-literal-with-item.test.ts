import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-block-array-literal-with-item.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-block-array-literal-with-item.js"),
);
