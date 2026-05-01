import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/StringIteratorPrototype/next/length.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/StringIteratorPrototype/next/name.js"),
);

it(
  "next-iteration-surrogate-pairs.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/StringIteratorPrototype/next/next-iteration-surrogate-pairs.js"),
);

it(
  "next-iteration.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/StringIteratorPrototype/next/next-iteration.js"),
);

it(
  "next-missing-internal-slots.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/StringIteratorPrototype/next/next-missing-internal-slots.js"),
);
