import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.5.3.1_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/String/prototype/S15.5.3.1_A1.js"),
);

it(
  "S15.5.3.1_A2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/String/prototype/S15.5.3.1_A2.js"),
);

it(
  "S15.5.3.1_A3.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/String/prototype/S15.5.3.1_A3.js"),
);

it(
  "S15.5.3.1_A4.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/String/prototype/S15.5.3.1_A4.js"),
);

it(
  "S15.5.4_A1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/prototype/S15.5.4_A1.js"),
);

it(
  "S15.5.4_A2.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/prototype/S15.5.4_A2.js"),
);

it(
  "S15.5.4_A3.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/prototype/S15.5.4_A3.js"),
);

describe("Symbol.iterator", () => {
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/Symbol.iterator/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/Symbol.iterator/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/Symbol.iterator/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/Symbol.iterator/prop-desc.js"),
  );
  it(
    "this-val-non-obj-coercible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/Symbol.iterator/this-val-non-obj-coercible.js"),
  );
  it(
    "this-val-to-str-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/Symbol.iterator/this-val-to-str-err.js"),
  );
});

describe("at", () => {
  it(
    "index-argument-tointeger.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/at/index-argument-tointeger.js"),
  );
  it(
    "index-non-numeric-argument-tointeger-invalid.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/at/index-non-numeric-argument-tointeger-invalid.js",
    ),
  );
  it(
    "index-non-numeric-argument-tointeger.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/at/index-non-numeric-argument-tointeger.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/at/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/at/name.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/at/prop-desc.js"),
  );
  it(
    "return-abrupt-from-this.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/at/return-abrupt-from-this.js"),
  );
  it(
    "returns-code-unit.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/at/returns-code-unit.js"),
  );
  it(
    "returns-item-relative-index.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/at/returns-item-relative-index.js"),
  );
  it(
    "returns-item.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/at/returns-item.js"),
  );
  it(
    "returns-undefined-for-out-of-range-index.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/at/returns-undefined-for-out-of-range-index.js"),
  );
});

describe("charAt", () => {
  it(
    "S15.5.4.4_A1.1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A1.1.js"),
  );
  it(
    "S15.5.4.4_A10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A10.js"),
  );
  it(
    "S15.5.4.4_A11.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A11.js"),
  );
  it(
    "S15.5.4.4_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A1_T1.js"),
  );
  it(
    "S15.5.4.4_A1_T10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A1_T10.js"),
  );
  it(
    "S15.5.4.4_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A1_T2.js"),
  );
  it(
    "S15.5.4.4_A1_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A1_T4.js"),
  );
  it(
    "S15.5.4.4_A1_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A1_T5.js"),
  );
  it(
    "S15.5.4.4_A1_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A1_T6.js"),
  );
  it(
    "S15.5.4.4_A1_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A1_T7.js"),
  );
  it(
    "S15.5.4.4_A1_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A1_T8.js"),
  );
  it(
    "S15.5.4.4_A1_T9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A1_T9.js"),
  );
  it(
    "S15.5.4.4_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A2.js"),
  );
  it(
    "S15.5.4.4_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A3.js"),
  );
  it(
    "S15.5.4.4_A4_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A4_T1.js"),
  );
  it(
    "S15.5.4.4_A4_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A4_T2.js"),
  );
  it(
    "S15.5.4.4_A4_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A4_T3.js"),
  );
  it(
    "S15.5.4.4_A5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A5.js"),
  );
  it(
    "S15.5.4.4_A6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A6.js"),
  );
  it(
    "S15.5.4.4_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A7.js"),
  );
  it(
    "S15.5.4.4_A8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A8.js"),
  );
  it(
    "S15.5.4.4_A9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S15.5.4.4_A9.js"),
  );
  it(
    "S9.4_A1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S9.4_A1.js"),
  );
  it(
    "S9.4_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/S9.4_A2.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/not-a-constructor.js"),
  );
  it(
    "pos-coerce-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/pos-coerce-err.js"),
  );
  it(
    "pos-coerce-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/pos-coerce-string.js"),
  );
  it(
    "pos-rounding.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charAt/pos-rounding.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/charAt/this-value-not-obj-coercible.js"),
  );
});

describe("charCodeAt", () => {
  it(
    "S15.5.4.5_A1.1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A1.1.js"),
  );
  it(
    "S15.5.4.5_A10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A10.js"),
  );
  it(
    "S15.5.4.5_A11.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A11.js"),
  );
  it(
    "S15.5.4.5_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A1_T1.js"),
  );
  it(
    "S15.5.4.5_A1_T10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A1_T10.js"),
  );
  it(
    "S15.5.4.5_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A1_T2.js"),
  );
  it(
    "S15.5.4.5_A1_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A1_T4.js"),
  );
  it(
    "S15.5.4.5_A1_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A1_T5.js"),
  );
  it(
    "S15.5.4.5_A1_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A1_T6.js"),
  );
  it(
    "S15.5.4.5_A1_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A1_T7.js"),
  );
  it(
    "S15.5.4.5_A1_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A1_T8.js"),
  );
  it(
    "S15.5.4.5_A1_T9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A1_T9.js"),
  );
  it(
    "S15.5.4.5_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A2.js"),
  );
  it(
    "S15.5.4.5_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A3.js"),
  );
  it(
    "S15.5.4.5_A4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A4.js"),
  );
  it(
    "S15.5.4.5_A6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A6.js"),
  );
  it(
    "S15.5.4.5_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A7.js"),
  );
  it(
    "S15.5.4.5_A8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A8.js"),
  );
  it(
    "S15.5.4.5_A9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/S15.5.4.5_A9.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/not-a-constructor.js"),
  );
  it(
    "pos-coerce-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/pos-coerce-err.js"),
  );
  it(
    "pos-coerce-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/pos-coerce-string.js"),
  );
  it(
    "pos-rounding.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/pos-rounding.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/charCodeAt/this-value-not-obj-coercible.js"),
  );
});

describe("codePointAt", () => {
  it(
    "codePointAt.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/codePointAt/codePointAt.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/codePointAt/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/codePointAt/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/codePointAt/not-a-constructor.js"),
  );
  it(
    "return-abrupt-from-object-pos-to-integer.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/codePointAt/return-abrupt-from-object-pos-to-integer.js",
    ),
  );
  it(
    "return-abrupt-from-symbol-pos-to-integer.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/codePointAt/return-abrupt-from-symbol-pos-to-integer.js",
    ),
  );
  it(
    "return-abrupt-from-this-as-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/codePointAt/return-abrupt-from-this-as-symbol.js",
    ),
  );
  it(
    "return-abrupt-from-this.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/codePointAt/return-abrupt-from-this.js"),
  );
  it(
    "return-code-unit-coerced-position.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/codePointAt/return-code-unit-coerced-position.js",
    ),
  );
  it(
    "return-first-code-unit.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/codePointAt/return-first-code-unit.js"),
  );
  it(
    "return-single-code-unit.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/codePointAt/return-single-code-unit.js"),
  );
  it(
    "return-utf16-decode.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/codePointAt/return-utf16-decode.js"),
  );
  it(
    "returns-undefined-on-position-equal-or-more-than-size.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/codePointAt/returns-undefined-on-position-equal-or-more-than-size.js",
    ),
  );
  it(
    "returns-undefined-on-position-less-than-zero.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/codePointAt/returns-undefined-on-position-less-than-zero.js",
    ),
  );
  it(
    "this-is-null-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/codePointAt/this-is-null-throws.js"),
  );
  it(
    "this-is-undefined-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/codePointAt/this-is-undefined-throws.js"),
  );
});

describe("concat", () => {
  it(
    "S15.5.4.6_A10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A10.js"),
  );
  it(
    "S15.5.4.6_A11.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A11.js"),
  );
  it(
    "S15.5.4.6_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A1_T1.js"),
  );
  it(
    "S15.5.4.6_A1_T10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A1_T10.js"),
  );
  it(
    "S15.5.4.6_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A1_T2.js"),
  );
  it(
    "S15.5.4.6_A1_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A1_T4.js"),
  );
  it(
    "S15.5.4.6_A1_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A1_T5.js"),
  );
  it(
    "S15.5.4.6_A1_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A1_T6.js"),
  );
  it(
    "S15.5.4.6_A1_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A1_T7.js"),
  );
  it(
    "S15.5.4.6_A1_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A1_T8.js"),
  );
  it(
    "S15.5.4.6_A1_T9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A1_T9.js"),
  );
  it(
    "S15.5.4.6_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A2.js"),
  );
  it(
    "S15.5.4.6_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A3.js"),
  );
  it(
    "S15.5.4.6_A4_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A4_T1.js"),
  );
  it(
    "S15.5.4.6_A4_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A4_T2.js"),
  );
  it(
    "S15.5.4.6_A6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A6.js"),
  );
  it(
    "S15.5.4.6_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A7.js"),
  );
  it(
    "S15.5.4.6_A8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A8.js"),
  );
  it(
    "S15.5.4.6_A9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/S15.5.4.6_A9.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/concat/not-a-constructor.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/concat/this-value-not-obj-coercible.js"),
  );
});

describe("constructor", () => {
  it(
    "S15.5.4.1_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/constructor/S15.5.4.1_A1_T1.js"),
  );
  it(
    "S15.5.4.1_A1_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/constructor/S15.5.4.1_A1_T2.js"),
  );
});

describe("endsWith", () => {
  it(
    "String.prototype.endsWith_Fail.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/endsWith/String.prototype.endsWith_Fail.js"),
  );
  it(
    "String.prototype.endsWith_Fail_2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/endsWith/String.prototype.endsWith_Fail_2.js"),
  );
  it(
    "String.prototype.endsWith_Success.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/endsWith/String.prototype.endsWith_Success.js"),
  );
  it(
    "String.prototype.endsWith_Success_2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/endsWith/String.prototype.endsWith_Success_2.js"),
  );
  it(
    "String.prototype.endsWith_Success_3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/endsWith/String.prototype.endsWith_Success_3.js"),
  );
  it(
    "String.prototype.endsWith_Success_4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/endsWith/String.prototype.endsWith_Success_4.js"),
  );
  it(
    "coerced-values-of-position.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/endsWith/coerced-values-of-position.js"),
  );
  it(
    "endsWith.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/endsWith/endsWith.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/endsWith/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/endsWith/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/endsWith/not-a-constructor.js"),
  );
  it(
    "return-abrupt-from-position-as-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/endsWith/return-abrupt-from-position-as-symbol.js",
    ),
  );
  it(
    "return-abrupt-from-position.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/endsWith/return-abrupt-from-position.js"),
  );
  it(
    "return-abrupt-from-searchstring-as-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/endsWith/return-abrupt-from-searchstring-as-symbol.js",
    ),
  );
  it(
    "return-abrupt-from-searchstring-regexp-test.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/endsWith/return-abrupt-from-searchstring-regexp-test.js",
    ),
  );
  it(
    "return-abrupt-from-searchstring.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/endsWith/return-abrupt-from-searchstring.js"),
  );
  it(
    "return-abrupt-from-this-as-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/endsWith/return-abrupt-from-this-as-symbol.js"),
  );
  it(
    "return-abrupt-from-this.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/endsWith/return-abrupt-from-this.js"),
  );
  it(
    "return-false-if-search-start-is-less-than-zero.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/endsWith/return-false-if-search-start-is-less-than-zero.js",
    ),
  );
  it(
    "return-true-if-searchstring-is-empty.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/endsWith/return-true-if-searchstring-is-empty.js",
    ),
  );
  it(
    "searchstring-found-with-position.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/endsWith/searchstring-found-with-position.js"),
  );
  it(
    "searchstring-found-without-position.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/endsWith/searchstring-found-without-position.js"),
  );
  it(
    "searchstring-is-regexp-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/endsWith/searchstring-is-regexp-throws.js"),
  );
  it(
    "searchstring-not-found-with-position.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/endsWith/searchstring-not-found-with-position.js",
    ),
  );
  it(
    "searchstring-not-found-without-position.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/endsWith/searchstring-not-found-without-position.js",
    ),
  );
  it(
    "this-is-null-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/endsWith/this-is-null-throws.js"),
  );
  it(
    "this-is-undefined-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/endsWith/this-is-undefined-throws.js"),
  );
});

