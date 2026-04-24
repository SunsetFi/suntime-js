import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("return", () => {
  it(
    "iterator-result-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncGeneratorPrototype/return/iterator-result-prototype.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncGeneratorPrototype/return/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncGeneratorPrototype/return/name.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncGeneratorPrototype/return/prop-desc.js"),
  );
  it(
    "request-queue-order-state-executing.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/AsyncGeneratorPrototype/return/request-queue-order-state-executing.js",
    ),
  );
  it(
    "return-promise.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-promise.js"),
  );
  it(
    "return-state-completed-broken-promise.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/AsyncGeneratorPrototype/return/return-state-completed-broken-promise.js",
    ),
  );
  it(
    "return-state-completed.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-state-completed.js"),
  );
  it(
    "return-suspendedStart-broken-promise.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/AsyncGeneratorPrototype/return/return-suspendedStart-broken-promise.js",
    ),
  );
  it(
    "return-suspendedStart-promise.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-suspendedStart-promise.js"),
  );
  it(
    "return-suspendedStart.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-suspendedStart.js"),
  );
  it(
    "return-suspendedYield-broken-promise-try-catch.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/AsyncGeneratorPrototype/return/return-suspendedYield-broken-promise-try-catch.js",
    ),
  );
  it(
    "return-suspendedYield-promise.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-suspendedYield-promise.js"),
  );
  it(
    "return-suspendedYield-try-finally-return.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/AsyncGeneratorPrototype/return/return-suspendedYield-try-finally-return.js",
    ),
  );
  it(
    "return-suspendedYield-try-finally-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/AsyncGeneratorPrototype/return/return-suspendedYield-try-finally-throw.js",
    ),
  );
  it(
    "return-suspendedYield-try-finally.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/AsyncGeneratorPrototype/return/return-suspendedYield-try-finally.js",
    ),
  );
  it(
    "return-suspendedYield.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-suspendedYield.js"),
  );
  it(
    "this-val-not-async-generator.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AsyncGeneratorPrototype/return/this-val-not-async-generator.js"),
  );
  it(
    "this-val-not-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AsyncGeneratorPrototype/return/this-val-not-object.js"),
  );
});
