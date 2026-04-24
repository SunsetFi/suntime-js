import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "implements0.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/implements0.js"),
);
