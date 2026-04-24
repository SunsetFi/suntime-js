import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("getPrototypeOf", () => {
  it(
    "call-parameters.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/getPrototypeOf/call-parameters.js"),
  );
  it(
    "extensible-target-return-handlerproto.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/getPrototypeOf/extensible-target-return-handlerproto.js"),
  );
  it(
    "instanceof-custom-return-accepted.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/getPrototypeOf/instanceof-custom-return-accepted.js"),
  );
  it(
    "instanceof-target-not-extensible-not-same-proto-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Proxy/getPrototypeOf/instanceof-target-not-extensible-not-same-proto-throws.js",
    ),
  );
  it(
    "not-extensible-not-same-proto-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/getPrototypeOf/not-extensible-not-same-proto-throws.js"),
  );
  it(
    "not-extensible-same-proto.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/getPrototypeOf/not-extensible-same-proto.js"),
  );
  it(
    "null-handler.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/getPrototypeOf/null-handler.js"),
  );
  it(
    "return-is-abrupt.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/getPrototypeOf/return-is-abrupt.js"),
  );
  it(
    "trap-is-missing-target-is-proxy.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/getPrototypeOf/trap-is-missing-target-is-proxy.js"),
  );
  it(
    "trap-is-not-callable-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/getPrototypeOf/trap-is-not-callable-realm.js"),
  );
  it(
    "trap-is-not-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/getPrototypeOf/trap-is-not-callable.js"),
  );
  it(
    "trap-is-null-target-is-proxy.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/getPrototypeOf/trap-is-null-target-is-proxy.js"),
  );
  it(
    "trap-is-undefined-target-is-proxy.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/getPrototypeOf/trap-is-undefined-target-is-proxy.js"),
  );
  it(
    "trap-is-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/getPrototypeOf/trap-is-undefined.js"),
  );
  it(
    "trap-result-neither-object-nor-null-throws-boolean.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Proxy/getPrototypeOf/trap-result-neither-object-nor-null-throws-boolean.js",
    ),
  );
  it(
    "trap-result-neither-object-nor-null-throws-number.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Proxy/getPrototypeOf/trap-result-neither-object-nor-null-throws-number.js",
    ),
  );
  it(
    "trap-result-neither-object-nor-null-throws-string.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Proxy/getPrototypeOf/trap-result-neither-object-nor-null-throws-string.js",
    ),
  );
  it(
    "trap-result-neither-object-nor-null-throws-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Proxy/getPrototypeOf/trap-result-neither-object-nor-null-throws-symbol.js",
    ),
  );
  it(
    "trap-result-neither-object-nor-null-throws-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Proxy/getPrototypeOf/trap-result-neither-object-nor-null-throws-undefined.js",
    ),
  );
});
