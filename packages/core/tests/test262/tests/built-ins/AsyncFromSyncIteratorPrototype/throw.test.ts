import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("throw", () => {
  it(
    "iterator-result-poisoned-done.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/AsyncFromSyncIteratorPrototype/throw/iterator-result-poisoned-done.js",
    ),
  );
  it(
    "iterator-result-poisoned-value.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/AsyncFromSyncIteratorPrototype/throw/iterator-result-poisoned-value.js",
    ),
  );
  it(
    "iterator-result-rejected-promise-close.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/AsyncFromSyncIteratorPrototype/throw/iterator-result-rejected-promise-close.js",
    ),
  );
  it(
    "iterator-result-unwrap-promise.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/AsyncFromSyncIteratorPrototype/throw/iterator-result-unwrap-promise.js",
    ),
  );
  it(
    "iterator-result.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/throw/iterator-result.js"),
  );
  it(
    "poisoned-get-throw.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/throw/poisoned-get-throw.js"),
  );
  it(
    "poisoned-throw.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/throw/poisoned-throw.js"),
  );
  it(
    "result-object-error.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/throw/result-object-error.js"),
  );
  it(
    "throw-null.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/throw/throw-null.js"),
  );
  it(
    "throw-result-poisoned-wrapper.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/AsyncFromSyncIteratorPrototype/throw/throw-result-poisoned-wrapper.js",
    ),
  );
  it(
    "throw-undefined-get-return-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/AsyncFromSyncIteratorPrototype/throw/throw-undefined-get-return-undefined.js",
    ),
  );
  it(
    "throw-undefined-poisoned-return.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/AsyncFromSyncIteratorPrototype/throw/throw-undefined-poisoned-return.js",
    ),
  );
  it(
    "throw-undefined-return-not-object.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/AsyncFromSyncIteratorPrototype/throw/throw-undefined-return-not-object.js",
    ),
  );
  it(
    "throw-undefined-return-object.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/AsyncFromSyncIteratorPrototype/throw/throw-undefined-return-object.js",
    ),
  );
  it(
    "throw-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/throw/throw-undefined.js"),
  );
});
