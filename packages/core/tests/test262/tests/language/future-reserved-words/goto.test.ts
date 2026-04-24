import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "goto.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/goto.js"),
);
