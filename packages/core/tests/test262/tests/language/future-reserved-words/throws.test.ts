import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "throws.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/throws.js"),
);
