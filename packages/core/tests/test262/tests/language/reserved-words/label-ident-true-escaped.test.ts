import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "label-ident-true-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/reserved-words/label-ident-true-escaped.js"),
);
