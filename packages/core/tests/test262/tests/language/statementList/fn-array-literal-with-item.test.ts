import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "fn-array-literal-with-item.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/fn-array-literal-with-item.js"),
);
