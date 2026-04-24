import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("seal", () => {
  it(
    "abrupt-completion.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/abrupt-completion.js"),
  );
  it(
    "configurable-attribute-all-own-properties-set-from-true-to-false-property-are-unaltered.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/configurable-attribute-all-own-properties-set-from-true-to-false-property-are-unaltered.js",
    ),
  );
  it(
    "configurable-attribute-own-accessor-property-set-from-true-to-false-property-are-unaltered.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/configurable-attribute-own-accessor-property-set-from-true-to-false-property-are-unaltered.js",
    ),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/length.js"),
  );
  it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Object/seal/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/not-a-constructor.js"),
  );
  it(
    "object-seal-all-own-properties-of-o-are-already-non-configurable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-all-own-properties-of-o-are-already-non-configurable.js",
    ),
  );
  it(
    "object-seal-configurable-attribute-of-own-data-property-of-o-is-set-from-true-to-false-and-other-attributes-of-the-property-are-unaltered.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-configurable-attribute-of-own-data-property-of-o-is-set-from-true-to-false-and-other-attributes-of-the-property-are-unaltered.js",
    ),
  );
  it(
    "object-seal-extensible-of-o-is-set-as-false-even-if-o-has-no-own-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-extensible-of-o-is-set-as-false-even-if-o-has-no-own-property.js",
    ),
  );
  it(
    "object-seal-inherited-accessor-properties-are-ignored.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-inherited-accessor-properties-are-ignored.js",
    ),
  );
  it(
    "object-seal-inherited-data-properties-are-ignored.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/object-seal-inherited-data-properties-are-ignored.js"),
  );
  it(
    "object-seal-is-a-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/object-seal-is-a-function.js"),
  );
  it(
    "object-seal-non-enumerable-own-property-of-o-is-sealed.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-non-enumerable-own-property-of-o-is-sealed.js",
    ),
  );
  it(
    "object-seal-o-is-a-boolean-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/object-seal-o-is-a-boolean-object.js"),
  );
  it(
    "object-seal-o-is-a-date-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/object-seal-o-is-a-date-object.js"),
  );
  it(
    "object-seal-o-is-a-function-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/object-seal-o-is-a-function-object.js"),
  );
  it(
    "object-seal-o-is-a-number-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/object-seal-o-is-a-number-object.js"),
  );
  it(
    "object-seal-o-is-a-reg-exp-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/object-seal-o-is-a-reg-exp-object.js"),
  );
  it(
    "object-seal-o-is-a-string-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/object-seal-o-is-a-string-object.js"),
  );
  it(
    "object-seal-o-is-an-arguments-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/object-seal-o-is-an-arguments-object.js"),
  );
  it(
    "object-seal-o-is-an-array-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/object-seal-o-is-an-array-object.js"),
  );
  it(
    "object-seal-o-is-an-error-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/object-seal-o-is-an-error-object.js"),
  );
  it(
    "object-seal-o-is-frozen-already.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/object-seal-o-is-frozen-already.js"),
  );
  it(
    "object-seal-o-is-sealed-already.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/object-seal-o-is-sealed-already.js"),
  );
  it(
    "object-seal-p-is-own-accessor-property-that-overrides-an-inherited-accessor-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-p-is-own-accessor-property-that-overrides-an-inherited-accessor-property.js",
    ),
  );
  it(
    "object-seal-p-is-own-accessor-property-that-overrides-an-inherited-data-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-p-is-own-accessor-property-that-overrides-an-inherited-data-property.js",
    ),
  );
  it(
    "object-seal-p-is-own-accessor-property.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/object-seal-p-is-own-accessor-property.js"),
  );
  it(
    "object-seal-p-is-own-data-property-that-overrides-an-inherited-accessor-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-p-is-own-data-property-that-overrides-an-inherited-accessor-property.js",
    ),
  );
  it(
    "object-seal-p-is-own-data-property-that-overrides-an-inherited-data-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-p-is-own-data-property-that-overrides-an-inherited-data-property.js",
    ),
  );
  it(
    "object-seal-p-is-own-data-property.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/object-seal-p-is-own-data-property.js"),
  );
  it(
    "object-seal-p-is-own-property-of-a-boolean-object-that-uses-object-s-get-own-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-p-is-own-property-of-a-boolean-object-that-uses-object-s-get-own-property.js",
    ),
  );
  it(
    "object-seal-p-is-own-property-of-a-date-object-that-uses-object-s-get-own-property.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-p-is-own-property-of-a-date-object-that-uses-object-s-get-own-property.js",
    ),
  );
  it(
    "object-seal-p-is-own-property-of-a-function-object-that-uses-object-s-get-own-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-p-is-own-property-of-a-function-object-that-uses-object-s-get-own-property.js",
    ),
  );
  it(
    "object-seal-p-is-own-property-of-a-number-object-that-uses-object-s-get-own-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-p-is-own-property-of-a-number-object-that-uses-object-s-get-own-property.js",
    ),
  );
  it(
    "object-seal-p-is-own-property-of-a-reg-exp-object-that-uses-object-s-get-own-property.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-p-is-own-property-of-a-reg-exp-object-that-uses-object-s-get-own-property.js",
    ),
  );
  it(
    "object-seal-p-is-own-property-of-a-string-object-which-implements-its-own-get-own-property.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-p-is-own-property-of-a-string-object-which-implements-its-own-get-own-property.js",
    ),
  );
  it(
    "object-seal-p-is-own-property-of-an-arguments-object-which-implements-its-own-get-own-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-p-is-own-property-of-an-arguments-object-which-implements-its-own-get-own-property.js",
    ),
  );
  it(
    "object-seal-p-is-own-property-of-an-array-object-that-uses-object-s-get-own-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-p-is-own-property-of-an-array-object-that-uses-object-s-get-own-property.js",
    ),
  );
  it(
    "object-seal-p-is-own-property-of-an-error-object-that-uses-object-s-get-own-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-p-is-own-property-of-an-error-object-that-uses-object-s-get-own-property.js",
    ),
  );
  it(
    "object-seal-returned-object-is-not-extensible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/object-seal-returned-object-is-not-extensible.js"),
  );
  it(
    "object-seal-the-extension-of-o-is-prevented-already.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/object-seal-the-extension-of-o-is-prevented-already.js",
    ),
  );
  it(
    "proxy-no-ownkeys-returned-keys-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/proxy-no-ownkeys-returned-keys-order.js"),
  );
  it(
    "proxy-with-defineProperty-handler.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/proxy-with-defineProperty-handler.js"),
  );
  it(
    "seal-aggregateerror.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-aggregateerror.js"),
  );
  it(
    "seal-arraybuffer.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-arraybuffer.js"),
  );
  it(
    "seal-arrowfunction.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-arrowfunction.js"),
  );
  it(
    "seal-asyncarrowfunction.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-asyncarrowfunction.js"),
  );
  it(
    "seal-asyncfunction.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-asyncfunction.js"),
  );
  it(
    "seal-asyncgeneratorfunction.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-asyncgeneratorfunction.js"),
  );
  it(
    "seal-bigint64array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-bigint64array.js"),
  );
  it(
    "seal-biguint64array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-biguint64array.js"),
  );
  it(
    "seal-boolean-literal.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-boolean-literal.js"),
  );
  it(
    "seal-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-boolean.js"),
  );
  it(
    "seal-dataview.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-dataview.js"),
  );
  it(
    "seal-date.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-date.js"),
  );
  it(
    "seal-error.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-error.js"),
  );
  it(
    "seal-evalerror.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-evalerror.js"),
  );
  it(
    "seal-finalizationregistry.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-finalizationregistry.js"),
  );
  it(
    "seal-float32array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-float32array.js"),
  );
  it(
    "seal-float64array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-float64array.js"),
  );
  it(
    "seal-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-function.js"),
  );
  it(
    "seal-generatorfunction.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-generatorfunction.js"),
  );
  it(
    "seal-infinity.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-infinity.js"),
  );
  it(
    "seal-int16array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-int16array.js"),
  );
  it(
    "seal-int32array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-int32array.js"),
  );
  it(
    "seal-int8array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-int8array.js"),
  );
  it(
    "seal-map.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-map.js"),
  );
  it(
    "seal-nan.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-nan.js"),
  );
  it(
    "seal-null.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-null.js"),
  );
  it(
    "seal-number.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-number.js"),
  );
  it(
    "seal-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-object.js"),
  );
  it(
    "seal-promise.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-promise.js"),
  );
  it(
    "seal-proxy.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-proxy.js"),
  );
  it(
    "seal-rangeerror.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-rangeerror.js"),
  );
  it(
    "seal-referenceerror.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-referenceerror.js"),
  );
  it(
    "seal-regexp.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-regexp.js"),
  );
  it(
    "seal-set.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-set.js"),
  );
  it(
    "seal-sharedarraybuffer.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-sharedarraybuffer.js"),
  );
  it(
    "seal-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-string.js"),
  );
  it(
    "seal-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-symbol.js"),
  );
  it(
    "seal-syntaxerror.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-syntaxerror.js"),
  );
  it(
    "seal-typeerror.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-typeerror.js"),
  );
  it(
    "seal-uint16array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-uint16array.js"),
  );
  it(
    "seal-uint32array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-uint32array.js"),
  );
  it(
    "seal-uint8array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-uint8array.js"),
  );
  it(
    "seal-uint8clampedarray.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-uint8clampedarray.js"),
  );
  it(
    "seal-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-undefined.js"),
  );
  it(
    "seal-urierror.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/seal-urierror.js"),
  );
  it(
    "seal-weakmap.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-weakmap.js"),
  );
  it(
    "seal-weakref.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-weakref.js"),
  );
  it(
    "seal-weakset.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/seal-weakset.js"),
  );
  it(
    "symbol-object-contains-symbol-properties-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/seal/symbol-object-contains-symbol-properties-non-strict.js",
    ),
  );
  it(
    "symbol-object-contains-symbol-properties-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/seal/symbol-object-contains-symbol-properties-strict.js"),
  );
  it(
    "throws-when-false.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/seal/throws-when-false.js"),
  );
});
