import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "synchronized.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/synchronized.js"),
);
