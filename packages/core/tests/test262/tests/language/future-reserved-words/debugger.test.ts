import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "debugger.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/debugger.js"),
);
