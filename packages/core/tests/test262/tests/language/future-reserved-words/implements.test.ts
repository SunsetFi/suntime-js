import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "implements.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/implements.js"),
);
