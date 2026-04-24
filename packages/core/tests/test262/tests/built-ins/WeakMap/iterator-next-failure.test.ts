import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterator-next-failure.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakMap/iterator-next-failure.js"),
);
