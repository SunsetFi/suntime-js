import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "extends.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/extends.js"),
);
