import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "yield-strict.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/yield-strict.js"),
);
