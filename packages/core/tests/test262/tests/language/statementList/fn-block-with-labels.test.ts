import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "fn-block-with-labels.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/fn-block-with-labels.js"),
);
