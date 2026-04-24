import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "script-decl-lex-restricted-global.js",
  { tags: ["known-failing"] },
  createTestHandler("language/global-code/script-decl-lex-restricted-global.js"),
);