describe("includes", () => {
  it(
    "String.prototype.includes_FailBadLocation.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/includes/String.prototype.includes_FailBadLocation.js",
    ),
  );
  it(
    "String.prototype.includes_FailLocation.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/includes/String.prototype.includes_FailLocation.js",
    ),
  );
  it(
    "String.prototype.includes_FailMissingLetter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/includes/String.prototype.includes_FailMissingLetter.js",
    ),
  );
  it(
    "String.prototype.includes_Success.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/includes/String.prototype.includes_Success.js"),
  );
  it(
    "String.prototype.includes_SuccessNoLocation.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/includes/String.prototype.includes_SuccessNoLocation.js",
    ),
  );
  it(
    "String.prototype.includes_lengthProp.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/includes/String.prototype.includes_lengthProp.js",
    ),
  );
  it(
    "coerced-values-of-position.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/includes/coerced-values-of-position.js"),
  );
  it(
    "includes.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/includes/includes.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/includes/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/includes/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/includes/not-a-constructor.js"),
  );
  it(
    "return-abrupt-from-position-as-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/includes/return-abrupt-from-position-as-symbol.js",
    ),
  );
  it(
    "return-abrupt-from-position.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/includes/return-abrupt-from-position.js"),
  );
  it(
    "return-abrupt-from-searchstring-as-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/includes/return-abrupt-from-searchstring-as-symbol.js",
    ),
  );
  it(
    "return-abrupt-from-searchstring-regexp-test.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/includes/return-abrupt-from-searchstring-regexp-test.js",
    ),
  );
  it(
    "return-abrupt-from-searchstring.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/includes/return-abrupt-from-searchstring.js"),
  );
  it(
    "return-abrupt-from-this-as-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/includes/return-abrupt-from-this-as-symbol.js"),
  );
  it(
    "return-abrupt-from-this.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/includes/return-abrupt-from-this.js"),
  );
  it(
    "return-false-with-out-of-bounds-position.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/includes/return-false-with-out-of-bounds-position.js",
    ),
  );
  it(
    "return-true-if-searchstring-is-empty.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/includes/return-true-if-searchstring-is-empty.js",
    ),
  );
  it(
    "searchstring-found-with-position.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/includes/searchstring-found-with-position.js"),
  );
  it(
    "searchstring-found-without-position.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/includes/searchstring-found-without-position.js"),
  );
  it(
    "searchstring-is-regexp-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/includes/searchstring-is-regexp-throws.js"),
  );
  it(
    "searchstring-not-found-with-position.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/includes/searchstring-not-found-with-position.js",
    ),
  );
  it(
    "searchstring-not-found-without-position.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/includes/searchstring-not-found-without-position.js",
    ),
  );
  it(
    "this-is-null-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/includes/this-is-null-throws.js"),
  );
  it(
    "this-is-undefined-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/includes/this-is-undefined-throws.js"),
  );
});

describe("indexOf", () => {
  it(
    "S15.5.4.7_A10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A10.js"),
  );
  it(
    "S15.5.4.7_A11.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A11.js"),
  );
  it(
    "S15.5.4.7_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A1_T1.js"),
  );
  it(
    "S15.5.4.7_A1_T10.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A1_T10.js"),
  );
  it(
    "S15.5.4.7_A1_T12.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A1_T12.js"),
  );
  it(
    "S15.5.4.7_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A1_T2.js"),
  );
  it(
    "S15.5.4.7_A1_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A1_T4.js"),
  );
  it(
    "S15.5.4.7_A1_T5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A1_T5.js"),
  );
  it(
    "S15.5.4.7_A1_T6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A1_T6.js"),
  );
  it(
    "S15.5.4.7_A1_T7.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A1_T7.js"),
  );
  it(
    "S15.5.4.7_A1_T8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A1_T8.js"),
  );
  it(
    "S15.5.4.7_A1_T9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A1_T9.js"),
  );
  it(
    "S15.5.4.7_A2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A2_T1.js"),
  );
  it(
    "S15.5.4.7_A2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A2_T2.js"),
  );
  it(
    "S15.5.4.7_A2_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A2_T3.js"),
  );
  it(
    "S15.5.4.7_A2_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A2_T4.js"),
  );
  it(
    "S15.5.4.7_A3_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A3_T1.js"),
  );
  it(
    "S15.5.4.7_A3_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A3_T2.js"),
  );
  it(
    "S15.5.4.7_A3_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A3_T3.js"),
  );
  it(
    "S15.5.4.7_A4_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A4_T1.js"),
  );
  it(
    "S15.5.4.7_A4_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A4_T2.js"),
  );
  it(
    "S15.5.4.7_A4_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A4_T3.js"),
  );
  it(
    "S15.5.4.7_A4_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A4_T4.js"),
  );
  it(
    "S15.5.4.7_A4_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A4_T5.js"),
  );
  it(
    "S15.5.4.7_A5_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A5_T1.js"),
  );
  it(
    "S15.5.4.7_A5_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A5_T2.js"),
  );
  it(
    "S15.5.4.7_A5_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A5_T3.js"),
  );
  it(
    "S15.5.4.7_A5_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A5_T4.js"),
  );
  it(
    "S15.5.4.7_A5_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A5_T5.js"),
  );
  it(
    "S15.5.4.7_A5_T6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A5_T6.js"),
  );
  it(
    "S15.5.4.7_A6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A6.js"),
  );
  it(
    "S15.5.4.7_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A7.js"),
  );
  it(
    "S15.5.4.7_A8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A8.js"),
  );
  it(
    "S15.5.4.7_A9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/S15.5.4.7_A9.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/not-a-constructor.js"),
  );
  it(
    "position-tointeger-bigint.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/position-tointeger-bigint.js"),
  );
  it(
    "position-tointeger-errors.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/position-tointeger-errors.js"),
  );
  it(
    "position-tointeger-toprimitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/position-tointeger-toprimitive.js"),
  );
  it(
    "position-tointeger-wrapped-values.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/position-tointeger-wrapped-values.js"),
  );
  it(
    "position-tointeger.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/position-tointeger.js"),
  );
  it(
    "searchstring-tostring-bigint.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/searchstring-tostring-bigint.js"),
  );
  it(
    "searchstring-tostring-errors.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/searchstring-tostring-errors.js"),
  );
  it(
    "searchstring-tostring-toprimitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/searchstring-tostring-toprimitive.js"),
  );
  it(
    "searchstring-tostring-wrapped-values.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/indexOf/searchstring-tostring-wrapped-values.js"),
  );
  it(
    "searchstring-tostring.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/searchstring-tostring.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/indexOf/this-value-not-obj-coercible.js"),
  );
});

describe("isWellFormed", () => {
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/isWellFormed/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/isWellFormed/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/isWellFormed/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/isWellFormed/prop-desc.js"),
  );
  it(
    "return-abrupt-from-this.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/isWellFormed/return-abrupt-from-this.js"),
  );
  it(
    "returns-boolean.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/isWellFormed/returns-boolean.js"),
  );
  it(
    "to-string-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/isWellFormed/to-string-primitive.js"),
  );
  it(
    "to-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/isWellFormed/to-string.js"),
  );
});

describe("lastIndexOf", () => {
  it(
    "S15.5.4.8_A10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A10.js"),
  );
  it(
    "S15.5.4.8_A11.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A11.js"),
  );
  it(
    "S15.5.4.8_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A1_T1.js"),
  );
  it(
    "S15.5.4.8_A1_T10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A1_T10.js"),
  );
  it(
    "S15.5.4.8_A1_T12.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A1_T12.js"),
  );
  it(
    "S15.5.4.8_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A1_T2.js"),
  );
  it(
    "S15.5.4.8_A1_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A1_T4.js"),
  );
  it(
    "S15.5.4.8_A1_T5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A1_T5.js"),
  );
  it(
    "S15.5.4.8_A1_T6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A1_T6.js"),
  );
  it(
    "S15.5.4.8_A1_T7.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A1_T7.js"),
  );
  it(
    "S15.5.4.8_A1_T8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A1_T8.js"),
  );
  it(
    "S15.5.4.8_A1_T9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A1_T9.js"),
  );
  it(
    "S15.5.4.8_A4_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A4_T1.js"),
  );
  it(
    "S15.5.4.8_A4_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A4_T2.js"),
  );
  it(
    "S15.5.4.8_A4_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A4_T3.js"),
  );
  it(
    "S15.5.4.8_A4_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A4_T4.js"),
  );
  it(
    "S15.5.4.8_A4_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A4_T5.js"),
  );
  it(
    "S15.5.4.8_A6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A6.js"),
  );
  it(
    "S15.5.4.8_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A7.js"),
  );
  it(
    "S15.5.4.8_A8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A8.js"),
  );
  it(
    "S15.5.4.8_A9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/S15.5.4.8_A9.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/not-a-constructor.js"),
  );
  it(
    "not-a-substring.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/not-a-substring.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/lastIndexOf/this-value-not-obj-coercible.js"),
  );
});

describe("localeCompare", () => {
  it(
    "15.5.4.9_3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/localeCompare/15.5.4.9_3.js"),
  );
  it(
    "15.5.4.9_CE.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/localeCompare/15.5.4.9_CE.js"),
  );
  it(
    "S15.5.4.9_A10.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/localeCompare/S15.5.4.9_A10.js"),
  );
  it(
    "S15.5.4.9_A11.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/localeCompare/S15.5.4.9_A11.js"),
  );
  it(
    "S15.5.4.9_A1_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/localeCompare/S15.5.4.9_A1_T1.js"),
  );
  it(
    "S15.5.4.9_A1_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/localeCompare/S15.5.4.9_A1_T2.js"),
  );
  it(
    "S15.5.4.9_A6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/localeCompare/S15.5.4.9_A6.js"),
  );
  it(
    "S15.5.4.9_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/localeCompare/S15.5.4.9_A7.js"),
  );
  it(
    "S15.5.4.9_A8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/localeCompare/S15.5.4.9_A8.js"),
  );
  it(
    "S15.5.4.9_A9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/localeCompare/S15.5.4.9_A9.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/localeCompare/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/localeCompare/not-a-constructor.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/localeCompare/this-value-not-obj-coercible.js"),
  );
});

