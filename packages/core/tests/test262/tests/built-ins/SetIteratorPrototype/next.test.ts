import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "does-not-have-mapiterator-internal-slots-set.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/SetIteratorPrototype/next/does-not-have-mapiterator-internal-slots-set.js",
  ),
);

it(
  "does-not-have-mapiterator-internal-slots.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/SetIteratorPrototype/next/does-not-have-mapiterator-internal-slots.js",
  ),
);

it(
  "iteration-mutable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/SetIteratorPrototype/next/iteration-mutable.js"),
);

it(
  "iteration.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/SetIteratorPrototype/next/iteration.js"),
);

it(
  "length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/SetIteratorPrototype/next/length.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/SetIteratorPrototype/next/name.js"),
);

it(
  "this-not-object-throw-entries.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/SetIteratorPrototype/next/this-not-object-throw-entries.js"),
);

it(
  "this-not-object-throw-keys.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/SetIteratorPrototype/next/this-not-object-throw-keys.js"),
);

it(
  "this-not-object-throw-prototype-iterator.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/SetIteratorPrototype/next/this-not-object-throw-prototype-iterator.js",
  ),
);

it(
  "this-not-object-throw-values.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/SetIteratorPrototype/next/this-not-object-throw-values.js"),
);
