import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-block-block.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-block-block.js"),
);
