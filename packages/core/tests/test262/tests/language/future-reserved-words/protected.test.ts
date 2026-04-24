import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "protected.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/protected.js"),
);
