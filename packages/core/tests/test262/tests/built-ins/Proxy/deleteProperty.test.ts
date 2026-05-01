import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "boolean-trap-result-boolean-false.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/boolean-trap-result-boolean-false.js"),
);

it(
  "boolean-trap-result-boolean-true.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/boolean-trap-result-boolean-true.js"),
);

it(
  "call-parameters.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/call-parameters.js"),
);

it(
  "null-handler.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/null-handler.js"),
);

it(
  "return-false-not-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/return-false-not-strict.js"),
);

it(
  "return-false-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/return-false-strict.js"),
);

it(
  "return-is-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/return-is-abrupt.js"),
);

it(
  "targetdesc-is-configurable-target-is-not-extensible.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Proxy/deleteProperty/targetdesc-is-configurable-target-is-not-extensible.js",
  ),
);

it(
  "targetdesc-is-not-configurable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/targetdesc-is-not-configurable.js"),
);

it(
  "targetdesc-is-undefined-return-true.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/targetdesc-is-undefined-return-true.js"),
);

it(
  "trap-is-missing-target-is-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/trap-is-missing-target-is-proxy.js"),
);

it(
  "trap-is-not-callable-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/trap-is-not-callable-realm.js"),
);

it(
  "trap-is-not-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/trap-is-not-callable.js"),
);

it(
  "trap-is-null-target-is-proxy.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/trap-is-null-target-is-proxy.js"),
);

it(
  "trap-is-undefined-not-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/trap-is-undefined-not-strict.js"),
);

it(
  "trap-is-undefined-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/trap-is-undefined-strict.js"),
);

it(
  "trap-is-undefined-target-is-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/deleteProperty/trap-is-undefined-target-is-proxy.js"),
);
