import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ident-name-keyword-memberexpr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/reserved-words/ident-name-keyword-memberexpr.js"),
);
