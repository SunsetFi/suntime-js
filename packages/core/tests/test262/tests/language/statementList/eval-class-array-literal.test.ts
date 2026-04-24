import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-class-array-literal.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-class-array-literal.js"),
);
