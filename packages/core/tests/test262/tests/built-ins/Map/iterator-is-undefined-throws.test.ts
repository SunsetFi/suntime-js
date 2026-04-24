import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterator-is-undefined-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/iterator-is-undefined-throws.js"),
);
