import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "fn-regexp-literal-flags.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/fn-regexp-literal-flags.js"),
);
