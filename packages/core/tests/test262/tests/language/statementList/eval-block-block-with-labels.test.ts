import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-block-block-with-labels.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-block-block-with-labels.js"),
);