describe("match", () => {
  it(
    "S15.5.4.10_A1_T10.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A1_T10.js"),
  );
  it(
    "S15.5.4.10_A1_T11.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A1_T11.js"),
  );
  it(
    "S15.5.4.10_A1_T12.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A1_T12.js"),
  );
  it(
    "S15.5.4.10_A1_T13.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A1_T13.js"),
  );
  it(
    "S15.5.4.10_A1_T14.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A1_T14.js"),
  );
  it(
    "S15.5.4.10_A1_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A1_T3.js"),
  );
  it(
    "S15.5.4.10_A1_T4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A1_T4.js"),
  );
  it(
    "S15.5.4.10_A1_T5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A1_T5.js"),
  );
  it(
    "S15.5.4.10_A1_T6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A1_T6.js"),
  );
  it(
    "S15.5.4.10_A1_T7.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A1_T7.js"),
  );
  it(
    "S15.5.4.10_A1_T8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A1_T8.js"),
  );
  it(
    "S15.5.4.10_A1_T9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A1_T9.js"),
  );
  it(
    "S15.5.4.10_A2_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T1.js"),
  );
  it(
    "S15.5.4.10_A2_T10.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T10.js"),
  );
  it(
    "S15.5.4.10_A2_T11.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T11.js"),
  );
  it(
    "S15.5.4.10_A2_T12.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T12.js"),
  );
  it(
    "S15.5.4.10_A2_T13.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T13.js"),
  );
  it(
    "S15.5.4.10_A2_T14.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T14.js"),
  );
  it(
    "S15.5.4.10_A2_T15.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T15.js"),
  );
  it(
    "S15.5.4.10_A2_T16.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T16.js"),
  );
  it(
    "S15.5.4.10_A2_T17.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T17.js"),
  );
  it(
    "S15.5.4.10_A2_T18.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T18.js"),
  );
  it(
    "S15.5.4.10_A2_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T2.js"),
  );
  it(
    "S15.5.4.10_A2_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T3.js"),
  );
  it(
    "S15.5.4.10_A2_T4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T4.js"),
  );
  it(
    "S15.5.4.10_A2_T5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T5.js"),
  );
  it(
    "S15.5.4.10_A2_T6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T6.js"),
  );
  it(
    "S15.5.4.10_A2_T7.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T7.js"),
  );
  it(
    "S15.5.4.10_A2_T8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T8.js"),
  );
  it(
    "S15.5.4.10_A2_T9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A2_T9.js"),
  );
  it(
    "S15.5.4.10_A6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A6.js"),
  );
  it(
    "S15.5.4.10_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A7.js"),
  );
  it(
    "S15.5.4.10_A8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A8.js"),
  );
  it(
    "S15.5.4.10_A9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/S15.5.4.10_A9.js"),
  );
  it(
    "cstm-matcher-get-err.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/cstm-matcher-get-err.js"),
  );
  it(
    "cstm-matcher-invocation.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/cstm-matcher-invocation.js"),
  );
  it(
    "cstm-matcher-is-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/cstm-matcher-is-null.js"),
  );
  it(
    "cstm-matcher-on-bigint-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/cstm-matcher-on-bigint-primitive.js"),
  );
  it(
    "cstm-matcher-on-boolean-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/cstm-matcher-on-boolean-primitive.js"),
  );
  it(
    "cstm-matcher-on-number-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/cstm-matcher-on-number-primitive.js"),
  );
  it(
    "cstm-matcher-on-string-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/cstm-matcher-on-string-primitive.js"),
  );
  it(
    "duplicate-named-groups-properties.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/duplicate-named-groups-properties.js"),
  );
  it(
    "duplicate-named-indices-groups-properties.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/match/duplicate-named-indices-groups-properties.js",
    ),
  );
  it(
    "invoke-builtin-match.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/invoke-builtin-match.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/not-a-constructor.js"),
  );
  it(
    "regexp-prototype-match-v-u-flag.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/regexp-prototype-match-v-u-flag.js"),
  );
  it(
    "this-val-bool.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/this-val-bool.js"),
  );
  it(
    "this-val-obj.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/this-val-obj.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/match/this-value-not-obj-coercible.js"),
  );
});

describe("matchAll", () => {
  it(
    "cstm-matchall-on-bigint-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/cstm-matchall-on-bigint-primitive.js"),
  );
  it(
    "cstm-matchall-on-boolean-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/cstm-matchall-on-boolean-primitive.js"),
  );
  it(
    "cstm-matchall-on-number-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/cstm-matchall-on-number-primitive.js"),
  );
  it(
    "cstm-matchall-on-string-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/cstm-matchall-on-string-primitive.js"),
  );
  it(
    "flags-nonglobal-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/flags-nonglobal-throws.js"),
  );
  it(
    "flags-undefined-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/flags-undefined-throws.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/prop-desc.js"),
  );
  it(
    "regexp-get-matchAll-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/regexp-get-matchAll-throws.js"),
  );
  it(
    "regexp-is-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/regexp-is-null.js"),
  );
  it(
    "regexp-is-undefined-or-null-invokes-matchAll.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/matchAll/regexp-is-undefined-or-null-invokes-matchAll.js",
    ),
  );
  it(
    "regexp-is-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/regexp-is-undefined.js"),
  );
  it(
    "regexp-matchAll-invocation.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/regexp-matchAll-invocation.js"),
  );
  it(
    "regexp-matchAll-is-undefined-or-null.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/matchAll/regexp-matchAll-is-undefined-or-null.js",
    ),
  );
  it(
    "regexp-matchAll-not-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/regexp-matchAll-not-callable.js"),
  );
  it(
    "regexp-matchAll-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/regexp-matchAll-throws.js"),
  );
  it(
    "regexp-prototype-get-matchAll-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/matchAll/regexp-prototype-get-matchAll-throws.js",
    ),
  );
  it(
    "regexp-prototype-has-no-matchAll.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/regexp-prototype-has-no-matchAll.js"),
  );
  it(
    "regexp-prototype-matchAll-invocation.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/matchAll/regexp-prototype-matchAll-invocation.js",
    ),
  );
  it(
    "regexp-prototype-matchAll-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/regexp-prototype-matchAll-throws.js"),
  );
  it(
    "regexp-prototype-matchAll-v-u-flag.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/regexp-prototype-matchAll-v-u-flag.js"),
  );
  it(
    "this-val-non-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/this-val-non-obj-coercible.js"),
  );
  it(
    "toString-this-val.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/matchAll/toString-this-val.js"),
  );
});

describe("normalize", () => {
  it(
    "form-is-not-valid-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/normalize/form-is-not-valid-throws.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/normalize/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/normalize/name.js"),
  );
  it(
    "normalize.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/normalize/normalize.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/normalize/not-a-constructor.js"),
  );
  it(
    "return-abrupt-from-form-as-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/normalize/return-abrupt-from-form-as-symbol.js"),
  );
  it(
    "return-abrupt-from-form.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/normalize/return-abrupt-from-form.js"),
  );
  it(
    "return-abrupt-from-this-as-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/normalize/return-abrupt-from-this-as-symbol.js"),
  );
  it(
    "return-abrupt-from-this.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/normalize/return-abrupt-from-this.js"),
  );
  it(
    "return-normalized-string-from-coerced-form.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/normalize/return-normalized-string-from-coerced-form.js",
    ),
  );
  it(
    "return-normalized-string-using-default-parameter.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/normalize/return-normalized-string-using-default-parameter.js",
    ),
  );
  it(
    "return-normalized-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/normalize/return-normalized-string.js"),
  );
  it(
    "this-is-null-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/normalize/this-is-null-throws.js"),
  );
  it(
    "this-is-undefined-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/normalize/this-is-undefined-throws.js"),
  );
});

describe("padEnd", () => {
  it(
    "exception-fill-string-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padEnd/exception-fill-string-symbol.js"),
  );
  it(
    "exception-not-object-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/padEnd/exception-not-object-coercible.js"),
  );
  it(
    "exception-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padEnd/exception-symbol.js"),
  );
  it(
    "fill-string-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padEnd/fill-string-empty.js"),
  );
  it(
    "fill-string-non-strings.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padEnd/fill-string-non-strings.js"),
  );
  it(
    "fill-string-omitted.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padEnd/fill-string-omitted.js"),
  );
  it(
    "function-length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padEnd/function-length.js"),
  );
  it(
    "function-name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padEnd/function-name.js"),
  );
  it(
    "function-property-descriptor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padEnd/function-property-descriptor.js"),
  );
  it(
    "max-length-not-greater-than-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padEnd/max-length-not-greater-than-string.js"),
  );
  it(
    "normal-operation.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padEnd/normal-operation.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padEnd/not-a-constructor.js"),
  );
  it(
    "observable-operations.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padEnd/observable-operations.js"),
  );
});

describe("padStart", () => {
  it(
    "exception-fill-string-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padStart/exception-fill-string-symbol.js"),
  );
  it(
    "exception-not-object-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/padStart/exception-not-object-coercible.js"),
  );
  it(
    "exception-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padStart/exception-symbol.js"),
  );
  it(
    "fill-string-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padStart/fill-string-empty.js"),
  );
  it(
    "fill-string-non-strings.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padStart/fill-string-non-strings.js"),
  );
  it(
    "fill-string-omitted.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padStart/fill-string-omitted.js"),
  );
  it(
    "function-length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padStart/function-length.js"),
  );
  it(
    "function-name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padStart/function-name.js"),
  );
  it(
    "function-property-descriptor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padStart/function-property-descriptor.js"),
  );
  it(
    "max-length-not-greater-than-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padStart/max-length-not-greater-than-string.js"),
  );
  it(
    "normal-operation.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padStart/normal-operation.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padStart/not-a-constructor.js"),
  );
  it(
    "observable-operations.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/padStart/observable-operations.js"),
  );
});

describe("repeat", () => {
  it(
    "count-coerced-to-zero-returns-empty-string.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/repeat/count-coerced-to-zero-returns-empty-string.js",
    ),
  );
  it(
    "count-is-infinity-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/repeat/count-is-infinity-throws.js"),
  );
  it(
    "count-is-zero-returns-empty-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/repeat/count-is-zero-returns-empty-string.js"),
  );
  it(
    "count-less-than-zero-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/repeat/count-less-than-zero-throws.js"),
  );
  it(
    "empty-string-returns-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/repeat/empty-string-returns-empty.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/repeat/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/repeat/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/repeat/not-a-constructor.js"),
  );
  it(
    "repeat-string-n-times.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/repeat/repeat-string-n-times.js"),
  );
  it(
    "repeat.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/repeat/repeat.js"),
  );
  it(
    "return-abrupt-from-count-as-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/repeat/return-abrupt-from-count-as-symbol.js"),
  );
  it(
    "return-abrupt-from-count.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/repeat/return-abrupt-from-count.js"),
  );
  it(
    "return-abrupt-from-this-as-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/repeat/return-abrupt-from-this-as-symbol.js"),
  );
  it(
    "return-abrupt-from-this.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/repeat/return-abrupt-from-this.js"),
  );
  it(
    "this-is-null-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/repeat/this-is-null-throws.js"),
  );
  it(
    "this-is-undefined-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/repeat/this-is-undefined-throws.js"),
  );
});

