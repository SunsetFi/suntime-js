import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "await-module.js",
  { tags: ["known-passing"] },
  createTestHandler("language/reserved-words/await-module.js"),
);
