import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "get-accsr-inside-func-expr-runtime.js",
  { tags: ["known-failing"] },
  createTestHandler("language/directive-prologue/get-accsr-inside-func-expr-runtime.js"),
);
