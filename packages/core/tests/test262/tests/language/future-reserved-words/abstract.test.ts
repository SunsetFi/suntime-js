import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "abstract.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/abstract.js"),
);
