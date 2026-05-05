import { Completion } from "../../../../evaluator/completions/Completion.js";
import { toNumber } from "../../../algorithms/to-number.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";
import isNumberLike from "../isNumberLike.js";

const numberProtoToPrecisionDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "toPrecision",
  length: 1,
  func: function* (realm, thisArg, digits: StaticJsValue = realm.types.undefined) {
    // Node is really confusing here, it requires thisArg to be a function???

    if (!isNumberLike(thisArg)) {
      throw Completion.Throw(
        "TypeError",
        "Number.prototype.toPrecision requires that 'this' be a Number",
      );
    }

    digits = yield* toNumber(digits);

    const value = thisArg.value.toPrecision(digits.value);

    return realm.types.string(value);
  },
};

export default numberProtoToPrecisionDeclaration;
