import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "implementss.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/implementss.js"),
);
