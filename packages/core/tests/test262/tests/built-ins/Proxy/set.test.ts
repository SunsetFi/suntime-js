import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "boolean-trap-result-is-false-boolean-return-false.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/boolean-trap-result-is-false-boolean-return-false.js"),
);

it(
  "boolean-trap-result-is-false-null-return-false.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/boolean-trap-result-is-false-null-return-false.js"),
);

it(
  "boolean-trap-result-is-false-number-return-false.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/boolean-trap-result-is-false-number-return-false.js"),
);

it(
  "boolean-trap-result-is-false-string-return-false.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/boolean-trap-result-is-false-string-return-false.js"),
);

it(
  "boolean-trap-result-is-false-undefined-return-false.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/boolean-trap-result-is-false-undefined-return-false.js"),
);

it(
  "call-parameters-prototype-dunder-proto.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/call-parameters-prototype-dunder-proto.js"),
);

it(
  "call-parameters-prototype-index.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/call-parameters-prototype-index.js"),
);

it(
  "call-parameters-prototype.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/call-parameters-prototype.js"),
);

it(
  "call-parameters.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/call-parameters.js"),
);

it(
  "null-handler.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/set/null-handler.js"),
);

it(
  "return-is-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/return-is-abrupt.js"),
);

it(
  "return-true-target-property-accessor-is-configurable-set-is-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Proxy/set/return-true-target-property-accessor-is-configurable-set-is-undefined.js",
  ),
);

it(
  "return-true-target-property-accessor-is-not-configurable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Proxy/set/return-true-target-property-accessor-is-not-configurable.js",
  ),
);

it(
  "return-true-target-property-is-not-configurable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/return-true-target-property-is-not-configurable.js"),
);

it(
  "return-true-target-property-is-not-writable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/return-true-target-property-is-not-writable.js"),
);

it(
  "target-property-is-accessor-not-configurable-set-is-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Proxy/set/target-property-is-accessor-not-configurable-set-is-undefined.js",
  ),
);

it(
  "target-property-is-not-configurable-not-writable-not-equal-to-v.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Proxy/set/target-property-is-not-configurable-not-writable-not-equal-to-v.js",
  ),
);

it(
  "trap-is-missing-receiver-multiple-calls-index.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/trap-is-missing-receiver-multiple-calls-index.js"),
);

it(
  "trap-is-missing-receiver-multiple-calls.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/trap-is-missing-receiver-multiple-calls.js"),
);

it(
  "trap-is-missing-target-is-proxy.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/set/trap-is-missing-target-is-proxy.js"),
);

it(
  "trap-is-not-callable-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/set/trap-is-not-callable-realm.js"),
);

it(
  "trap-is-not-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/trap-is-not-callable.js"),
);

it(
  "trap-is-null-receiver.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/trap-is-null-receiver.js"),
);

it(
  "trap-is-null-target-is-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/trap-is-null-target-is-proxy.js"),
);

it(
  "trap-is-undefined-no-property.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/trap-is-undefined-no-property.js"),
);

it(
  "trap-is-undefined-target-is-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/trap-is-undefined-target-is-proxy.js"),
);

it(
  "trap-is-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/set/trap-is-undefined.js"),
);
