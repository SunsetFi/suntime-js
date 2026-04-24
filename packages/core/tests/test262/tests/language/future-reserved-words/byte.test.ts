import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "byte.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/byte.js"),
);
