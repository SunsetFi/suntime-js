import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "fn-array-literal.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/fn-array-literal.js"),
);