describe("replace", () => {
  it(
    "15.5.4.11-1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/15.5.4.11-1.js"),
  );
  it(
    "S15.5.4.11_A12.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A12.js"),
  );
  it(
    "S15.5.4.11_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T1.js"),
  );
  it(
    "S15.5.4.11_A1_T10.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T10.js"),
  );
  it(
    "S15.5.4.11_A1_T11.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T11.js"),
  );
  it(
    "S15.5.4.11_A1_T12.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T12.js"),
  );
  it(
    "S15.5.4.11_A1_T13.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T13.js"),
  );
  it(
    "S15.5.4.11_A1_T14.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T14.js"),
  );
  it(
    "S15.5.4.11_A1_T15.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T15.js"),
  );
  it(
    "S15.5.4.11_A1_T16.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T16.js"),
  );
  it(
    "S15.5.4.11_A1_T17.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T17.js"),
  );
  it(
    "S15.5.4.11_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T2.js"),
  );
  it(
    "S15.5.4.11_A1_T4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T4.js"),
  );
  it(
    "S15.5.4.11_A1_T5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T5.js"),
  );
  it(
    "S15.5.4.11_A1_T6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T6.js"),
  );
  it(
    "S15.5.4.11_A1_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T7.js"),
  );
  it(
    "S15.5.4.11_A1_T8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T8.js"),
  );
  it(
    "S15.5.4.11_A1_T9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A1_T9.js"),
  );
  it(
    "S15.5.4.11_A2_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A2_T1.js"),
  );
  it(
    "S15.5.4.11_A2_T10.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A2_T10.js"),
  );
  it(
    "S15.5.4.11_A2_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A2_T2.js"),
  );
  it(
    "S15.5.4.11_A2_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A2_T3.js"),
  );
  it(
    "S15.5.4.11_A2_T4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A2_T4.js"),
  );
  it(
    "S15.5.4.11_A2_T5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A2_T5.js"),
  );
  it(
    "S15.5.4.11_A2_T6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A2_T6.js"),
  );
  it(
    "S15.5.4.11_A2_T7.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A2_T7.js"),
  );
  it(
    "S15.5.4.11_A2_T8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A2_T8.js"),
  );
  it(
    "S15.5.4.11_A2_T9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A2_T9.js"),
  );
  it(
    "S15.5.4.11_A3_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A3_T1.js"),
  );
  it(
    "S15.5.4.11_A3_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A3_T2.js"),
  );
  it(
    "S15.5.4.11_A3_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A3_T3.js"),
  );
  it(
    "S15.5.4.11_A4_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A4_T1.js"),
  );
  it(
    "S15.5.4.11_A4_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A4_T2.js"),
  );
  it(
    "S15.5.4.11_A4_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A4_T3.js"),
  );
  it(
    "S15.5.4.11_A4_T4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A4_T4.js"),
  );
  it(
    "S15.5.4.11_A5_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A5_T1.js"),
  );
  it(
    "S15.5.4.11_A6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A6.js"),
  );
  it(
    "S15.5.4.11_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replace/S15.5.4.11_A7.js"),
  );
  it(
    "cstm-replace-get-err.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/cstm-replace-get-err.js"),
  );
  it(
    "cstm-replace-invocation.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/cstm-replace-invocation.js"),
  );
  it(
    "cstm-replace-is-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/cstm-replace-is-null.js"),
  );
  it(
    "cstm-replace-on-bigint-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/cstm-replace-on-bigint-primitive.js"),
  );
  it(
    "cstm-replace-on-boolean-primitive.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replace/cstm-replace-on-boolean-primitive.js"),
  );
  it(
    "cstm-replace-on-number-primitive.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replace/cstm-replace-on-number-primitive.js"),
  );
  it(
    "cstm-replace-on-string-primitive.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replace/cstm-replace-on-string-primitive.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replace/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replace/not-a-constructor.js"),
  );
  it(
    "regexp-capture-by-index.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/regexp-capture-by-index.js"),
  );
  it(
    "regexp-prototype-replace-v-u-flag.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/regexp-prototype-replace-v-u-flag.js"),
  );
  it(
    "replaceValue-evaluation-order-regexp-object.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/replace/replaceValue-evaluation-order-regexp-object.js",
    ),
  );
  it(
    "replaceValue-evaluation-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replace/replaceValue-evaluation-order.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replace/this-value-not-obj-coercible.js"),
  );
});

describe("replaceAll", () => {
  it(
    "cstm-replaceall-on-bigint-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/replaceAll/cstm-replaceall-on-bigint-primitive.js",
    ),
  );
  it(
    "cstm-replaceall-on-boolean-primitive.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/replaceAll/cstm-replaceall-on-boolean-primitive.js",
    ),
  );
  it(
    "cstm-replaceall-on-number-primitive.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/replaceAll/cstm-replaceall-on-number-primitive.js",
    ),
  );
  it(
    "cstm-replaceall-on-string-primitive.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/replaceAll/cstm-replaceall-on-string-primitive.js",
    ),
  );
  it(
    "getSubstitution-0x0024-0x0024.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/getSubstitution-0x0024-0x0024.js"),
  );
  it(
    "getSubstitution-0x0024-0x0026.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/getSubstitution-0x0024-0x0026.js"),
  );
  it(
    "getSubstitution-0x0024-0x0027.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/getSubstitution-0x0024-0x0027.js"),
  );
  it(
    "getSubstitution-0x0024-0x003C.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/getSubstitution-0x0024-0x003C.js"),
  );
  it(
    "getSubstitution-0x0024-0x0060.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/getSubstitution-0x0024-0x0060.js"),
  );
  it(
    "getSubstitution-0x0024.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/getSubstitution-0x0024.js"),
  );
  it(
    "getSubstitution-0x0024N.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/getSubstitution-0x0024N.js"),
  );
  it(
    "getSubstitution-0x0024NN.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/getSubstitution-0x0024NN.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/not-a-constructor.js"),
  );
  it(
    "replaceAll.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/replaceAll.js"),
  );
  it(
    "replaceValue-call-abrupt.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/replaceValue-call-abrupt.js"),
  );
  it(
    "replaceValue-call-each-match-position.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/replaceAll/replaceValue-call-each-match-position.js",
    ),
  );
  it(
    "replaceValue-call-matching-empty.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/replaceValue-call-matching-empty.js"),
  );
  it(
    "replaceValue-call-skip-no-match.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/replaceValue-call-skip-no-match.js"),
  );
  it(
    "replaceValue-call-tostring-abrupt.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/replaceValue-call-tostring-abrupt.js"),
  );
  it(
    "replaceValue-fn-skip-toString.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/replaceValue-fn-skip-toString.js"),
  );
  it(
    "replaceValue-tostring-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/replaceValue-tostring-abrupt.js"),
  );
  it(
    "replaceValue-value-replaces-string.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/replaceAll/replaceValue-value-replaces-string.js",
    ),
  );
  it(
    "replaceValue-value-tostring.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/replaceValue-value-tostring.js"),
  );
  it(
    "searchValue-empty-string-this-empty-string.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/replaceAll/searchValue-empty-string-this-empty-string.js",
    ),
  );
  it(
    "searchValue-empty-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/searchValue-empty-string.js"),
  );
  it(
    "searchValue-flags-no-g-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/searchValue-flags-no-g-throws.js"),
  );
  it(
    "searchValue-flags-null-undefined-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/replaceAll/searchValue-flags-null-undefined-throws.js",
    ),
  );
  it(
    "searchValue-flags-toString-abrupt.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/searchValue-flags-toString-abrupt.js"),
  );
  it(
    "searchValue-get-flags-abrupt.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/searchValue-get-flags-abrupt.js"),
  );
  it(
    "searchValue-isRegExp-abrupt.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/searchValue-isRegExp-abrupt.js"),
  );
  it(
    "searchValue-replacer-RegExp-call-fn.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/replaceAll/searchValue-replacer-RegExp-call-fn.js",
    ),
  );
  it(
    "searchValue-replacer-RegExp-call.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/searchValue-replacer-RegExp-call.js"),
  );
  it(
    "searchValue-replacer-before-tostring.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/replaceAll/searchValue-replacer-before-tostring.js",
    ),
  );
  it(
    "searchValue-replacer-call-abrupt.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/searchValue-replacer-call-abrupt.js"),
  );
  it(
    "searchValue-replacer-call.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/searchValue-replacer-call.js"),
  );
  it(
    "searchValue-replacer-is-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/searchValue-replacer-is-null.js"),
  );
  it(
    "searchValue-replacer-method-abrupt.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/replaceAll/searchValue-replacer-method-abrupt.js",
    ),
  );
  it(
    "searchValue-tostring-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/searchValue-tostring-abrupt.js"),
  );
  it(
    "searchValue-tostring-regexp.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/searchValue-tostring-regexp.js"),
  );
  it(
    "this-is-null-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/this-is-null-throws.js"),
  );
  it(
    "this-is-undefined-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/this-is-undefined-throws.js"),
  );
  it(
    "this-tostring-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/this-tostring-abrupt.js"),
  );
  it(
    "this-tostring.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/replaceAll/this-tostring.js"),
  );
});

describe("search", () => {
  it(
    "S15.5.4.12_A1.1_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A1.1_T1.js"),
  );
  it(
    "S15.5.4.12_A10.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A10.js"),
  );
  it(
    "S15.5.4.12_A11.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A11.js"),
  );
  it(
    "S15.5.4.12_A1_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A1_T1.js"),
  );
  it(
    "S15.5.4.12_A1_T10.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A1_T10.js"),
  );
  it(
    "S15.5.4.12_A1_T11.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A1_T11.js"),
  );
  it(
    "S15.5.4.12_A1_T12.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A1_T12.js"),
  );
  it(
    "S15.5.4.12_A1_T13.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A1_T13.js"),
  );
  it(
    "S15.5.4.12_A1_T14.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A1_T14.js"),
  );
  it(
    "S15.5.4.12_A1_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A1_T2.js"),
  );
  it(
    "S15.5.4.12_A1_T4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A1_T4.js"),
  );
  it(
    "S15.5.4.12_A1_T5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A1_T5.js"),
  );
  it(
    "S15.5.4.12_A1_T6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A1_T6.js"),
  );
  it(
    "S15.5.4.12_A1_T7.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A1_T7.js"),
  );
  it(
    "S15.5.4.12_A1_T8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A1_T8.js"),
  );
  it(
    "S15.5.4.12_A1_T9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A1_T9.js"),
  );
  it(
    "S15.5.4.12_A2_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A2_T1.js"),
  );
  it(
    "S15.5.4.12_A2_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A2_T2.js"),
  );
  it(
    "S15.5.4.12_A2_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A2_T3.js"),
  );
  it(
    "S15.5.4.12_A2_T4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A2_T4.js"),
  );
  it(
    "S15.5.4.12_A2_T5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A2_T5.js"),
  );
  it(
    "S15.5.4.12_A2_T6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A2_T6.js"),
  );
  it(
    "S15.5.4.12_A2_T7.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A2_T7.js"),
  );
  it(
    "S15.5.4.12_A3_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A3_T1.js"),
  );
  it(
    "S15.5.4.12_A3_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A3_T2.js"),
  );
  it(
    "S15.5.4.12_A6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A6.js"),
  );
  it(
    "S15.5.4.12_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A7.js"),
  );
  it(
    "S15.5.4.12_A8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A8.js"),
  );
  it(
    "S15.5.4.12_A9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/S15.5.4.12_A9.js"),
  );
  it(
    "cstm-search-get-err.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/cstm-search-get-err.js"),
  );
  it(
    "cstm-search-invocation.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/cstm-search-invocation.js"),
  );
  it(
    "cstm-search-is-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/cstm-search-is-null.js"),
  );
  it(
    "cstm-search-on-bigint-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/cstm-search-on-bigint-primitive.js"),
  );
  it(
    "cstm-search-on-boolean-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/cstm-search-on-boolean-primitive.js"),
  );
  it(
    "cstm-search-on-number-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/cstm-search-on-number-primitive.js"),
  );
  it(
    "cstm-search-on-string-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/cstm-search-on-string-primitive.js"),
  );
  it(
    "invoke-builtin-search-searcher-undef.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/invoke-builtin-search-searcher-undef.js"),
  );
  it(
    "invoke-builtin-search.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/invoke-builtin-search.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/not-a-constructor.js"),
  );
  it(
    "regexp-prototype-search-v-flag.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/regexp-prototype-search-v-flag.js"),
  );
  it(
    "regexp-prototype-search-v-u-flag.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/regexp-prototype-search-v-u-flag.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/search/this-value-not-obj-coercible.js"),
  );
});

