import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-class-regexp-literal-flags.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-class-regexp-literal-flags.js"),
);
