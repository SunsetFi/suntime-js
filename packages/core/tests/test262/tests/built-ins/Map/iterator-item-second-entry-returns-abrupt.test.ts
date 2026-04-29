import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterator-item-second-entry-returns-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/iterator-item-second-entry-returns-abrupt.js"),
);
