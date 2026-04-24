import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "implements-titlecase.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/implements-titlecase.js"),
);
