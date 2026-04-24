import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "package-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/package-strict.js"),
);
