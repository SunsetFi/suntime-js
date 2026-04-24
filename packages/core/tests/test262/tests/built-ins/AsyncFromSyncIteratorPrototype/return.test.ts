import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("return", () => {
  it(
    "absent-value-not-passed.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/absent-value-not-passed.js"),
  );
  it(
    "iterator-result-poisoned-done.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/AsyncFromSyncIteratorPrototype/return/iterator-result-poisoned-done.js",
    ),
  );
  it(
    "iterator-result-poisoned-value.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/AsyncFromSyncIteratorPrototype/return/iterator-result-poisoned-value.js",
    ),
  );
  it(
    "iterator-result-unwrap-promise.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/AsyncFromSyncIteratorPrototype/return/iterator-result-unwrap-promise.js",
    ),
  );
  it(
    "iterator-result.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/iterator-result.js"),
  );
  it(
    "poisoned-get-return.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/poisoned-get-return.js"),
  );
  it(
    "poisoned-return.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/poisoned-return.js"),
  );
  it(
    "result-object-error.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/result-object-error.js"),
  );
  it(
    "return-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/return-null.js"),
  );
  it(
    "return-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/return-undefined.js"),
  );
});
