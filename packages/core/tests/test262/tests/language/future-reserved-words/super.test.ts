import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "super.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/super.js"),
);
