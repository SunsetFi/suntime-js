import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "int.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/int.js"),
);
