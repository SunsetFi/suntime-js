import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterator-value-failure.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakMap/iterator-value-failure.js"),
);
