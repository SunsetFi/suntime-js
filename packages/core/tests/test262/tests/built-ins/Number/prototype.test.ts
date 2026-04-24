import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
  it(
    "15.7.3.1-2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Number/prototype/15.7.3.1-2.js"),
  );
  it(
    "S15.7.3.1_A2_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Number/prototype/S15.7.3.1_A2_T1.js"),
  );
  it(
    "S15.7.3.1_A2_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Number/prototype/S15.7.3.1_A2_T2.js"),
  );
  it(
    "S15.7.3.1_A3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Number/prototype/S15.7.3.1_A3.js"),
  );
  it(
    "S15.7.4_A1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Number/prototype/S15.7.4_A1.js"),
  );
  it(
    "S15.7.4_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Number/prototype/S15.7.4_A2.js"),
  );
  it(
    "S15.7.4_A3.1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Number/prototype/S15.7.4_A3.1.js"),
  );
  it(
    "S15.7.4_A3.2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Number/prototype/S15.7.4_A3.2.js"),
  );
  it(
    "S15.7.4_A3.3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Number/prototype/S15.7.4_A3.3.js"),
  );
  it(
    "S15.7.4_A3.4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Number/prototype/S15.7.4_A3.4.js"),
  );
  it(
    "S15.7.4_A3.5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Number/prototype/S15.7.4_A3.5.js"),
  );
  it(
    "S15.7.4_A3.6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Number/prototype/S15.7.4_A3.6.js"),
  );
  it(
    "S15.7.4_A3.7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Number/prototype/S15.7.4_A3.7.js"),
  );
  it(
    "constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Number/prototype/constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Number/prototype/prop-desc.js"),
  );
  describe("toExponential", () => {
    it(
      "infinity.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toExponential/infinity.js"),
    );
    it(
      "length.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toExponential/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toExponential/name.js"),
    );
    it(
      "nan.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toExponential/nan.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toExponential/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toExponential/prop-desc.js"),
    );
    it(
      "range.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toExponential/range.js"),
    );
    it(
      "return-abrupt-tointeger-fractiondigits-symbol.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Number/prototype/toExponential/return-abrupt-tointeger-fractiondigits-symbol.js",
      ),
    );
    it(
      "return-abrupt-tointeger-fractiondigits.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Number/prototype/toExponential/return-abrupt-tointeger-fractiondigits.js",
      ),
    );
    it(
      "return-values.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toExponential/return-values.js"),
    );
    it(
      "this-is-0-fractiondigits-is-0.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Number/prototype/toExponential/this-is-0-fractiondigits-is-0.js",
      ),
    );
    it(
      "this-is-0-fractiondigits-is-not-0.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Number/prototype/toExponential/this-is-0-fractiondigits-is-not-0.js",
      ),
    );
    it(
      "this-type-not-number-or-number-object.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Number/prototype/toExponential/this-type-not-number-or-number-object.js",
      ),
    );
    it(
      "tointeger-fractiondigits.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toExponential/tointeger-fractiondigits.js"),
    );
    it(
      "undefined-fractiondigits.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toExponential/undefined-fractiondigits.js"),
    );
  });
  describe("toFixed", () => {
    it(
      "S15.7.4.5_A1.1_T01.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toFixed/S15.7.4.5_A1.1_T01.js"),
    );
    it(
      "S15.7.4.5_A1.1_T02.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toFixed/S15.7.4.5_A1.1_T02.js"),
    );
    it(
      "S15.7.4.5_A1.3_T01.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toFixed/S15.7.4.5_A1.3_T01.js"),
    );
    it(
      "S15.7.4.5_A1.3_T02.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toFixed/S15.7.4.5_A1.3_T02.js"),
    );
    it(
      "S15.7.4.5_A1.4_T01.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toFixed/S15.7.4.5_A1.4_T01.js"),
    );
    it(
      "S15.7.4.5_A2_T01.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toFixed/S15.7.4.5_A2_T01.js"),
    );
    it(
      "exactness.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toFixed/exactness.js"),
    );
    it(
      "length.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toFixed/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toFixed/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toFixed/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toFixed/prop-desc.js"),
    );
    it(
      "range.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toFixed/range.js"),
    );
    it(
      "return-type.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toFixed/return-type.js"),
    );
  });
  describe("toLocaleString", () => {
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toLocaleString/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toLocaleString/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toLocaleString/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toLocaleString/prop-desc.js"),
    );
  });
  describe("toPrecision", () => {
    it(
      "exponential.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toPrecision/exponential.js"),
    );
    it(
      "infinity.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toPrecision/infinity.js"),
    );
    it(
      "length.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toPrecision/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toPrecision/name.js"),
    );
    it(
      "nan.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toPrecision/nan.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toPrecision/not-a-constructor.js"),
    );
    it(
      "precision-cannot-be-coerced-to-a-number-in-range.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Number/prototype/toPrecision/precision-cannot-be-coerced-to-a-number-in-range.js",
      ),
    );
    it(
      "prop-desc.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toPrecision/prop-desc.js"),
    );
    it(
      "range.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toPrecision/range.js"),
    );
    it(
      "return-abrupt-tointeger-precision-symbol.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Number/prototype/toPrecision/return-abrupt-tointeger-precision-symbol.js",
      ),
    );
    it(
      "return-abrupt-tointeger-precision.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Number/prototype/toPrecision/return-abrupt-tointeger-precision.js",
      ),
    );
    it(
      "return-values.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toPrecision/return-values.js"),
    );
    it(
      "this-is-0-precision-is-1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toPrecision/this-is-0-precision-is-1.js"),
    );
    it(
      "this-is-0-precision-is-gter-than-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Number/prototype/toPrecision/this-is-0-precision-is-gter-than-1.js",
      ),
    );
    it(
      "this-type-not-number-or-number-object.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Number/prototype/toPrecision/this-type-not-number-or-number-object.js",
      ),
    );
    it(
      "tointeger-precision.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toPrecision/tointeger-precision.js"),
    );
    it(
      "undefined-precision-arg.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toPrecision/undefined-precision-arg.js"),
    );
  });
  describe("toString", () => {
    it(
      "S15.7.4.2_A1_T01.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A1_T01.js"),
    );
    it(
      "S15.7.4.2_A1_T02.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A1_T02.js"),
    );
    it(
      "S15.7.4.2_A1_T03.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A1_T03.js"),
    );
    it(
      "S15.7.4.2_A2_T01.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T01.js"),
    );
    it(
      "S15.7.4.2_A2_T02.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T02.js"),
    );
    it(
      "S15.7.4.2_A2_T03.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T03.js"),
    );
    it(
      "S15.7.4.2_A2_T04.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T04.js"),
    );
    it(
      "S15.7.4.2_A2_T05.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T05.js"),
    );
    it(
      "S15.7.4.2_A2_T06.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T06.js"),
    );
    it(
      "S15.7.4.2_A2_T07.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T07.js"),
    );
    it(
      "S15.7.4.2_A2_T08.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T08.js"),
    );
    it(
      "S15.7.4.2_A2_T09.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T09.js"),
    );
    it(
      "S15.7.4.2_A2_T10.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T10.js"),
    );
    it(
      "S15.7.4.2_A2_T11.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T11.js"),
    );
    it(
      "S15.7.4.2_A2_T12.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T12.js"),
    );
    it(
      "S15.7.4.2_A2_T13.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T13.js"),
    );
    it(
      "S15.7.4.2_A2_T14.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T14.js"),
    );
    it(
      "S15.7.4.2_A2_T15.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T15.js"),
    );
    it(
      "S15.7.4.2_A2_T16.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T16.js"),
    );
    it(
      "S15.7.4.2_A2_T17.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T17.js"),
    );
    it(
      "S15.7.4.2_A2_T18.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T18.js"),
    );
    it(
      "S15.7.4.2_A2_T19.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T19.js"),
    );
    it(
      "S15.7.4.2_A2_T20.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T20.js"),
    );
    it(
      "S15.7.4.2_A2_T21.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T21.js"),
    );
    it(
      "S15.7.4.2_A2_T22.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T22.js"),
    );
    it(
      "S15.7.4.2_A2_T23.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T23.js"),
    );
    it(
      "S15.7.4.2_A2_T24.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T24.js"),
    );
    it(
      "S15.7.4.2_A2_T25.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T25.js"),
    );
    it(
      "S15.7.4.2_A2_T26.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T26.js"),
    );
    it(
      "S15.7.4.2_A2_T27.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T27.js"),
    );
    it(
      "S15.7.4.2_A2_T28.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T28.js"),
    );
    it(
      "S15.7.4.2_A2_T29.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T29.js"),
    );
    it(
      "S15.7.4.2_A2_T30.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T30.js"),
    );
    it(
      "S15.7.4.2_A2_T31.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T31.js"),
    );
    it(
      "S15.7.4.2_A2_T32.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T32.js"),
    );
    it(
      "S15.7.4.2_A2_T33.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T33.js"),
    );
    it(
      "S15.7.4.2_A2_T34.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A2_T34.js"),
    );
    it(
      "S15.7.4.2_A3_T01.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A3_T01.js"),
    );
    it(
      "S15.7.4.2_A3_T02.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A3_T02.js"),
    );
    it(
      "S15.7.4.2_A3_T03.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A3_T03.js"),
    );
    it(
      "S15.7.4.2_A3_T04.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A3_T04.js"),
    );
    it(
      "S15.7.4.2_A4_T01.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A4_T01.js"),
    );
    it(
      "S15.7.4.2_A4_T02.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A4_T02.js"),
    );
    it(
      "S15.7.4.2_A4_T03.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A4_T03.js"),
    );
    it(
      "S15.7.4.2_A4_T04.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A4_T04.js"),
    );
    it(
      "S15.7.4.2_A4_T05.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/S15.7.4.2_A4_T05.js"),
    );
    it(
      "a-z.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/a-z.js"),
    );
    it(
      "length.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/not-a-constructor.js"),
    );
    it(
      "numeric-literal-tostring-default-radix.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Number/prototype/toString/numeric-literal-tostring-default-radix.js",
      ),
    );
    it(
      "numeric-literal-tostring-radix-1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-1.js"),
    );
    it(
      "numeric-literal-tostring-radix-10.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-10.js"),
    );
    it(
      "numeric-literal-tostring-radix-11.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-11.js"),
    );
    it(
      "numeric-literal-tostring-radix-12.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-12.js"),
    );
    it(
      "numeric-literal-tostring-radix-13.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-13.js"),
    );
    it(
      "numeric-literal-tostring-radix-14.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-14.js"),
    );
    it(
      "numeric-literal-tostring-radix-15.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-15.js"),
    );
    it(
      "numeric-literal-tostring-radix-16.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-16.js"),
    );
    it(
      "numeric-literal-tostring-radix-17.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-17.js"),
    );
    it(
      "numeric-literal-tostring-radix-18.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-18.js"),
    );
    it(
      "numeric-literal-tostring-radix-19.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-19.js"),
    );
    it(
      "numeric-literal-tostring-radix-2.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-2.js"),
    );
    it(
      "numeric-literal-tostring-radix-20.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-20.js"),
    );
    it(
      "numeric-literal-tostring-radix-21.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-21.js"),
    );
    it(
      "numeric-literal-tostring-radix-22.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-22.js"),
    );
    it(
      "numeric-literal-tostring-radix-23.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-23.js"),
    );
    it(
      "numeric-literal-tostring-radix-24.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-24.js"),
    );
    it(
      "numeric-literal-tostring-radix-25.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-25.js"),
    );
    it(
      "numeric-literal-tostring-radix-26.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-26.js"),
    );
    it(
      "numeric-literal-tostring-radix-27.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-27.js"),
    );
    it(
      "numeric-literal-tostring-radix-28.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-28.js"),
    );
    it(
      "numeric-literal-tostring-radix-29.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-29.js"),
    );
    it(
      "numeric-literal-tostring-radix-3.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-3.js"),
    );
    it(
      "numeric-literal-tostring-radix-30.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-30.js"),
    );
    it(
      "numeric-literal-tostring-radix-31.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-31.js"),
    );
    it(
      "numeric-literal-tostring-radix-32.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-32.js"),
    );
    it(
      "numeric-literal-tostring-radix-33.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-33.js"),
    );
    it(
      "numeric-literal-tostring-radix-34.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-34.js"),
    );
    it(
      "numeric-literal-tostring-radix-35.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-35.js"),
    );
    it(
      "numeric-literal-tostring-radix-36.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-36.js"),
    );
    it(
      "numeric-literal-tostring-radix-37.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-37.js"),
    );
    it(
      "numeric-literal-tostring-radix-4.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-4.js"),
    );
    it(
      "numeric-literal-tostring-radix-5.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-5.js"),
    );
    it(
      "numeric-literal-tostring-radix-6.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-6.js"),
    );
    it(
      "numeric-literal-tostring-radix-7.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-7.js"),
    );
    it(
      "numeric-literal-tostring-radix-8.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-8.js"),
    );
    it(
      "numeric-literal-tostring-radix-9.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/numeric-literal-tostring-radix-9.js"),
    );
    it(
      "numeric-literal-tostring-radix-poisoned.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Number/prototype/toString/numeric-literal-tostring-radix-poisoned.js",
      ),
    );
    it(
      "prop-desc.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/toString/prop-desc.js"),
    );
  });
  describe("valueOf", () => {
    it(
      "S15.7.4.4_A1_T01.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/valueOf/S15.7.4.4_A1_T01.js"),
    );
    it(
      "S15.7.4.4_A1_T02.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/valueOf/S15.7.4.4_A1_T02.js"),
    );
    it(
      "S15.7.4.4_A2_T01.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/valueOf/S15.7.4.4_A2_T01.js"),
    );
    it(
      "S15.7.4.4_A2_T02.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/valueOf/S15.7.4.4_A2_T02.js"),
    );
    it(
      "S15.7.4.4_A2_T03.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/valueOf/S15.7.4.4_A2_T03.js"),
    );
    it(
      "S15.7.4.4_A2_T04.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/valueOf/S15.7.4.4_A2_T04.js"),
    );
    it(
      "S15.7.4.4_A2_T05.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/valueOf/S15.7.4.4_A2_T05.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Number/prototype/valueOf/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/valueOf/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/valueOf/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Number/prototype/valueOf/prop-desc.js"),
    );
  });
});
