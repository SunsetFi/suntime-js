import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "script-decl-lex-deletion.js",
  { tags: ["known-passing"] },
  createTestHandler("language/global-code/script-decl-lex-deletion.js"),
);
