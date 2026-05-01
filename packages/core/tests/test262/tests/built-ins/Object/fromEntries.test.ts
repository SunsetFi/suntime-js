import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "empty-iterable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/empty-iterable.js"),
);

it(
  "evaluation-order.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/evaluation-order.js"),
);

it(
  "iterator-closed-for-null-entry.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/iterator-closed-for-null-entry.js"),
);

it(
  "iterator-closed-for-string-entry.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/iterator-closed-for-string-entry.js"),
);

it(
  "iterator-closed-for-throwing-entry-key-accessor.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Object/fromEntries/iterator-closed-for-throwing-entry-key-accessor.js",
  ),
);

it(
  "iterator-closed-for-throwing-entry-key-tostring.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Object/fromEntries/iterator-closed-for-throwing-entry-key-tostring.js",
  ),
);

it(
  "iterator-closed-for-throwing-entry-value-accessor.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Object/fromEntries/iterator-closed-for-throwing-entry-value-accessor.js",
  ),
);

it(
  "iterator-not-closed-for-next-returning-non-object.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Object/fromEntries/iterator-not-closed-for-next-returning-non-object.js",
  ),
);

it(
  "iterator-not-closed-for-throwing-done-accessor.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Object/fromEntries/iterator-not-closed-for-throwing-done-accessor.js",
  ),
);

it(
  "iterator-not-closed-for-throwing-next.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/iterator-not-closed-for-throwing-next.js"),
);

it(
  "iterator-not-closed-for-uncallable-next.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/iterator-not-closed-for-uncallable-next.js"),
);

it(
  "key-order.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/key-order.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/length.js"),
);

it(
  "name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/name.js"),
);

it(
  "not-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/not-a-constructor.js"),
);

it(
  "prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/prototype.js"),
);

it(
  "requires-argument.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/requires-argument.js"),
);

it(
  "simple-properties.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/simple-properties.js"),
);

it(
  "string-entry-object-succeeds.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/string-entry-object-succeeds.js"),
);

it(
  "string-entry-primitive-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/string-entry-primitive-throws.js"),
);

it(
  "string-entry-string-object-succeeds.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/string-entry-string-object-succeeds.js"),
);

it(
  "supports-symbols.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/supports-symbols.js"),
);

it(
  "to-property-key.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/to-property-key.js"),
);

it(
  "uses-define-semantics.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/uses-define-semantics.js"),
);

it(
  "uses-keys-not-iterator.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/fromEntries/uses-keys-not-iterator.js"),
);
