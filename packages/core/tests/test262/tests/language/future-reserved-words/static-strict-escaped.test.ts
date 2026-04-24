import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "static-strict-escaped.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/static-strict-escaped.js"),
);
