import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "boolean.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/boolean.js"),
);
