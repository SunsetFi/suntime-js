import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterator-close-after-set-failure.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/iterator-close-after-set-failure.js"),
);
