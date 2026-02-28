import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";

import isNumberLike from "../isNumberLike.js";
import toNumber from "../../../algorithms/to-number.js";

const numberProtoToPrecisionDeclaration: FunctionIntrinsicPropertyDeclaration =
  {
    key: "toPrecision",
    func: function* (realm, thisArg, digits?: StaticJsValue) {
      // Node is really confusing here, it requires thisArg to be a function???

      if (!isNumberLike(thisArg)) {
        throw Completion.Throw(
          realm.types.error(
            "TypeError",
            "Number.prototype.toPrecision requires that 'this' be a Number",
          ),
        );
      }

      digits = yield* toNumber(digits ?? realm.types.undefined, realm);

      const value = thisArg.value.toPrecision(digits.value);

      return realm.types.string(value);
    },
  };

export default numberProtoToPrecisionDeclaration;
