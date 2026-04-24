import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "implement.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/implement.js"),
);
