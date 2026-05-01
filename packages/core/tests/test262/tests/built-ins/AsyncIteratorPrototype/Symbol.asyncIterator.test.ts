import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncIterator/length.js"),
);

it(
  "name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncIterator/name.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncIterator/prop-desc.js"),
);

it(
  "return-val.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncIterator/return-val.js"),
);