describe("slice", () => {
  it(
    "S15.5.4.13_A10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A10.js"),
  );
  it(
    "S15.5.4.13_A11.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A11.js"),
  );
  it(
    "S15.5.4.13_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A1_T1.js"),
  );
  it(
    "S15.5.4.13_A1_T10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A1_T10.js"),
  );
  it(
    "S15.5.4.13_A1_T11.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A1_T11.js"),
  );
  it(
    "S15.5.4.13_A1_T12.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A1_T12.js"),
  );
  it(
    "S15.5.4.13_A1_T13.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A1_T13.js"),
  );
  it(
    "S15.5.4.13_A1_T14.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A1_T14.js"),
  );
  it(
    "S15.5.4.13_A1_T15.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A1_T15.js"),
  );
  it(
    "S15.5.4.13_A1_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A1_T2.js"),
  );
  it(
    "S15.5.4.13_A1_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A1_T4.js"),
  );
  it(
    "S15.5.4.13_A1_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A1_T5.js"),
  );
  it(
    "S15.5.4.13_A1_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A1_T6.js"),
  );
  it(
    "S15.5.4.13_A1_T7.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A1_T7.js"),
  );
  it(
    "S15.5.4.13_A1_T8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A1_T8.js"),
  );
  it(
    "S15.5.4.13_A1_T9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A1_T9.js"),
  );
  it(
    "S15.5.4.13_A2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A2_T1.js"),
  );
  it(
    "S15.5.4.13_A2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A2_T2.js"),
  );
  it(
    "S15.5.4.13_A2_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A2_T3.js"),
  );
  it(
    "S15.5.4.13_A2_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A2_T4.js"),
  );
  it(
    "S15.5.4.13_A2_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A2_T5.js"),
  );
  it(
    "S15.5.4.13_A2_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A2_T6.js"),
  );
  it(
    "S15.5.4.13_A2_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A2_T7.js"),
  );
  it(
    "S15.5.4.13_A2_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A2_T8.js"),
  );
  it(
    "S15.5.4.13_A2_T9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A2_T9.js"),
  );
  it(
    "S15.5.4.13_A3_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A3_T1.js"),
  );
  it(
    "S15.5.4.13_A3_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A3_T2.js"),
  );
  it(
    "S15.5.4.13_A3_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A3_T3.js"),
  );
  it(
    "S15.5.4.13_A3_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A3_T4.js"),
  );
  it(
    "S15.5.4.13_A6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A6.js"),
  );
  it(
    "S15.5.4.13_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A7.js"),
  );
  it(
    "S15.5.4.13_A8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A8.js"),
  );
  it(
    "S15.5.4.13_A9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/S15.5.4.13_A9.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/slice/not-a-constructor.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/slice/this-value-not-obj-coercible.js"),
  );
});

describe("split", () => {
  it(
    "argument-is-new-reg-exp-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/argument-is-new-reg-exp-and-instance-is-string-hello.js",
    ),
  );
  it(
    "argument-is-null-and-instance-is-function-call-that-returned-string.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/argument-is-null-and-instance-is-function-call-that-returned-string.js",
    ),
  );
  it(
    "argument-is-reg-exp-a-z-and-instance-is-string-abc.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/argument-is-reg-exp-a-z-and-instance-is-string-abc.js",
    ),
  );
  it(
    "argument-is-regexp-a-z-and-instance-is-string-abc.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/argument-is-regexp-a-z-and-instance-is-string-abc.js",
    ),
  );
  it(
    "argument-is-regexp-and-instance-is-number.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/argument-is-regexp-and-instance-is-number.js",
    ),
  );
  it(
    "argument-is-regexp-d-and-instance-is-string-dfe23iu-34-65.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/argument-is-regexp-d-and-instance-is-string-dfe23iu-34-65.js",
    ),
  );
  it(
    "argument-is-regexp-l-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/argument-is-regexp-l-and-instance-is-string-hello.js",
    ),
  );
  it(
    "argument-is-regexp-reg-exp-d-and-instance-is-string-dfe23iu-34-65.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/argument-is-regexp-reg-exp-d-and-instance-is-string-dfe23iu-34-65.js",
    ),
  );
  it(
    "argument-is-regexp-s-and-instance-is-string-a-b-c-de-f.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/argument-is-regexp-s-and-instance-is-string-a-b-c-de-f.js",
    ),
  );
  it(
    "argument-is-regexp-x-and-instance-is-string-a-b-c-de-f.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/argument-is-regexp-x-and-instance-is-string-a-b-c-de-f.js",
    ),
  );
  it(
    "argument-is-undefined-and-instance-is-string.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/argument-is-undefined-and-instance-is-string.js",
    ),
  );
  it(
    "argument-is-void-0-and-instance-is-string-object-object-have-overrided-to-string-function.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/argument-is-void-0-and-instance-is-string-object-object-have-overrided-to-string-function.js",
    ),
  );
  it(
    "arguments-are-boolean-expression-function-call-and-null-and-instance-is-boolean.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-boolean-expression-function-call-and-null-and-instance-is-boolean.js",
    ),
  );
  it(
    "arguments-are-false-and-true-and-instance-is-object.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-false-and-true-and-instance-is-object.js",
    ),
  );
  it(
    "arguments-are-new-reg-exp-and-0-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-new-reg-exp-and-0-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-new-reg-exp-and-1-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-new-reg-exp-and-1-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-new-reg-exp-and-2-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-new-reg-exp-and-2-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-new-reg-exp-and-3-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-new-reg-exp-and-3-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-new-reg-exp-and-4-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-new-reg-exp-and-4-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-new-reg-exp-and-hi-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-new-reg-exp-and-hi-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-new-reg-exp-and-undefined-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-new-reg-exp-and-undefined-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-new-reg-exp-and-void-0-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-new-reg-exp-and-void-0-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-regexp-l-and-0-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-regexp-l-and-0-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-regexp-l-and-1-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-regexp-l-and-1-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-regexp-l-and-2-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-regexp-l-and-2-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-regexp-l-and-3-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-regexp-l-and-3-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-regexp-l-and-4-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-regexp-l-and-4-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-regexp-l-and-hi-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-regexp-l-and-hi-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-regexp-l-and-undefined-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-regexp-l-and-undefined-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-regexp-l-and-void-0-and-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-regexp-l-and-void-0-and-instance-is-string-hello.js",
    ),
  );
  it(
    "arguments-are-regexp-s-and-3-and-instance-is-string-a-b-c-de-f.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/arguments-are-regexp-s-and-3-and-instance-is-string-a-b-c-de-f.js",
    ),
  );
  it(
    "call-split-1-0-instance-is-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-1-0-instance-is-number.js"),
  );
  it(
    "call-split-1-1-instance-is-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-1-1-instance-is-number.js"),
  );
  it(
    "call-split-1-100-instance-is-number.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-1-100-instance-is-number.js"),
  );
  it(
    "call-split-1-2-instance-is-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-1-2-instance-is-number.js"),
  );
  it(
    "call-split-1-boo-instance-is-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-1-boo-instance-is-number.js"),
  );
  it(
    "call-split-1-instance-is-number.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-1-instance-is-number.js"),
  );
  it(
    "call-split-1-math-pow-2-32-1-instance-is-number.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-1-math-pow-2-32-1-instance-is-number.js",
    ),
  );
  it(
    "call-split-1-void-0-instance-is-number.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-1-void-0-instance-is-number.js"),
  );
  it(
    "call-split-123-instance-is-this123is123a123string123object.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-123-instance-is-this123is123a123string123object.js",
    ),
  );
  it(
    "call-split-2-instance-is-string-one-two-three-four-five.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-2-instance-is-string-one-two-three-four-five.js",
    ),
  );
  it(
    "call-split-4-instance-is-string-one-1-two-2-four-4.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-4-instance-is-string-one-1-two-2-four-4.js",
    ),
  );
  it(
    "call-split-h-instance-is-string-hello.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-h-instance-is-string-hello.js"),
  );
  it(
    "call-split-hello-instance-is-string-hello.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-hello-instance-is-string-hello.js",
    ),
  );
  it(
    "call-split-hellothere-instance-is-string-hello.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-hellothere-instance-is-string-hello.js",
    ),
  );
  it(
    "call-split-instance-is-empty-string-object.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-instance-is-empty-string-object.js",
    ),
  );
  it(
    "call-split-instance-is-string-one-1-two-2-four-4.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-instance-is-string-one-1-two-2-four-4.js",
    ),
  );
  it(
    "call-split-instance-is-string-one-two-three-four-five.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-instance-is-string-one-two-three-four-five.js",
    ),
  );
  it(
    "call-split-instance-is-string-one-two-three.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-instance-is-string-one-two-three.js",
    ),
  );
  it(
    "call-split-instance-is-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-instance-is-string.js"),
  );
  it(
    "call-split-l-0-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-l-0-instance-is-string-hello.js",
    ),
  );
  it(
    "call-split-l-1-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-l-1-instance-is-string-hello.js",
    ),
  );
  it(
    "call-split-l-2-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-l-2-instance-is-string-hello.js",
    ),
  );
  it(
    "call-split-l-3-instance-is-string-hello.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-l-3-instance-is-string-hello.js",
    ),
  );
  it(
    "call-split-l-4-instance-is-string-hello.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-l-4-instance-is-string-hello.js",
    ),
  );
  it(
    "call-split-l-instance-is-string-hello.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-l-instance-is-string-hello.js"),
  );
  it(
    "call-split-l-na-n-instance-is-string-hello.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-l-na-n-instance-is-string-hello.js",
    ),
  );
  it(
    "call-split-ll-instance-is-string-hello.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-ll-instance-is-string-hello.js"),
  );
  it(
    "call-split-new-reg-exp.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-new-reg-exp.js"),
  );
  it(
    "call-split-null-instance-is-thisnullisnullanullstringnullobject.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-null-instance-is-thisnullisnullanullstringnullobject.js",
    ),
  );
  it(
    "call-split-o-instance-is-string-hello.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-o-instance-is-string-hello.js"),
  );
  it(
    "call-split-on-instance-is-string-one-1-two-2-four-4.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-on-instance-is-string-one-1-two-2-four-4.js",
    ),
  );
  it(
    "call-split-r-42-instance-is-string-one-1-two-2-four-4.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-r-42-instance-is-string-one-1-two-2-four-4.js",
    ),
  );
  it(
    "call-split-true-instance-is-thistrueistrueatruestringtrueobject.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-true-instance-is-thistrueistrueatruestringtrueobject.js",
    ),
  );
  it(
    "call-split-undefined-instance-is-string-hello.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-undefined-instance-is-string-hello.js",
    ),
  );
  it(
    "call-split-void-0-instance-is-thisundefinedisundefinedaundefinedstringundefinedobject.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-void-0-instance-is-thisundefinedisundefinedaundefinedstringundefinedobject.js",
    ),
  );
  it(
    "call-split-without-arguments-and-instance-is-empty-string.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/call-split-without-arguments-and-instance-is-empty-string.js",
    ),
  );
  it(
    "call-split-x-instance-is-empty-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-x-instance-is-empty-string.js"),
  );
  it(
    "call-split-x-instance-is-string-hello.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/call-split-x-instance-is-string-hello.js"),
  );
  it(
    "checking-by-using-eval.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/checking-by-using-eval.js"),
  );
  it(
    "checking-if-creating-the-string-prototype-split-object-fails.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/checking-if-creating-the-string-prototype-split-object-fails.js",
    ),
  );
  it(
    "checking-if-deleting-the-string-prototype-split-length-property-fails.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/checking-if-deleting-the-string-prototype-split-length-property-fails.js",
    ),
  );
  it(
    "checking-if-enumerating-the-string-prototype-split-length-property-fails.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/checking-if-enumerating-the-string-prototype-split-length-property-fails.js",
    ),
  );
  it(
    "checking-if-varying-the-string-prototype-split-length-property-fails.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/checking-if-varying-the-string-prototype-split-length-property-fails.js",
    ),
  );
  it(
    "checking-string-prototype-split-length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/checking-string-prototype-split-length.js"),
  );
  it(
    "checking-string-prototype-split-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/checking-string-prototype-split-prototype.js",
    ),
  );
  it(
    "cstm-split-get-err.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/cstm-split-get-err.js"),
  );
  it(
    "cstm-split-invocation.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/cstm-split-invocation.js"),
  );
  it(
    "cstm-split-is-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/cstm-split-is-null.js"),
  );
  it(
    "cstm-split-on-bigint-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/cstm-split-on-bigint-primitive.js"),
  );
  it(
    "cstm-split-on-boolean-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/cstm-split-on-boolean-primitive.js"),
  );
  it(
    "cstm-split-on-number-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/cstm-split-on-number-primitive.js"),
  );
  it(
    "cstm-split-on-string-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/cstm-split-on-string-primitive.js"),
  );
  it(
    "instance-is-array-1-2-3-4-5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/instance-is-array-1-2-3-4-5.js"),
  );
  it(
    "instance-is-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/instance-is-boolean.js"),
  );
  it(
    "instance-is-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/instance-is-function.js"),
  );
  it(
    "instance-is-math.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/instance-is-math.js"),
  );
  it(
    "instance-is-new-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/instance-is-new-string.js"),
  );
  it(
    "instance-is-number-1234567890.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/instance-is-number-1234567890.js"),
  );
  it(
    "instance-is-number-1e21.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/instance-is-number-1e21.js"),
  );
  it(
    "instance-is-number-na-n.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/instance-is-number-na-n.js"),
  );
  it(
    "instance-is-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/instance-is-object.js"),
  );
  it(
    "instance-is-string-one-two-three-four-five.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/instance-is-string-one-two-three-four-five.js",
    ),
  );
  it(
    "instance-is-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/instance-is-string.js"),
  );
  it(
    "limit-touint32-error.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/limit-touint32-error.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/not-a-constructor.js"),
  );
  it(
    "separator-colon-instance-is-string-one-1-two-2-four-4.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/separator-colon-instance-is-string-one-1-two-2-four-4.js",
    ),
  );
  it(
    "separator-comma-instance-is-string-one-two-three-four-five.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/separator-comma-instance-is-string-one-two-three-four-five.js",
    ),
  );
  it(
    "separator-empty-string-instance-is-string.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/separator-empty-string-instance-is-string.js",
    ),
  );
  it(
    "separator-number-limit-math-pow-2-32-1-instance-is-number.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/separator-number-limit-math-pow-2-32-1-instance-is-number.js",
    ),
  );
  it(
    "separator-override-tostring-limit-override-valueof-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/separator-override-tostring-limit-override-valueof-throws.js",
    ),
  );
  it(
    "separator-override-tostring-limit-override-valueof-tostring-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/separator-override-tostring-limit-override-valueof-tostring-throws.js",
    ),
  );
  it(
    "separator-override-tostring-limit-override-valueof-tostring.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/separator-override-tostring-limit-override-valueof-tostring.js",
    ),
  );
  it(
    "separator-override-tostring-limit-override-valueof.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/separator-override-tostring-limit-override-valueof.js",
    ),
  );
  it(
    "separator-override-tostring-throws-limit-override-valueof-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/separator-override-tostring-throws-limit-override-valueof-throws.js",
    ),
  );
  it(
    "separator-override-valueof.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/separator-override-valueof.js"),
  );
  it(
    "separator-regexp-comma-instance-is-string-one-1-two-2-four-4.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/separator-regexp-comma-instance-is-string-one-1-two-2-four-4.js",
    ),
  );
  it(
    "separator-regexp-limit-string-via-eval.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/separator-regexp-limit-string-via-eval.js"),
  );
  it(
    "separator-regexp.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/separator-regexp.js"),
  );
  it(
    "separator-string-instance-is-empty-string-object.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/split/separator-string-instance-is-empty-string-object.js",
    ),
  );
  it(
    "separator-tostring-error.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/separator-tostring-error.js"),
  );
  it(
    "separator-undef-limit-custom.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/separator-undef-limit-custom.js"),
  );
  it(
    "separator-undef-limit-zero.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/separator-undef-limit-zero.js"),
  );
  it(
    "separator-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/separator-undef.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/this-value-not-obj-coercible.js"),
  );
  it(
    "this-value-tostring-error.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/this-value-tostring-error.js"),
  );
  it(
    "transferred-to-custom.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/split/transferred-to-custom.js"),
  );
  it(
    "transferred-to-number-separator-override-tostring-returns-regexp.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/split/transferred-to-number-separator-override-tostring-returns-regexp.js",
    ),
  );
  it(
    "valueOf-is-called-for-limit-argument.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/split/valueOf-is-called-for-limit-argument.js"),
  );
});

