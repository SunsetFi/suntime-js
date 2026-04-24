import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("getOwnPropertyDescriptors", () => {
  it(
    "exception-not-object-coercible.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/getOwnPropertyDescriptors/exception-not-object-coercible.js",
    ),
  );
  it(
    "function-length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/function-length.js"),
  );
  it(
    "function-name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/function-name.js"),
  );
  it(
    "function-property-descriptor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/function-property-descriptor.js"),
  );
  it(
    "inherited-properties-omitted.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/inherited-properties-omitted.js"),
  );
  it(
    "normal-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/normal-object.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/not-a-constructor.js"),
  );
  it(
    "observable-operations.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/observable-operations.js"),
  );
  it(
    "order-after-define-property.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/order-after-define-property.js"),
  );
  it(
    "primitive-booleans.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/primitive-booleans.js"),
  );
  it(
    "primitive-numbers.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/primitive-numbers.js"),
  );
  it(
    "primitive-strings.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/primitive-strings.js"),
  );
  it(
    "primitive-symbols.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/primitive-symbols.js"),
  );
  it(
    "proxy-no-ownkeys-returned-keys-order.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/getOwnPropertyDescriptors/proxy-no-ownkeys-returned-keys-order.js",
    ),
  );
  it(
    "proxy-undefined-descriptor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/proxy-undefined-descriptor.js"),
  );
  it(
    "symbols-included.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/symbols-included.js"),
  );
  it(
    "tamper-with-global-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/tamper-with-global-object.js"),
  );
  it(
    "tamper-with-object-keys.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/getOwnPropertyDescriptors/tamper-with-object-keys.js"),
  );
});
