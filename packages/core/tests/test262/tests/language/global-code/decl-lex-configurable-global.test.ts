import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "decl-lex-configurable-global.js",
  { tags: ["known-passing"] },
  createTestHandler("language/global-code/decl-lex-configurable-global.js"),
);
