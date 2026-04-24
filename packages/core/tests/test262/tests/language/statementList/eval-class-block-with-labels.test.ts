import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-class-block-with-labels.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-class-block-with-labels.js"),
);
