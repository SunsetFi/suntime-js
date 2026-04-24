import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "set-accsr-inside-func-expr-runtime.js",
  { tags: ["known-failing"] },
  createTestHandler("language/directive-prologue/set-accsr-inside-func-expr-runtime.js"),
);
