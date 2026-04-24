import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "func-decl-inside-func-decl-runtime.js",
  { tags: ["known-passing"] },
  createTestHandler("language/directive-prologue/func-decl-inside-func-decl-runtime.js"),
);
