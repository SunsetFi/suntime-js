import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "func-expr-runtime.js",
  { tags: ["known-passing"] },
  createTestHandler("language/directive-prologue/func-expr-runtime.js"),
);
