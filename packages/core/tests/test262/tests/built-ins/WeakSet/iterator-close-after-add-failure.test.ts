import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterator-close-after-add-failure.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakSet/iterator-close-after-add-failure.js"),
);
