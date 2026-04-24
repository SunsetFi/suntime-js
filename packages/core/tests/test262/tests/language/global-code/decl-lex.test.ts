import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "decl-lex.js",
  { tags: ["known-failing"] },
  createTestHandler("language/global-code/decl-lex.js"),
);
