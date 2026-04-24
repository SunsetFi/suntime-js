import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "transient.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/transient.js"),
);
