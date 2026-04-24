import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-block-block-with-labels.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/eval-block-block-with-labels.js"),
);
