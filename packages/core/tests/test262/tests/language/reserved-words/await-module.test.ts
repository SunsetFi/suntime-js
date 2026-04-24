import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "await-module.js",
  { tags: ["known-failing"] },
  createTestHandler("language/reserved-words/await-module.js"),
);
