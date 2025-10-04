import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsArray } from "../../../types/StaticJsArray.js";
import { isStaticJsArray } from "../../../types/StaticJsArray.js";
import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoReduceDeclaration: IntrinsicPropertyDeclaration = {
  key: "reduce",
  *func(realm, thisArg, callback, initialValue) {
    if (isStaticJsNull(thisArg) || isStaticJsUndefined(thisArg)) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          "Array.prototype.reduce called on null or undefined",
        ),
      );
    }

    // For some baffling reason, this doesn't work.
    // The type guard is completely ignored and it claims thisArg can be ObjectLike
    // if (!isStaticJsArray(thisArg)) {
    //   // Behaves as if empty.
    //   thisArg = realm.types.createArray();
    // }
    let thisArray: StaticJsArray;
    if (isStaticJsArray(thisArg)) {
      thisArray = thisArg;
    } else {
      thisArray = realm.types.array();
    }

    if (!callback) {
      callback = realm.types.undefined;
    }

    if (!isStaticJsFunction(callback)) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          `${callback.toStringSync()} is not a function`,
        ),
      );
    }

    const length = yield* thisArray.getLengthEvaluator();
    if (length === 0) {
      if (initialValue == null) {
        throw new ThrowCompletion(
          realm.types.error(
            "TypeError",
            "Reduce of empty array with no initial value",
          ),
        );
      }

      return initialValue;
    }

    let value: StaticJsValue;
    let startIndex;
    if (initialValue) {
      value = initialValue;
      startIndex = 0;
    } else {
      value = yield* thisArray.getPropertyEvaluator("0");
      startIndex = 1;
    }

    for (let i = startIndex; i < length; i++) {
      const elementValue = yield* thisArray.getPropertyEvaluator(String(i));
      const result = yield* callback.callEvaluator(
        thisArray,
        value,
        elementValue,
        realm.types.number(i),
        thisArray,
      );

      value = result;
    }

    return value;
  },
};

export default arrayProtoReduceDeclaration;
