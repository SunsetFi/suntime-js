import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "interface.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/interface.js"),
);
