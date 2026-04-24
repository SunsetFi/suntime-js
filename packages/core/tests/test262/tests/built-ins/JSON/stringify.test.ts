import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("stringify", () => {
  it(
    "builtin.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/builtin.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/length.js"),
  );
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/JSON/stringify/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/prop-desc.js"),
  );
  it(
    "property-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/property-order.js"),
  );
  it(
    "replacer-array-abrupt.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-array-abrupt.js"),
  );
  it(
    "replacer-array-duplicates.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-array-duplicates.js"),
  );
  it(
    "replacer-array-empty.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-array-empty.js"),
  );
  it(
    "replacer-array-number-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-array-number-object.js"),
  );
  it(
    "replacer-array-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-array-number.js"),
  );
  it(
    "replacer-array-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-array-order.js"),
  );
  it(
    "replacer-array-proxy-revoked-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-array-proxy-revoked-realm.js"),
  );
  it(
    "replacer-array-proxy-revoked.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-array-proxy-revoked.js"),
  );
  it(
    "replacer-array-proxy.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-array-proxy.js"),
  );
  it(
    "replacer-array-string-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-array-string-object.js"),
  );
  it(
    "replacer-array-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-array-undefined.js"),
  );
  it(
    "replacer-array-wrong-type.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-array-wrong-type.js"),
  );
  it(
    "replacer-function-abrupt.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-function-abrupt.js"),
  );
  it(
    "replacer-function-arguments.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-function-arguments.js"),
  );
  it(
    "replacer-function-array-circular.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-function-array-circular.js"),
  );
  it(
    "replacer-function-object-circular.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-function-object-circular.js"),
  );
  it(
    "replacer-function-object-deleted-property.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-function-object-deleted-property.js"),
  );
  it(
    "replacer-function-result-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-function-result-undefined.js"),
  );
  it(
    "replacer-function-result.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-function-result.js"),
  );
  it(
    "replacer-function-tojson.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-function-tojson.js"),
  );
  it(
    "replacer-function-wrapper.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-function-wrapper.js"),
  );
  it(
    "replacer-wrong-type.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/replacer-wrong-type.js"),
  );
  it(
    "space-number-float.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/space-number-float.js"),
  );
  it(
    "space-number-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/space-number-object.js"),
  );
  it(
    "space-number-range.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/space-number-range.js"),
  );
  it(
    "space-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/space-number.js"),
  );
  it(
    "space-string-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/space-string-object.js"),
  );
  it(
    "space-string-range.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/space-string-range.js"),
  );
  it(
    "space-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/space-string.js"),
  );
  it(
    "space-wrong-type.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/space-wrong-type.js"),
  );
  it(
    "value-array-abrupt.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-array-abrupt.js"),
  );
  it(
    "value-array-circular.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-array-circular.js"),
  );
  it(
    "value-array-proxy-revoked.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-array-proxy-revoked.js"),
  );
  it(
    "value-array-proxy.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-array-proxy.js"),
  );
  it(
    "value-bigint-cross-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-bigint-cross-realm.js"),
  );
  it(
    "value-bigint-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-bigint-order.js"),
  );
  it(
    "value-bigint-replacer.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-bigint-replacer.js"),
  );
  it(
    "value-bigint-tojson-receiver.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-bigint-tojson-receiver.js"),
  );
  it(
    "value-bigint-tojson.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-bigint-tojson.js"),
  );
  it(
    "value-bigint.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-bigint.js"),
  );
  it(
    "value-boolean-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-boolean-object.js"),
  );
  it(
    "value-function.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-function.js"),
  );
  it(
    "value-number-negative-zero.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-number-negative-zero.js"),
  );
  it(
    "value-number-non-finite.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-number-non-finite.js"),
  );
  it(
    "value-number-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-number-object.js"),
  );
  it(
    "value-object-abrupt.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-object-abrupt.js"),
  );
  it(
    "value-object-circular.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-object-circular.js"),
  );
  it(
    "value-object-proxy-revoked.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-object-proxy-revoked.js"),
  );
  it(
    "value-object-proxy.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-object-proxy.js"),
  );
  it(
    "value-primitive-top-level.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-primitive-top-level.js"),
  );
  it(
    "value-string-escape-ascii.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-string-escape-ascii.js"),
  );
  it(
    "value-string-escape-unicode.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-string-escape-unicode.js"),
  );
  it(
    "value-string-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-string-object.js"),
  );
  it(
    "value-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-symbol.js"),
  );
  it(
    "value-tojson-abrupt.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-tojson-abrupt.js"),
  );
  it(
    "value-tojson-arguments.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-tojson-arguments.js"),
  );
  it(
    "value-tojson-array-circular.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-tojson-array-circular.js"),
  );
  it(
    "value-tojson-not-function.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-tojson-not-function.js"),
  );
  it(
    "value-tojson-object-circular.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-tojson-object-circular.js"),
  );
  it(
    "value-tojson-result.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/stringify/value-tojson-result.js"),
  );
});
