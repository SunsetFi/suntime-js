import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "public-strict-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/public-strict-escaped.js"),
);
