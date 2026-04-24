import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-class-array-literal-with-item.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/eval-class-array-literal-with-item.js"),
);
