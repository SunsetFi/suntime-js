import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "interface-strict.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/interface-strict.js"),
);
