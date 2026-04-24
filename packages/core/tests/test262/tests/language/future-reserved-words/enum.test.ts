import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "enum.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/enum.js"),
);
