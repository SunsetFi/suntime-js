import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import isNumberLike from "../isNumberLike.js";
import toNumber from "../../../algorithms/to-number.js";

const numberProtoToExponentialDeclaration: FunctionIntrinsicPropertyDeclaration =
  {
    name: "toExponential",
    func: function* (realm, thisArg, digits?: StaticJsValue) {
      // Node is really confusing here, it requires thisArg to be a function???

      if (!isNumberLike(thisArg)) {
        throw new ThrowCompletion(
          realm.types.error(
            "TypeError",
            "Number.prototype.toExponential requires that 'this' be a Number",
          ),
        );
      }

      digits = yield* toNumber(digits ?? realm.types.undefined, realm);

      const value = thisArg.value.toExponential(digits.value);

      return realm.types.string(value);
    },
  };

export default numberProtoToExponentialDeclaration;
