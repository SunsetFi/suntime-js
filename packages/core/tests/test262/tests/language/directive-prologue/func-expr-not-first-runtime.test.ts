import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "func-expr-not-first-runtime.js",
  { tags: ["known-failing"] },
  createTestHandler("language/directive-prologue/func-expr-not-first-runtime.js"),
);