describe("startsWith", () => {
  it(
    "coerced-values-of-position.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/startsWith/coerced-values-of-position.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/startsWith/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/startsWith/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/startsWith/not-a-constructor.js"),
  );
  it(
    "out-of-bounds-position.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/startsWith/out-of-bounds-position.js"),
  );
  it(
    "return-abrupt-from-position-as-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/startsWith/return-abrupt-from-position-as-symbol.js",
    ),
  );
  it(
    "return-abrupt-from-position.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/startsWith/return-abrupt-from-position.js"),
  );
  it(
    "return-abrupt-from-searchstring-as-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/startsWith/return-abrupt-from-searchstring-as-symbol.js",
    ),
  );
  it(
    "return-abrupt-from-searchstring-regexp-test.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/startsWith/return-abrupt-from-searchstring-regexp-test.js",
    ),
  );
  it(
    "return-abrupt-from-searchstring.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/startsWith/return-abrupt-from-searchstring.js"),
  );
  it(
    "return-abrupt-from-this-as-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/startsWith/return-abrupt-from-this-as-symbol.js"),
  );
  it(
    "return-abrupt-from-this.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/startsWith/return-abrupt-from-this.js"),
  );
  it(
    "return-true-if-searchstring-is-empty.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/startsWith/return-true-if-searchstring-is-empty.js",
    ),
  );
  it(
    "searchstring-found-with-position.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/startsWith/searchstring-found-with-position.js"),
  );
  it(
    "searchstring-found-without-position.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/startsWith/searchstring-found-without-position.js",
    ),
  );
  it(
    "searchstring-is-regexp-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/startsWith/searchstring-is-regexp-throws.js"),
  );
  it(
    "searchstring-not-found-with-position.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/startsWith/searchstring-not-found-with-position.js",
    ),
  );
  it(
    "searchstring-not-found-without-position.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/startsWith/searchstring-not-found-without-position.js",
    ),
  );
  it(
    "startsWith.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/startsWith/startsWith.js"),
  );
  it(
    "this-is-null-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/startsWith/this-is-null-throws.js"),
  );
  it(
    "this-is-undefined-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/startsWith/this-is-undefined-throws.js"),
  );
});

describe("substring", () => {
  it(
    "S15.5.4.15_A10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A10.js"),
  );
  it(
    "S15.5.4.15_A11.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A11.js"),
  );
  it(
    "S15.5.4.15_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A1_T1.js"),
  );
  it(
    "S15.5.4.15_A1_T10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A1_T10.js"),
  );
  it(
    "S15.5.4.15_A1_T11.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A1_T11.js"),
  );
  it(
    "S15.5.4.15_A1_T12.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A1_T12.js"),
  );
  it(
    "S15.5.4.15_A1_T13.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A1_T13.js"),
  );
  it(
    "S15.5.4.15_A1_T14.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A1_T14.js"),
  );
  it(
    "S15.5.4.15_A1_T15.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A1_T15.js"),
  );
  it(
    "S15.5.4.15_A1_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A1_T2.js"),
  );
  it(
    "S15.5.4.15_A1_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A1_T4.js"),
  );
  it(
    "S15.5.4.15_A1_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A1_T5.js"),
  );
  it(
    "S15.5.4.15_A1_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A1_T6.js"),
  );
  it(
    "S15.5.4.15_A1_T7.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A1_T7.js"),
  );
  it(
    "S15.5.4.15_A1_T8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A1_T8.js"),
  );
  it(
    "S15.5.4.15_A1_T9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A1_T9.js"),
  );
  it(
    "S15.5.4.15_A2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A2_T1.js"),
  );
  it(
    "S15.5.4.15_A2_T10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A2_T10.js"),
  );
  it(
    "S15.5.4.15_A2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A2_T2.js"),
  );
  it(
    "S15.5.4.15_A2_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A2_T3.js"),
  );
  it(
    "S15.5.4.15_A2_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A2_T4.js"),
  );
  it(
    "S15.5.4.15_A2_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A2_T5.js"),
  );
  it(
    "S15.5.4.15_A2_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A2_T6.js"),
  );
  it(
    "S15.5.4.15_A2_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A2_T7.js"),
  );
  it(
    "S15.5.4.15_A2_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A2_T8.js"),
  );
  it(
    "S15.5.4.15_A2_T9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A2_T9.js"),
  );
  it(
    "S15.5.4.15_A3_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A3_T1.js"),
  );
  it(
    "S15.5.4.15_A3_T10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A3_T10.js"),
  );
  it(
    "S15.5.4.15_A3_T11.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A3_T11.js"),
  );
  it(
    "S15.5.4.15_A3_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A3_T2.js"),
  );
  it(
    "S15.5.4.15_A3_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A3_T3.js"),
  );
  it(
    "S15.5.4.15_A3_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A3_T4.js"),
  );
  it(
    "S15.5.4.15_A3_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A3_T5.js"),
  );
  it(
    "S15.5.4.15_A3_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A3_T6.js"),
  );
  it(
    "S15.5.4.15_A3_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A3_T7.js"),
  );
  it(
    "S15.5.4.15_A3_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A3_T8.js"),
  );
  it(
    "S15.5.4.15_A3_T9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A3_T9.js"),
  );
  it(
    "S15.5.4.15_A6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A6.js"),
  );
  it(
    "S15.5.4.15_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A7.js"),
  );
  it(
    "S15.5.4.15_A8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A8.js"),
  );
  it(
    "S15.5.4.15_A9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/S15.5.4.15_A9.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/substring/not-a-constructor.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/substring/this-value-not-obj-coercible.js"),
  );
});

