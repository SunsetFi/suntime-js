import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "builtin.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/revocable/builtin.js"),
);

it(
  "handler-is-revoked-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/revocable/handler-is-revoked-proxy.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/revocable/length.js"),
);

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Proxy/revocable/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/revocable/not-a-constructor.js"),
);

it(
  "proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/revocable/proxy.js"),
);

it(
  "revocation-function-extensible.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/revocable/revocation-function-extensible.js"),
);

it(
  "revocation-function-length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/revocable/revocation-function-length.js"),
);

it(
  "revocation-function-name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/revocable/revocation-function-name.js"),
);

it(
  "revocation-function-not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/revocable/revocation-function-not-a-constructor.js"),
);

it(
  "revocation-function-property-order.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/revocable/revocation-function-property-order.js"),
);

it(
  "revocation-function-prototype.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/revocable/revocation-function-prototype.js"),
);

it(
  "revoke-consecutive-call-returns-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/revocable/revoke-consecutive-call-returns-undefined.js"),
);

it(
  "revoke-returns-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/revocable/revoke-returns-undefined.js"),
);

it(
  "revoke.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/revocable/revoke.js"),
);

it(
  "target-is-revoked-function-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/revocable/target-is-revoked-function-proxy.js"),
);

it(
  "target-is-revoked-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/revocable/target-is-revoked-proxy.js"),
);

it.skip("tco-fn-realm.js", () => {
  /* Ignored Test */
});
