import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "implement.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/implement.js"),
);
