import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterator-close-failure-after-set-failure.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Map/iterator-close-failure-after-set-failure.js"),
);
