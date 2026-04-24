import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterator-items-are-not-object-close-iterator.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Map/iterator-items-are-not-object-close-iterator.js"),
);
