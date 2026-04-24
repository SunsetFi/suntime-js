import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "func-decl-runtime.js",
  { tags: ["known-failing"] },
  createTestHandler("language/directive-prologue/func-decl-runtime.js"),
);
