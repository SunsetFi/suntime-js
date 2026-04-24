import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "protected-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/protected-strict.js"),
);
