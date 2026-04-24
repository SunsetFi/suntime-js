import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "native.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/native.js"),
);
