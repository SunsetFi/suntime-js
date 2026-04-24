import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("construct", () => {
  it(
    "arguments-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/arguments-realm.js"),
  );
  it(
    "call-parameters-new-target.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/call-parameters-new-target.js"),
  );
  it(
    "call-parameters.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/construct/call-parameters.js"),
  );
  it(
    "call-result.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/construct/call-result.js"),
  );
  it(
    "null-handler-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/null-handler-realm.js"),
  );
  it(
    "null-handler.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/null-handler.js"),
  );
  it(
    "return-is-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/construct/return-is-abrupt.js"),
  );
  it(
    "return-not-object-throws-boolean-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/return-not-object-throws-boolean-realm.js"),
  );
  it(
    "return-not-object-throws-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/construct/return-not-object-throws-boolean.js"),
  );
  it(
    "return-not-object-throws-null-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/return-not-object-throws-null-realm.js"),
  );
  it(
    "return-not-object-throws-null.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/construct/return-not-object-throws-null.js"),
  );
  it(
    "return-not-object-throws-number-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/return-not-object-throws-number-realm.js"),
  );
  it(
    "return-not-object-throws-number.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/construct/return-not-object-throws-number.js"),
  );
  it(
    "return-not-object-throws-string-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/return-not-object-throws-string-realm.js"),
  );
  it(
    "return-not-object-throws-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/construct/return-not-object-throws-string.js"),
  );
  it(
    "return-not-object-throws-symbol-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/return-not-object-throws-symbol-realm.js"),
  );
  it(
    "return-not-object-throws-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/construct/return-not-object-throws-symbol.js"),
  );
  it(
    "return-not-object-throws-undefined-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/return-not-object-throws-undefined-realm.js"),
  );
  it(
    "return-not-object-throws-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/construct/return-not-object-throws-undefined.js"),
  );
  it(
    "trap-is-missing-target-is-proxy.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/trap-is-missing-target-is-proxy.js"),
  );
  it(
    "trap-is-not-callable-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/trap-is-not-callable-realm.js"),
  );
  it(
    "trap-is-not-callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Proxy/construct/trap-is-not-callable.js"),
  );
  it(
    "trap-is-null-target-is-proxy.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/trap-is-null-target-is-proxy.js"),
  );
  it(
    "trap-is-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/trap-is-null.js"),
  );
  it(
    "trap-is-undefined-no-property.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/trap-is-undefined-no-property.js"),
  );
  it(
    "trap-is-undefined-proto-from-cross-realm-newtarget.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Proxy/construct/trap-is-undefined-proto-from-cross-realm-newtarget.js",
    ),
  );
  it(
    "trap-is-undefined-proto-from-newtarget-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/trap-is-undefined-proto-from-newtarget-realm.js"),
  );
  it(
    "trap-is-undefined-target-is-proxy.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/trap-is-undefined-target-is-proxy.js"),
  );
  it(
    "trap-is-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/construct/trap-is-undefined.js"),
  );
});
