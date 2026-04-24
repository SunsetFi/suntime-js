import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("setPrototypeOf", () => {
  it(
    "call-parameters.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/setPrototypeOf/call-parameters.js"),
  );
  it(
    "internals-call-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/setPrototypeOf/internals-call-order.js"),
  );
  it(
    "not-extensible-target-not-same-target-prototype.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Proxy/setPrototypeOf/not-extensible-target-not-same-target-prototype.js",
    ),
  );
  it(
    "not-extensible-target-same-target-prototype.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Proxy/setPrototypeOf/not-extensible-target-same-target-prototype.js",
    ),
  );
  it(
    "null-handler.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/setPrototypeOf/null-handler.js"),
  );
  it(
    "return-abrupt-from-get-trap.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/setPrototypeOf/return-abrupt-from-get-trap.js"),
  );
  it(
    "return-abrupt-from-isextensible-target.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/setPrototypeOf/return-abrupt-from-isextensible-target.js"),
  );
  it(
    "return-abrupt-from-target-getprototypeof.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/setPrototypeOf/return-abrupt-from-target-getprototypeof.js"),
  );
  it(
    "return-abrupt-from-trap.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/setPrototypeOf/return-abrupt-from-trap.js"),
  );
  it(
    "toboolean-trap-result-false.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/setPrototypeOf/toboolean-trap-result-false.js"),
  );
  it(
    "toboolean-trap-result-true-target-is-extensible.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Proxy/setPrototypeOf/toboolean-trap-result-true-target-is-extensible.js",
    ),
  );
  it(
    "trap-is-missing-target-is-proxy.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/setPrototypeOf/trap-is-missing-target-is-proxy.js"),
  );
  it(
    "trap-is-not-callable-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/setPrototypeOf/trap-is-not-callable-realm.js"),
  );
  it(
    "trap-is-not-callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/setPrototypeOf/trap-is-not-callable.js"),
  );
  it(
    "trap-is-null-target-is-proxy.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/setPrototypeOf/trap-is-null-target-is-proxy.js"),
  );
  it(
    "trap-is-undefined-or-null.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/setPrototypeOf/trap-is-undefined-or-null.js"),
  );
  it(
    "trap-is-undefined-target-is-proxy.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/setPrototypeOf/trap-is-undefined-target-is-proxy.js"),
  );
});
