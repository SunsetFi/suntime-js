import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "volatile.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/volatile.js"),
);
