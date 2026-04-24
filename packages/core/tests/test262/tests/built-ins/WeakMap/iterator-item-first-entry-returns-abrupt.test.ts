import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterator-item-first-entry-returns-abrupt.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakMap/iterator-item-first-entry-returns-abrupt.js"),
);
