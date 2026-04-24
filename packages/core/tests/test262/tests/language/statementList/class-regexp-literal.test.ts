import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "class-regexp-literal.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/class-regexp-literal.js"),
);
