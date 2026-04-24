import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "const.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/const.js"),
);
