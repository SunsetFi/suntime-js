import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterator-value-failure.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/iterator-value-failure.js"),
);
