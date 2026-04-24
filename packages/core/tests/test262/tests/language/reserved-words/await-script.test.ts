import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "await-script.js",
  { tags: ["known-passing"] },
  createTestHandler("language/reserved-words/await-script.js"),
);
