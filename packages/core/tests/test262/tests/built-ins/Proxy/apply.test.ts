import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "arguments-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/apply/arguments-realm.js"),
);

it(
  "call-parameters.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/apply/call-parameters.js"),
);

it(
  "call-result.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/apply/call-result.js"),
);

it(
  "null-handler-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/apply/null-handler-realm.js"),
);

it(
  "null-handler.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/apply/null-handler.js"),
);

it(
  "return-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/apply/return-abrupt.js"),
);

it(
  "trap-is-missing-target-is-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/apply/trap-is-missing-target-is-proxy.js"),
);

it(
  "trap-is-not-callable-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/apply/trap-is-not-callable-realm.js"),
);

it(
  "trap-is-not-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/apply/trap-is-not-callable.js"),
);

it(
  "trap-is-null-target-is-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/apply/trap-is-null-target-is-proxy.js"),
);

it(
  "trap-is-null.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/apply/trap-is-null.js"),
);

it(
  "trap-is-undefined-no-property.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/apply/trap-is-undefined-no-property.js"),
);

it(
  "trap-is-undefined-target-is-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/apply/trap-is-undefined-target-is-proxy.js"),
);

it(
  "trap-is-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/apply/trap-is-undefined.js"),
);
