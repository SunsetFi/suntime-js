import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "interface.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/interface.js"),
);
