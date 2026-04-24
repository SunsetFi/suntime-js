import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "parse-err-hoist-lex-fun.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/parse-err-hoist-lex-fun.js"),
);