describe("toLocaleLowerCase", () => {
  it(
    "Final_Sigma_U180E.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/Final_Sigma_U180E.js"),
  );
  it(
    "S15.5.4.17_A10.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A10.js"),
  );
  it(
    "S15.5.4.17_A11.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A11.js"),
  );
  it(
    "S15.5.4.17_A1_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A1_T1.js"),
  );
  it(
    "S15.5.4.17_A1_T10.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A1_T10.js"),
  );
  it(
    "S15.5.4.17_A1_T11.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A1_T11.js"),
  );
  it(
    "S15.5.4.17_A1_T12.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A1_T12.js"),
  );
  it(
    "S15.5.4.17_A1_T13.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A1_T13.js"),
  );
  it(
    "S15.5.4.17_A1_T14.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A1_T14.js"),
  );
  it(
    "S15.5.4.17_A1_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A1_T2.js"),
  );
  it(
    "S15.5.4.17_A1_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A1_T3.js"),
  );
  it(
    "S15.5.4.17_A1_T4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A1_T4.js"),
  );
  it(
    "S15.5.4.17_A1_T5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A1_T5.js"),
  );
  it(
    "S15.5.4.17_A1_T6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A1_T6.js"),
  );
  it(
    "S15.5.4.17_A1_T7.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A1_T7.js"),
  );
  it(
    "S15.5.4.17_A1_T8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A1_T8.js"),
  );
  it(
    "S15.5.4.17_A1_T9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A1_T9.js"),
  );
  it(
    "S15.5.4.17_A2_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A2_T1.js"),
  );
  it(
    "S15.5.4.17_A6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A6.js"),
  );
  it(
    "S15.5.4.17_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A7.js"),
  );
  it(
    "S15.5.4.17_A8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A8.js"),
  );
  it(
    "S15.5.4.17_A9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/S15.5.4.17_A9.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/not-a-constructor.js"),
  );
  it(
    "special_casing.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/special_casing.js"),
  );
  it(
    "special_casing_conditional.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/special_casing_conditional.js"),
  );
  it(
    "supplementary_plane.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleLowerCase/supplementary_plane.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/toLocaleLowerCase/this-value-not-obj-coercible.js",
    ),
  );
});

describe("toLocaleUpperCase", () => {
  it(
    "S15.5.4.19_A10.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A10.js"),
  );
  it(
    "S15.5.4.19_A11.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A11.js"),
  );
  it(
    "S15.5.4.19_A1_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A1_T1.js"),
  );
  it(
    "S15.5.4.19_A1_T10.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A1_T10.js"),
  );
  it(
    "S15.5.4.19_A1_T11.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A1_T11.js"),
  );
  it(
    "S15.5.4.19_A1_T12.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A1_T12.js"),
  );
  it(
    "S15.5.4.19_A1_T13.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A1_T13.js"),
  );
  it(
    "S15.5.4.19_A1_T14.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A1_T14.js"),
  );
  it(
    "S15.5.4.19_A1_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A1_T2.js"),
  );
  it(
    "S15.5.4.19_A1_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A1_T3.js"),
  );
  it(
    "S15.5.4.19_A1_T4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A1_T4.js"),
  );
  it(
    "S15.5.4.19_A1_T5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A1_T5.js"),
  );
  it(
    "S15.5.4.19_A1_T6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A1_T6.js"),
  );
  it(
    "S15.5.4.19_A1_T7.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A1_T7.js"),
  );
  it(
    "S15.5.4.19_A1_T8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A1_T8.js"),
  );
  it(
    "S15.5.4.19_A1_T9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A1_T9.js"),
  );
  it(
    "S15.5.4.19_A2_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A2_T1.js"),
  );
  it(
    "S15.5.4.19_A6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A6.js"),
  );
  it(
    "S15.5.4.19_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A7.js"),
  );
  it(
    "S15.5.4.19_A8.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A8.js"),
  );
  it(
    "S15.5.4.19_A9.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/S15.5.4.19_A9.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/not-a-constructor.js"),
  );
  it(
    "special_casing.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/special_casing.js"),
  );
  it(
    "supplementary_plane.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLocaleUpperCase/supplementary_plane.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/String/prototype/toLocaleUpperCase/this-value-not-obj-coercible.js",
    ),
  );
});

describe("toLowerCase", () => {
  it(
    "Final_Sigma_U180E.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/Final_Sigma_U180E.js"),
  );
  it(
    "S15.5.4.16_A10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A10.js"),
  );
  it(
    "S15.5.4.16_A11.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A11.js"),
  );
  it(
    "S15.5.4.16_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A1_T1.js"),
  );
  it(
    "S15.5.4.16_A1_T10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A1_T10.js"),
  );
  it(
    "S15.5.4.16_A1_T11.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A1_T11.js"),
  );
  it(
    "S15.5.4.16_A1_T12.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A1_T12.js"),
  );
  it(
    "S15.5.4.16_A1_T13.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A1_T13.js"),
  );
  it(
    "S15.5.4.16_A1_T14.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A1_T14.js"),
  );
  it(
    "S15.5.4.16_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A1_T2.js"),
  );
  it(
    "S15.5.4.16_A1_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A1_T3.js"),
  );
  it(
    "S15.5.4.16_A1_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A1_T4.js"),
  );
  it(
    "S15.5.4.16_A1_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A1_T5.js"),
  );
  it(
    "S15.5.4.16_A1_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A1_T6.js"),
  );
  it(
    "S15.5.4.16_A1_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A1_T7.js"),
  );
  it(
    "S15.5.4.16_A1_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A1_T8.js"),
  );
  it(
    "S15.5.4.16_A1_T9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A1_T9.js"),
  );
  it(
    "S15.5.4.16_A2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A2_T1.js"),
  );
  it(
    "S15.5.4.16_A6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A6.js"),
  );
  it(
    "S15.5.4.16_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A7.js"),
  );
  it(
    "S15.5.4.16_A8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A8.js"),
  );
  it(
    "S15.5.4.16_A9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/S15.5.4.16_A9.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/not-a-constructor.js"),
  );
  it(
    "special_casing.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/special_casing.js"),
  );
  it(
    "special_casing_conditional.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/special_casing_conditional.js"),
  );
  it(
    "supplementary_plane.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/supplementary_plane.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toLowerCase/this-value-not-obj-coercible.js"),
  );
});

describe("toString", () => {
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toString/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toString/name.js"),
  );
  it(
    "non-generic-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toString/non-generic-realm.js"),
  );
  it(
    "non-generic.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toString/non-generic.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toString/not-a-constructor.js"),
  );
  it(
    "string-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toString/string-object.js"),
  );
  it(
    "string-primitive.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toString/string-primitive.js"),
  );
});

describe("toUpperCase", () => {
  it(
    "S15.5.4.18_A10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A10.js"),
  );
  it(
    "S15.5.4.18_A11.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A11.js"),
  );
  it(
    "S15.5.4.18_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A1_T1.js"),
  );
  it(
    "S15.5.4.18_A1_T10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A1_T10.js"),
  );
  it(
    "S15.5.4.18_A1_T11.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A1_T11.js"),
  );
  it(
    "S15.5.4.18_A1_T12.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A1_T12.js"),
  );
  it(
    "S15.5.4.18_A1_T13.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A1_T13.js"),
  );
  it(
    "S15.5.4.18_A1_T14.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A1_T14.js"),
  );
  it(
    "S15.5.4.18_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A1_T2.js"),
  );
  it(
    "S15.5.4.18_A1_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A1_T3.js"),
  );
  it(
    "S15.5.4.18_A1_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A1_T4.js"),
  );
  it(
    "S15.5.4.18_A1_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A1_T5.js"),
  );
  it(
    "S15.5.4.18_A1_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A1_T6.js"),
  );
  it(
    "S15.5.4.18_A1_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A1_T7.js"),
  );
  it(
    "S15.5.4.18_A1_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A1_T8.js"),
  );
  it(
    "S15.5.4.18_A1_T9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A1_T9.js"),
  );
  it(
    "S15.5.4.18_A2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A2_T1.js"),
  );
  it(
    "S15.5.4.18_A6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A6.js"),
  );
  it(
    "S15.5.4.18_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A7.js"),
  );
  it(
    "S15.5.4.18_A8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A8.js"),
  );
  it(
    "S15.5.4.18_A9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/S15.5.4.18_A9.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/not-a-constructor.js"),
  );
  it(
    "special_casing.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/special_casing.js"),
  );
  it(
    "supplementary_plane.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/supplementary_plane.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toUpperCase/this-value-not-obj-coercible.js"),
  );
});

describe("toWellFormed", () => {
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toWellFormed/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toWellFormed/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toWellFormed/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toWellFormed/prop-desc.js"),
  );
  it(
    "return-abrupt-from-this.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toWellFormed/return-abrupt-from-this.js"),
  );
  it(
    "returns-well-formed-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toWellFormed/returns-well-formed-string.js"),
  );
  it(
    "to-string-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toWellFormed/to-string-primitive.js"),
  );
  it(
    "to-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/toWellFormed/to-string.js"),
  );
});

