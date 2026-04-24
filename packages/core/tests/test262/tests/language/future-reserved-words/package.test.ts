import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "package.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/package.js"),
);
