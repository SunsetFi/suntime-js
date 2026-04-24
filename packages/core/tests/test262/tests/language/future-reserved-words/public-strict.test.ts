import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "public-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/public-strict.js"),
);
