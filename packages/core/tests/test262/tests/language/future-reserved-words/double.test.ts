import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "double.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/double.js"),
);
