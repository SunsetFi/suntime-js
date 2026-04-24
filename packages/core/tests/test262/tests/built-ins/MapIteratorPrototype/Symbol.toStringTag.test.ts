import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "Symbol.toStringTag.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/MapIteratorPrototype/Symbol.toStringTag.js"),
);
