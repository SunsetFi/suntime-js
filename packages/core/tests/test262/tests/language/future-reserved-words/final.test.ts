import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "final.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/final.js"),
);
