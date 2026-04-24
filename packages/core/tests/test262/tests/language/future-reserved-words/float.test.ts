import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "float.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/float.js"),
);
