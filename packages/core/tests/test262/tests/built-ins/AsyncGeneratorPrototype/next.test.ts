import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterator-result-prototype.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncGeneratorPrototype/next/iterator-result-prototype.js"),
);

it(
  "length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncGeneratorPrototype/next/length.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncGeneratorPrototype/next/name.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncGeneratorPrototype/next/prop-desc.js"),
);

it(
  "request-queue-await-order.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncGeneratorPrototype/next/request-queue-await-order.js"),
);

it(
  "request-queue-order-state-executing.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/AsyncGeneratorPrototype/next/request-queue-order-state-executing.js",
  ),
);

it(
  "request-queue-order.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncGeneratorPrototype/next/request-queue-order.js"),
);

it(
  "request-queue-promise-resolve-order.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/AsyncGeneratorPrototype/next/request-queue-promise-resolve-order.js",
  ),
);

it(
  "return-promise.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncGeneratorPrototype/next/return-promise.js"),
);

it(
  "this-val-not-async-generator.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncGeneratorPrototype/next/this-val-not-async-generator.js"),
);

it(
  "this-val-not-object.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncGeneratorPrototype/next/this-val-not-object.js"),
);
