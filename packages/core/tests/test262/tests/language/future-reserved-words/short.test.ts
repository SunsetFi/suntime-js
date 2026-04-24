import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "short.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/short.js"),
);
