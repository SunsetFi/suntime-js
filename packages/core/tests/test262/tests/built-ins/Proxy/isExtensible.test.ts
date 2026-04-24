import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("isExtensible", () => {
  it(
    "call-parameters.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/isExtensible/call-parameters.js"),
  );
  it(
    "null-handler.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/isExtensible/null-handler.js"),
  );
  it(
    "return-is-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/isExtensible/return-is-abrupt.js"),
  );
  it(
    "return-is-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/isExtensible/return-is-boolean.js"),
  );
  it(
    "return-is-different-from-target.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/isExtensible/return-is-different-from-target.js"),
  );
  it(
    "return-same-result-from-target.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/isExtensible/return-same-result-from-target.js"),
  );
  it(
    "trap-is-missing-target-is-proxy.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/isExtensible/trap-is-missing-target-is-proxy.js"),
  );
  it(
    "trap-is-not-callable-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/isExtensible/trap-is-not-callable-realm.js"),
  );
  it(
    "trap-is-not-callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/isExtensible/trap-is-not-callable.js"),
  );
  it(
    "trap-is-null-target-is-proxy.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/isExtensible/trap-is-null-target-is-proxy.js"),
  );
  it(
    "trap-is-undefined-target-is-proxy.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/isExtensible/trap-is-undefined-target-is-proxy.js"),
  );
  it(
    "trap-is-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/isExtensible/trap-is-undefined.js"),
  );
});
