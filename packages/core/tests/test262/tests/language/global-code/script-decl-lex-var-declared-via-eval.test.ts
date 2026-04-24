import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "script-decl-lex-var-declared-via-eval.js",
  { tags: ["known-passing"] },
  createTestHandler("language/global-code/script-decl-lex-var-declared-via-eval.js"),
);
