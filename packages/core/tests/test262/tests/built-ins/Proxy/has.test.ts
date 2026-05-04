import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "call-in-prototype-index.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/has/call-in-prototype-index.js"),
);

it(
  "call-in-prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/has/call-in-prototype.js"),
);

it("call-in.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Proxy/has/call-in.js"));

it(
  "call-object-create.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/has/call-object-create.js"),
);

it(
  "call-with.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/call-with.js"),
);

it(
  "null-handler-using-with.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/null-handler-using-with.js"),
);

it(
  "null-handler.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/null-handler.js"),
);

it(
  "return-false-target-not-extensible-using-with.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/return-false-target-not-extensible-using-with.js"),
);

it(
  "return-false-target-not-extensible.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/return-false-target-not-extensible.js"),
);

it(
  "return-false-target-prop-exists-using-with.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/return-false-target-prop-exists-using-with.js"),
);

it(
  "return-false-target-prop-exists.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/return-false-target-prop-exists.js"),
);

it(
  "return-false-targetdesc-not-configurable-using-with.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/return-false-targetdesc-not-configurable-using-with.js"),
);

it(
  "return-false-targetdesc-not-configurable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/return-false-targetdesc-not-configurable.js"),
);

it(
  "return-is-abrupt-in.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/return-is-abrupt-in.js"),
);

it(
  "return-is-abrupt-with.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/return-is-abrupt-with.js"),
);

it(
  "return-true-target-prop-exists-using-with.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/return-true-target-prop-exists-using-with.js"),
);

it(
  "return-true-target-prop-exists.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/return-true-target-prop-exists.js"),
);

it(
  "return-true-without-same-target-prop.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/return-true-without-same-target-prop.js"),
);

it(
  "trap-is-missing-target-is-proxy.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/has/trap-is-missing-target-is-proxy.js"),
);

it(
  "trap-is-not-callable-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/has/trap-is-not-callable-realm.js"),
);

it(
  "trap-is-not-callable-using-with.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/trap-is-not-callable-using-with.js"),
);

it(
  "trap-is-not-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/trap-is-not-callable.js"),
);

it(
  "trap-is-null-target-is-proxy.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/has/trap-is-null-target-is-proxy.js"),
);

it(
  "trap-is-undefined-target-is-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/has/trap-is-undefined-target-is-proxy.js"),
);

it(
  "trap-is-undefined-using-with.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/has/trap-is-undefined-using-with.js"),
);

it(
  "trap-is-undefined.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/has/trap-is-undefined.js"),
);
