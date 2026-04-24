import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "let-strict-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/let-strict-escaped.js"),
);
