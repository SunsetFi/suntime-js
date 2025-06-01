import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";
import StaticJsEngineError from "../../../../errors/StaticJsEngineError.js";

import {
  StaticJsArray,
  isStaticJsArray,
} from "../../../types/interfaces/StaticJsArray.js";
import { isStaticJsFunction } from "../../../types/interfaces/StaticJsFunction.js";
import { isStaticJsNull } from "../../../types/interfaces/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/interfaces/StaticJsUndefined.js";
import { StaticJsValue } from "../../../types/interfaces/StaticJsValue.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoReduceDeclaration: IntrinsicPropertyDeclaration = {
  name: "reduce",
  *func(realm, thisArg, callback, initialValue) {
    if (isStaticJsNull(thisArg) || isStaticJsUndefined(thisArg)) {
      return ThrowCompletion(
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
      return ThrowCompletion(
        realm.types.error(
          "TypeError",
          `${callback.toString()} is not a function`,
        ),
      );
    }

    const length = yield* thisArray.getLengthEvaluator();
    if (length === 0) {
      if (initialValue == null) {
        return ThrowCompletion(
          realm.types.error(
            "TypeError",
            "Reduce of empty array with no initial value",
          ),
        );
      }

      return ReturnCompletion(initialValue);
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
      const resultCompletion = yield* callback.callEvaluator(
        thisArray,
        value,
        elementValue,
        realm.types.number(i),
        thisArray,
      );

      if (resultCompletion.type === "throw") {
        return resultCompletion;
      }

      if (
        resultCompletion.type !== "normal" ||
        resultCompletion.value == null
      ) {
        throw new StaticJsEngineError(
          "Expected Array.prototype.reduce callback to return a normal completion",
        );
      }

      value = resultCompletion.value;
    }

    return ReturnCompletion(value);
  },
};

export default arrayProtoReduceDeclaration;
