import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "implements-uppercase.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/implements-uppercase.js"),
);
