import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("ownKeys", () => {
  it(
    "call-parameters-object-getownpropertynames.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/call-parameters-object-getownpropertynames.js"),
  );
  it(
    "call-parameters-object-getownpropertysymbols.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/call-parameters-object-getownpropertysymbols.js"),
  );
  it(
    "call-parameters-object-keys.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/call-parameters-object-keys.js"),
  );
  it(
    "extensible-return-trap-result-absent-not-configurable-keys.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Proxy/ownKeys/extensible-return-trap-result-absent-not-configurable-keys.js",
    ),
  );
  it(
    "extensible-return-trap-result.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/extensible-return-trap-result.js"),
  );
  it(
    "not-extensible-missing-keys-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/not-extensible-missing-keys-throws.js"),
  );
  it(
    "not-extensible-new-keys-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/not-extensible-new-keys-throws.js"),
  );
  it(
    "not-extensible-return-keys.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/not-extensible-return-keys.js"),
  );
  it(
    "null-handler.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/ownKeys/null-handler.js"),
  );
  it(
    "return-all-non-configurable-keys.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/return-all-non-configurable-keys.js"),
  );
  it(
    "return-duplicate-entries-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/return-duplicate-entries-throws.js"),
  );
  it(
    "return-duplicate-symbol-entries-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/return-duplicate-symbol-entries-throws.js"),
  );
  it(
    "return-is-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/return-is-abrupt.js"),
  );
  it(
    "return-not-list-object-throws-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/ownKeys/return-not-list-object-throws-realm.js"),
  );
  it(
    "return-not-list-object-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/return-not-list-object-throws.js"),
  );
  it(
    "return-type-throws-array.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/return-type-throws-array.js"),
  );
  it(
    "return-type-throws-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/return-type-throws-boolean.js"),
  );
  it(
    "return-type-throws-null.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/return-type-throws-null.js"),
  );
  it(
    "return-type-throws-number.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/return-type-throws-number.js"),
  );
  it(
    "return-type-throws-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/return-type-throws-object.js"),
  );
  it(
    "return-type-throws-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/return-type-throws-undefined.js"),
  );
  it(
    "trap-is-missing-target-is-proxy.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/ownKeys/trap-is-missing-target-is-proxy.js"),
  );
  it(
    "trap-is-not-callable-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/ownKeys/trap-is-not-callable-realm.js"),
  );
  it(
    "trap-is-not-callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/trap-is-not-callable.js"),
  );
  it(
    "trap-is-null-target-is-proxy.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/trap-is-null-target-is-proxy.js"),
  );
  it(
    "trap-is-undefined-target-is-proxy.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/trap-is-undefined-target-is-proxy.js"),
  );
  it(
    "trap-is-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/ownKeys/trap-is-undefined.js"),
  );
});
