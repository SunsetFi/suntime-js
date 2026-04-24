import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-with-statment-regexp-literal.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/block-with-statment-regexp-literal.js"),
);
