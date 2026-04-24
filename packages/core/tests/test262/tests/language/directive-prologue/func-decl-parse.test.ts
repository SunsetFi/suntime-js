import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "func-decl-parse.js",
  { tags: ["known-failing"] },
  createTestHandler("language/directive-prologue/func-decl-parse.js"),
);
