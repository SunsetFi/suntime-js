import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("next", () => {
  it(
    "does-not-have-mapiterator-internal-slots-map.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/MapIteratorPrototype/next/does-not-have-mapiterator-internal-slots-map.js",
    ),
  );
  it(
    "does-not-have-mapiterator-internal-slots.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/MapIteratorPrototype/next/does-not-have-mapiterator-internal-slots.js",
    ),
  );
  it(
    "iteration-mutable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/MapIteratorPrototype/next/iteration-mutable.js"),
  );
  it(
    "iteration.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/MapIteratorPrototype/next/iteration.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/MapIteratorPrototype/next/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/MapIteratorPrototype/next/name.js"),
  );
  it(
    "this-not-object-throw-entries.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/MapIteratorPrototype/next/this-not-object-throw-entries.js"),
  );
  it(
    "this-not-object-throw-keys.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/MapIteratorPrototype/next/this-not-object-throw-keys.js"),
  );
  it(
    "this-not-object-throw-prototype-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/MapIteratorPrototype/next/this-not-object-throw-prototype-iterator.js",
    ),
  );
  it(
    "this-not-object-throw-values.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/MapIteratorPrototype/next/this-not-object-throw-values.js"),
  );
});
