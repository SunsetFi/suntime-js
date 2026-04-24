import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "let-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/let-strict.js"),
);
