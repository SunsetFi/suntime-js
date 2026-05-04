import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "call-parameters.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/defineProperty/call-parameters.js"),
);

it(
  "desc-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/defineProperty/desc-realm.js"),
);

it(
  "null-handler-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/defineProperty/null-handler-realm.js"),
);

it(
  "null-handler.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/defineProperty/null-handler.js"),
);

it(
  "return-boolean-and-define-target.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/defineProperty/return-boolean-and-define-target.js"),
);

it(
  "return-is-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/defineProperty/return-is-abrupt.js"),
);

it(
  "targetdesc-configurable-desc-not-configurable-realm.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Proxy/defineProperty/targetdesc-configurable-desc-not-configurable-realm.js",
  ),
);

it(
  "targetdesc-configurable-desc-not-configurable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Proxy/defineProperty/targetdesc-configurable-desc-not-configurable.js",
  ),
);

it(
  "targetdesc-not-compatible-descriptor-not-configurable-target-realm.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Proxy/defineProperty/targetdesc-not-compatible-descriptor-not-configurable-target-realm.js",
  ),
);

it(
  "targetdesc-not-compatible-descriptor-not-configurable-target.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Proxy/defineProperty/targetdesc-not-compatible-descriptor-not-configurable-target.js",
  ),
);

it(
  "targetdesc-not-compatible-descriptor-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/defineProperty/targetdesc-not-compatible-descriptor-realm.js"),
);

it(
  "targetdesc-not-compatible-descriptor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/defineProperty/targetdesc-not-compatible-descriptor.js"),
);

it(
  "targetdesc-not-configurable-writable-desc-not-writable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Proxy/defineProperty/targetdesc-not-configurable-writable-desc-not-writable.js",
  ),
);

it(
  "targetdesc-undefined-not-configurable-descriptor-realm.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Proxy/defineProperty/targetdesc-undefined-not-configurable-descriptor-realm.js",
  ),
);

it(
  "targetdesc-undefined-not-configurable-descriptor.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Proxy/defineProperty/targetdesc-undefined-not-configurable-descriptor.js",
  ),
);

it(
  "targetdesc-undefined-target-is-not-extensible-realm.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Proxy/defineProperty/targetdesc-undefined-target-is-not-extensible-realm.js",
  ),
);

it(
  "targetdesc-undefined-target-is-not-extensible.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Proxy/defineProperty/targetdesc-undefined-target-is-not-extensible.js",
  ),
);

it(
  "trap-is-missing-target-is-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/defineProperty/trap-is-missing-target-is-proxy.js"),
);

it(
  "trap-is-not-callable-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/defineProperty/trap-is-not-callable-realm.js"),
);

it(
  "trap-is-not-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/defineProperty/trap-is-not-callable.js"),
);

it(
  "trap-is-null-target-is-proxy.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/defineProperty/trap-is-null-target-is-proxy.js"),
);

it(
  "trap-is-undefined-target-is-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/defineProperty/trap-is-undefined-target-is-proxy.js"),
);

it(
  "trap-is-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/defineProperty/trap-is-undefined.js"),
);

it(
  "trap-return-is-false.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/defineProperty/trap-return-is-false.js"),
);
