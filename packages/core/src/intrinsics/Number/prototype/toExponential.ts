import type { StaticJsValue } from "#types/StaticJsValue.js";

import { toNumber } from "#algorithms/to-number.js";
import { Completion } from "#evaluator/completions/Completion.js";

import type { FunctionIntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

import isNumberLike from "../isNumberLike.js";

const numberProtoToExponentialDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "toExponential",
  length: 1,
  func: function* (realm, thisArg, digits: StaticJsValue = realm.types.undefined) {
    // Node is really confusing here, it requires thisArg to be a function???

    if (!isNumberLike(thisArg)) {
      throw yield* Completion.Throw.create(
        "TypeError",
        "Number.prototype.toExponential requires that 'this' be a Number",
      );
    }

    digits = yield* toNumber(digits);

    const value = thisArg.value.toExponential(digits.value);

    return realm.types.string(value);
  },
};

export default numberProtoToExponentialDeclaration;
