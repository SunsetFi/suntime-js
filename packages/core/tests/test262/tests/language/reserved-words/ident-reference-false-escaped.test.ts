import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ident-reference-false-escaped.js",
  { tags: ["known-failing"] },
  createTestHandler("language/reserved-words/ident-reference-false-escaped.js"),
);
