import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "absent-value-not-passed.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/next/absent-value-not-passed.js"),
);

it(
  "for-await-iterator-next-rejected-promise-close.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/AsyncFromSyncIteratorPrototype/next/for-await-iterator-next-rejected-promise-close.js",
  ),
);

it(
  "for-await-next-rejected-promise-close.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/AsyncFromSyncIteratorPrototype/next/for-await-next-rejected-promise-close.js",
  ),
);

it(
  "iterator-result-poisoned-done.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/AsyncFromSyncIteratorPrototype/next/iterator-result-poisoned-done.js",
  ),
);

it(
  "iterator-result-poisoned-value.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/AsyncFromSyncIteratorPrototype/next/iterator-result-poisoned-value.js",
  ),
);

it(
  "iterator-result-poisoned-wrapper.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/AsyncFromSyncIteratorPrototype/next/iterator-result-poisoned-wrapper.js",
  ),
);

it(
  "iterator-result-prototype.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/next/iterator-result-prototype.js"),
);

it(
  "iterator-result-rejected.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/next/iterator-result-rejected.js"),
);

it(
  "iterator-result-unwrap-promise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/AsyncFromSyncIteratorPrototype/next/iterator-result-unwrap-promise.js",
  ),
);

it(
  "next-result-poisoned-wrapper.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/AsyncFromSyncIteratorPrototype/next/next-result-poisoned-wrapper.js",
  ),
);

it(
  "return-promise.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/next/return-promise.js"),
);

it(
  "yield-iterator-next-rejected-promise-close.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/AsyncFromSyncIteratorPrototype/next/yield-iterator-next-rejected-promise-close.js",
  ),
);

it(
  "yield-next-rejected-promise-close.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/AsyncFromSyncIteratorPrototype/next/yield-next-rejected-promise-close.js",
  ),
);
