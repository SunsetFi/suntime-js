import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "func-expr-no-semi-parse.js",
  { tags: ["known-failing"] },
  createTestHandler("language/directive-prologue/func-expr-no-semi-parse.js"),
);
