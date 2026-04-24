import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "private-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/private-strict.js"),
);
