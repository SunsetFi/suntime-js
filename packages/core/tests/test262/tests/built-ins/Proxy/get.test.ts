import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "accessor-get-is-undefined-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/get/accessor-get-is-undefined-throws.js"),
);

it(
  "call-parameters.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/get/call-parameters.js"),
);

it(
  "not-same-value-configurable-false-writable-false-throws.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Proxy/get/not-same-value-configurable-false-writable-false-throws.js",
  ),
);

it(
  "null-handler.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/get/null-handler.js"),
);

it(
  "return-is-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/get/return-is-abrupt.js"),
);

it(
  "return-trap-result-accessor-property.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/get/return-trap-result-accessor-property.js"),
);

it(
  "return-trap-result-configurable-false-writable-true.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/get/return-trap-result-configurable-false-writable-true.js"),
);

it(
  "return-trap-result-configurable-true-assessor-get-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Proxy/get/return-trap-result-configurable-true-assessor-get-undefined.js",
  ),
);

it(
  "return-trap-result-configurable-true-writable-false.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/get/return-trap-result-configurable-true-writable-false.js"),
);

it(
  "return-trap-result-same-value-configurable-false-writable-false.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Proxy/get/return-trap-result-same-value-configurable-false-writable-false.js",
  ),
);

it(
  "return-trap-result.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/get/return-trap-result.js"),
);

it(
  "trap-is-missing-target-is-proxy.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/get/trap-is-missing-target-is-proxy.js"),
);

it(
  "trap-is-not-callable-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/get/trap-is-not-callable-realm.js"),
);

it(
  "trap-is-not-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/get/trap-is-not-callable.js"),
);

it(
  "trap-is-null-target-is-proxy.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/get/trap-is-null-target-is-proxy.js"),
);

it(
  "trap-is-undefined-no-property.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/get/trap-is-undefined-no-property.js"),
);

it(
  "trap-is-undefined-receiver.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/get/trap-is-undefined-receiver.js"),
);

it(
  "trap-is-undefined-target-is-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/get/trap-is-undefined-target-is-proxy.js"),
);

it(
  "trap-is-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/get/trap-is-undefined.js"),
);