describe("trim", () => {
  it(
    "15.5.4.20-0-1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-0-1.js"),
  );
  it(
    "15.5.4.20-0-2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-0-2.js"),
  );
  it(
    "15.5.4.20-1-1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-1-1.js"),
  );
  it(
    "15.5.4.20-1-2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-1-2.js"),
  );
  it(
    "15.5.4.20-1-3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-1-3.js"),
  );
  it(
    "15.5.4.20-1-4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-1-4.js"),
  );
  it(
    "15.5.4.20-1-5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-1-5.js"),
  );
  it(
    "15.5.4.20-1-6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-1-6.js"),
  );
  it(
    "15.5.4.20-1-7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-1-7.js"),
  );
  it(
    "15.5.4.20-1-8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-1-8.js"),
  );
  it(
    "15.5.4.20-1-9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-1-9.js"),
  );
  it(
    "15.5.4.20-2-1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-1.js"),
  );
  it(
    "15.5.4.20-2-10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-10.js"),
  );
  it(
    "15.5.4.20-2-11.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-11.js"),
  );
  it(
    "15.5.4.20-2-12.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-12.js"),
  );
  it(
    "15.5.4.20-2-13.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-13.js"),
  );
  it(
    "15.5.4.20-2-14.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-14.js"),
  );
  it(
    "15.5.4.20-2-15.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-15.js"),
  );
  it(
    "15.5.4.20-2-16.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-16.js"),
  );
  it(
    "15.5.4.20-2-17.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-17.js"),
  );
  it(
    "15.5.4.20-2-18.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-18.js"),
  );
  it(
    "15.5.4.20-2-19.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-19.js"),
  );
  it(
    "15.5.4.20-2-2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-2.js"),
  );
  it(
    "15.5.4.20-2-20.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-20.js"),
  );
  it(
    "15.5.4.20-2-21.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-21.js"),
  );
  it(
    "15.5.4.20-2-22.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-22.js"),
  );
  it(
    "15.5.4.20-2-23.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-23.js"),
  );
  it(
    "15.5.4.20-2-24.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-24.js"),
  );
  it(
    "15.5.4.20-2-25.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-25.js"),
  );
  it(
    "15.5.4.20-2-26.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-26.js"),
  );
  it(
    "15.5.4.20-2-27.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-27.js"),
  );
  it(
    "15.5.4.20-2-28.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-28.js"),
  );
  it(
    "15.5.4.20-2-29.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-29.js"),
  );
  it(
    "15.5.4.20-2-3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-3.js"),
  );
  it(
    "15.5.4.20-2-30.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-30.js"),
  );
  it(
    "15.5.4.20-2-31.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-31.js"),
  );
  it(
    "15.5.4.20-2-32.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-32.js"),
  );
  it(
    "15.5.4.20-2-33.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-33.js"),
  );
  it(
    "15.5.4.20-2-34.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-34.js"),
  );
  it(
    "15.5.4.20-2-35.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-35.js"),
  );
  it(
    "15.5.4.20-2-36.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-36.js"),
  );
  it(
    "15.5.4.20-2-37.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-37.js"),
  );
  it(
    "15.5.4.20-2-38.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-38.js"),
  );
  it(
    "15.5.4.20-2-39.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-39.js"),
  );
  it(
    "15.5.4.20-2-4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-4.js"),
  );
  it(
    "15.5.4.20-2-40.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-40.js"),
  );
  it(
    "15.5.4.20-2-41.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-41.js"),
  );
  it(
    "15.5.4.20-2-42.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-42.js"),
  );
  it(
    "15.5.4.20-2-43.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-43.js"),
  );
  it(
    "15.5.4.20-2-44.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-44.js"),
  );
  it(
    "15.5.4.20-2-45.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-45.js"),
  );
  it(
    "15.5.4.20-2-46.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-46.js"),
  );
  it(
    "15.5.4.20-2-47.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-47.js"),
  );
  it(
    "15.5.4.20-2-49.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-49.js"),
  );
  it(
    "15.5.4.20-2-5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-5.js"),
  );
  it(
    "15.5.4.20-2-50.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-50.js"),
  );
  it(
    "15.5.4.20-2-51.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-51.js"),
  );
  it(
    "15.5.4.20-2-6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-6.js"),
  );
  it(
    "15.5.4.20-2-7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-7.js"),
  );
  it(
    "15.5.4.20-2-8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-8.js"),
  );
  it(
    "15.5.4.20-2-9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-2-9.js"),
  );
  it(
    "15.5.4.20-3-1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-3-1.js"),
  );
  it(
    "15.5.4.20-3-10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-3-10.js"),
  );
  it(
    "15.5.4.20-3-11.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-3-11.js"),
  );
  it(
    "15.5.4.20-3-12.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-3-12.js"),
  );
  it(
    "15.5.4.20-3-13.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-3-13.js"),
  );
  it(
    "15.5.4.20-3-14.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-3-14.js"),
  );
  it(
    "15.5.4.20-3-2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-3-2.js"),
  );
  it(
    "15.5.4.20-3-3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-3-3.js"),
  );
  it(
    "15.5.4.20-3-4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-3-4.js"),
  );
  it(
    "15.5.4.20-3-5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-3-5.js"),
  );
  it(
    "15.5.4.20-3-6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-3-6.js"),
  );
  it(
    "15.5.4.20-3-7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-3-7.js"),
  );
  it(
    "15.5.4.20-3-8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-3-8.js"),
  );
  it(
    "15.5.4.20-3-9.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-3-9.js"),
  );
  it(
    "15.5.4.20-4-1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-1.js"),
  );
  it(
    "15.5.4.20-4-10.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-10.js"),
  );
  it(
    "15.5.4.20-4-11.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-11.js"),
  );
  it(
    "15.5.4.20-4-12.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-12.js"),
  );
  it(
    "15.5.4.20-4-13.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-13.js"),
  );
  it(
    "15.5.4.20-4-14.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-14.js"),
  );
  it(
    "15.5.4.20-4-16.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-16.js"),
  );
  it(
    "15.5.4.20-4-18.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-18.js"),
  );
  it(
    "15.5.4.20-4-19.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-19.js"),
  );
  it(
    "15.5.4.20-4-2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-2.js"),
  );
  it(
    "15.5.4.20-4-20.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-20.js"),
  );
  it(
    "15.5.4.20-4-21.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-21.js"),
  );
  it(
    "15.5.4.20-4-22.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-22.js"),
  );
  it(
    "15.5.4.20-4-24.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-24.js"),
  );
  it(
    "15.5.4.20-4-27.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-27.js"),
  );
  it(
    "15.5.4.20-4-28.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-28.js"),
  );
  it(
    "15.5.4.20-4-29.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-29.js"),
  );
  it(
    "15.5.4.20-4-3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-3.js"),
  );
  it(
    "15.5.4.20-4-30.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-30.js"),
  );
  it(
    "15.5.4.20-4-32.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-32.js"),
  );
  it(
    "15.5.4.20-4-34.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-34.js"),
  );
  it(
    "15.5.4.20-4-35.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-35.js"),
  );
  it(
    "15.5.4.20-4-36.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-36.js"),
  );
  it(
    "15.5.4.20-4-37.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-37.js"),
  );
  it(
    "15.5.4.20-4-38.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-38.js"),
  );
  it(
    "15.5.4.20-4-39.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-39.js"),
  );
  it(
    "15.5.4.20-4-4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-4.js"),
  );
  it(
    "15.5.4.20-4-40.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-40.js"),
  );
  it(
    "15.5.4.20-4-41.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-41.js"),
  );
  it(
    "15.5.4.20-4-42.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-42.js"),
  );
  it(
    "15.5.4.20-4-43.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-43.js"),
  );
  it(
    "15.5.4.20-4-44.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-44.js"),
  );
  it(
    "15.5.4.20-4-45.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-45.js"),
  );
  it(
    "15.5.4.20-4-46.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-46.js"),
  );
  it(
    "15.5.4.20-4-47.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-47.js"),
  );
  it(
    "15.5.4.20-4-48.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-48.js"),
  );
  it(
    "15.5.4.20-4-49.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-49.js"),
  );
  it(
    "15.5.4.20-4-5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-5.js"),
  );
  it(
    "15.5.4.20-4-50.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-50.js"),
  );
  it(
    "15.5.4.20-4-51.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-51.js"),
  );
  it(
    "15.5.4.20-4-52.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-52.js"),
  );
  it(
    "15.5.4.20-4-53.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-53.js"),
  );
  it(
    "15.5.4.20-4-54.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-54.js"),
  );
  it(
    "15.5.4.20-4-55.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-55.js"),
  );
  it(
    "15.5.4.20-4-56.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-56.js"),
  );
  it(
    "15.5.4.20-4-57.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-57.js"),
  );
  it(
    "15.5.4.20-4-58.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-58.js"),
  );
  it(
    "15.5.4.20-4-59.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-59.js"),
  );
  it(
    "15.5.4.20-4-6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-6.js"),
  );
  it(
    "15.5.4.20-4-60.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-60.js"),
  );
  it(
    "15.5.4.20-4-8.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/15.5.4.20-4-8.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/not-a-constructor.js"),
  );
  it(
    "u180e.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trim/u180e.js"),
  );
});

describe("trimEnd", () => {
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/trimEnd/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimEnd/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimEnd/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimEnd/prop-desc.js"),
  );
  it(
    "this-value-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimEnd/this-value-boolean.js"),
  );
  it(
    "this-value-line-terminator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimEnd/this-value-line-terminator.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/trimEnd/this-value-not-obj-coercible.js"),
  );
  it(
    "this-value-number.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimEnd/this-value-number.js"),
  );
  it(
    "this-value-object-cannot-convert-to-primitive-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimEnd/this-value-object-cannot-convert-to-primitive-err.js",
    ),
  );
  it(
    "this-value-object-toprimitive-call-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimEnd/this-value-object-toprimitive-call-err.js",
    ),
  );
  it(
    "this-value-object-toprimitive-meth-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimEnd/this-value-object-toprimitive-meth-err.js",
    ),
  );
  it(
    "this-value-object-toprimitive-meth-priority.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimEnd/this-value-object-toprimitive-meth-priority.js",
    ),
  );
  it(
    "this-value-object-toprimitive-returns-object-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimEnd/this-value-object-toprimitive-returns-object-err.js",
    ),
  );
  it(
    "this-value-object-tostring-call-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimEnd/this-value-object-tostring-call-err.js"),
  );
  it(
    "this-value-object-tostring-meth-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimEnd/this-value-object-tostring-meth-err.js"),
  );
  it(
    "this-value-object-tostring-meth-priority.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimEnd/this-value-object-tostring-meth-priority.js",
    ),
  );
  it(
    "this-value-object-tostring-returns-object-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimEnd/this-value-object-tostring-returns-object-err.js",
    ),
  );
  it(
    "this-value-object-valueof-call-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimEnd/this-value-object-valueof-call-err.js"),
  );
  it(
    "this-value-object-valueof-meth-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimEnd/this-value-object-valueof-meth-err.js"),
  );
  it(
    "this-value-object-valueof-meth-priority.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimEnd/this-value-object-valueof-meth-priority.js",
    ),
  );
  it(
    "this-value-object-valueof-returns-object-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimEnd/this-value-object-valueof-returns-object-err.js",
    ),
  );
  it(
    "this-value-symbol-typeerror.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimEnd/this-value-symbol-typeerror.js"),
  );
  it(
    "this-value-whitespace.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimEnd/this-value-whitespace.js"),
  );
});

describe("trimStart", () => {
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/trimStart/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimStart/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimStart/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimStart/prop-desc.js"),
  );
  it(
    "this-value-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimStart/this-value-boolean.js"),
  );
  it(
    "this-value-line-terminator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimStart/this-value-line-terminator.js"),
  );
  it(
    "this-value-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/trimStart/this-value-not-obj-coercible.js"),
  );
  it(
    "this-value-number.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimStart/this-value-number.js"),
  );
  it(
    "this-value-object-cannot-convert-to-primitive-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimStart/this-value-object-cannot-convert-to-primitive-err.js",
    ),
  );
  it(
    "this-value-object-toprimitive-call-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimStart/this-value-object-toprimitive-call-err.js",
    ),
  );
  it(
    "this-value-object-toprimitive-meth-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimStart/this-value-object-toprimitive-meth-err.js",
    ),
  );
  it(
    "this-value-object-toprimitive-meth-priority.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimStart/this-value-object-toprimitive-meth-priority.js",
    ),
  );
  it(
    "this-value-object-toprimitive-returns-object-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimStart/this-value-object-toprimitive-returns-object-err.js",
    ),
  );
  it(
    "this-value-object-tostring-call-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimStart/this-value-object-tostring-call-err.js",
    ),
  );
  it(
    "this-value-object-tostring-meth-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimStart/this-value-object-tostring-meth-err.js",
    ),
  );
  it(
    "this-value-object-tostring-meth-priority.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimStart/this-value-object-tostring-meth-priority.js",
    ),
  );
  it(
    "this-value-object-tostring-returns-object-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimStart/this-value-object-tostring-returns-object-err.js",
    ),
  );
  it(
    "this-value-object-valueof-call-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimStart/this-value-object-valueof-call-err.js"),
  );
  it(
    "this-value-object-valueof-meth-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimStart/this-value-object-valueof-meth-err.js"),
  );
  it(
    "this-value-object-valueof-meth-priority.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimStart/this-value-object-valueof-meth-priority.js",
    ),
  );
  it(
    "this-value-object-valueof-returns-object-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/String/prototype/trimStart/this-value-object-valueof-returns-object-err.js",
    ),
  );
  it(
    "this-value-symbol-typeerror.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimStart/this-value-symbol-typeerror.js"),
  );
  it(
    "this-value-whitespace.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/trimStart/this-value-whitespace.js"),
  );
});

describe("valueOf", () => {
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/valueOf/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/valueOf/name.js"),
  );
  it(
    "non-generic-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/valueOf/non-generic-realm.js"),
  );
  it(
    "non-generic.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/String/prototype/valueOf/non-generic.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/valueOf/not-a-constructor.js"),
  );
  it(
    "string-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/valueOf/string-object.js"),
  );
  it(
    "string-primitive.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/String/prototype/valueOf/string-primitive.js"),
  );
});
