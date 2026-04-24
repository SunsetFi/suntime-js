import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "private-strict-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/private-strict-escaped.js"),
);
