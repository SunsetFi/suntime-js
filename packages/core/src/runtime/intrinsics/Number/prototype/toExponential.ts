import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";

import isNumberLike from "../isNumberLike.js";
import toNumber from "../../../algorithms/to-number.js";

const numberProtoToExponentialDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "toExponential",
  func: function* (realm, thisArg, digits: StaticJsValue = realm.types.undefined) {
    // Node is really confusing here, it requires thisArg to be a function???

    if (!isNumberLike(thisArg)) {
      throw Completion.Throw(
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
