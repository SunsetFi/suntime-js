import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterator-value-failure.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakSet/iterator-value-failure.js"),
);
