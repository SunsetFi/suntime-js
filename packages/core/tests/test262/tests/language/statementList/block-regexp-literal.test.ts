import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-regexp-literal.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/block-regexp-literal.js"),
);
