import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "char.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/char.js"),
);
