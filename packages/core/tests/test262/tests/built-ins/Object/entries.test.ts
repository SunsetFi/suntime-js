import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("entries", () => {
  it(
    "exception-during-enumeration.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/entries/exception-during-enumeration.js"),
  );
  it(
    "exception-not-object-coercible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/exception-not-object-coercible.js"),
  );
  it(
    "function-length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/function-length.js"),
  );
  it(
    "function-name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/function-name.js"),
  );
  it(
    "function-property-descriptor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/function-property-descriptor.js"),
  );
  it(
    "getter-adding-key.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/getter-adding-key.js"),
  );
  it(
    "getter-making-future-key-nonenumerable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/entries/getter-making-future-key-nonenumerable.js"),
  );
  it(
    "getter-removing-future-key.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/entries/getter-removing-future-key.js"),
  );
  it(
    "inherited-properties-omitted.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/inherited-properties-omitted.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/not-a-constructor.js"),
  );
  it(
    "observable-operations.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/entries/observable-operations.js"),
  );
  it(
    "order-after-define-property-with-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/order-after-define-property-with-function.js"),
  );
  it(
    "order-after-define-property.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/order-after-define-property.js"),
  );
  it(
    "primitive-booleans.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/primitive-booleans.js"),
  );
  it(
    "primitive-numbers.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/primitive-numbers.js"),
  );
  it(
    "primitive-strings.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/primitive-strings.js"),
  );
  it(
    "primitive-symbols.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/primitive-symbols.js"),
  );
  it(
    "return-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/return-order.js"),
  );
  it(
    "symbols-omitted.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/symbols-omitted.js"),
  );
  it(
    "tamper-with-global-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/tamper-with-global-object.js"),
  );
  it(
    "tamper-with-object-keys.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/entries/tamper-with-object-keys.js"),
  );
});
