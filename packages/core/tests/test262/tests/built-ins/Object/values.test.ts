import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "exception-during-enumeration.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/values/exception-during-enumeration.js"),
);

it(
  "exception-not-object-coercible.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/exception-not-object-coercible.js"),
);

it(
  "function-length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/function-length.js"),
);

it(
  "function-name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/function-name.js"),
);

it(
  "function-property-descriptor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/function-property-descriptor.js"),
);

it(
  "getter-adding-key.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/getter-adding-key.js"),
);

it(
  "getter-making-future-key-nonenumerable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/values/getter-making-future-key-nonenumerable.js"),
);

it(
  "getter-removing-future-key.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/values/getter-removing-future-key.js"),
);

it(
  "inherited-properties-omitted.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/inherited-properties-omitted.js"),
);

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/not-a-constructor.js"),
);

it(
  "observable-operations.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/values/observable-operations.js"),
);

it(
  "order-after-define-property.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/order-after-define-property.js"),
);

it(
  "primitive-booleans.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/primitive-booleans.js"),
);

it(
  "primitive-numbers.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/primitive-numbers.js"),
);

it(
  "primitive-strings.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/primitive-strings.js"),
);

it(
  "primitive-symbols.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/primitive-symbols.js"),
);

it(
  "return-order.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/return-order.js"),
);

it(
  "symbols-omitted.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/symbols-omitted.js"),
);

it(
  "tamper-with-global-object.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/tamper-with-global-object.js"),
);

it(
  "tamper-with-object-keys.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/values/tamper-with-object-keys.js"),
);
