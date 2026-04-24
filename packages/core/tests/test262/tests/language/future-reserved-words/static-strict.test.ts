import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "static-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/static-strict.js"),
);
