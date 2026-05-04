import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "the-initial-value-of-errorprototypemessage-is-the-empty-string.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Error/the-initial-value-of-errorprototypemessage-is-the-empty-string.js",
  ),
);
