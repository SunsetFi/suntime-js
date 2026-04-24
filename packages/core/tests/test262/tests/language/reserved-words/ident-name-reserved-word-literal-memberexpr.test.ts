import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ident-name-reserved-word-literal-memberexpr.js",
  { tags: ["known-failing"] },
  createTestHandler("language/reserved-words/ident-name-reserved-word-literal-memberexpr.js"),
);
