import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "private.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/private.js"),
);
