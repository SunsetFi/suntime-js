import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "call-parameters.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/preventExtensions/call-parameters.js"),
);

it(
  "null-handler.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/preventExtensions/null-handler.js"),
);

it(
  "return-false.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/preventExtensions/return-false.js"),
);

it(
  "return-is-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/preventExtensions/return-is-abrupt.js"),
);

it(
  "return-true-target-is-extensible.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/preventExtensions/return-true-target-is-extensible.js"),
);

it(
  "return-true-target-is-not-extensible.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/preventExtensions/return-true-target-is-not-extensible.js"),
);

it(
  "trap-is-missing-target-is-proxy.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/preventExtensions/trap-is-missing-target-is-proxy.js"),
);

it(
  "trap-is-not-callable-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/preventExtensions/trap-is-not-callable-realm.js"),
);

it(
  "trap-is-not-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/preventExtensions/trap-is-not-callable.js"),
);

it(
  "trap-is-null-target-is-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/preventExtensions/trap-is-null-target-is-proxy.js"),
);

it(
  "trap-is-undefined-target-is-proxy.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/preventExtensions/trap-is-undefined-target-is-proxy.js"),
);

it(
  "trap-is-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/preventExtensions/trap-is-undefined.js"),
);
