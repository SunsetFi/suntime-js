import { NormalCompletion } from "../../../../evaluator/internal.js";
import {
  isStaticJsArray,
  isStaticJsFunction,
  isStaticJsNull,
  isStaticJsUndefined,
  StaticJsArray,
  StaticJsValue,
} from "../../../types/index.js";
import createTypeErrorCompletion from "../../errors/TypeError.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoReduceRightDeclaration: IntrinsicPropertyDeclaration = {
  name: "reduceRight",
  *func(realm, thisArg, callback, initialValue) {
    if (isStaticJsNull(thisArg) || isStaticJsUndefined(thisArg)) {
      return createTypeErrorCompletion(
        "Array.prototype.reduce called on null or undefined",
        realm,
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
      thisArray = realm.types.createArray();
    }

    if (!callback) {
      callback = realm.types.undefined;
    }

    if (!isStaticJsFunction(callback)) {
      return createTypeErrorCompletion(
        `${callback.toString()} is not a function`,
        realm,
      );
    }

    const length = yield* thisArray.getLengthEvaluator();
    if (length === 0) {
      if (initialValue == null) {
        return createTypeErrorCompletion(
          "Reduce of empty array with no initial value",
          realm,
        );
      }

      return NormalCompletion(initialValue);
    }

    let value: StaticJsValue;
    let startIndex;
    if (initialValue) {
      value = initialValue;
      startIndex = length - 1;
    } else {
      value = yield* thisArray.getPropertyEvaluator(String(length - 1));
      startIndex = length - 2;
    }

    for (let i = startIndex; i >= 0; i--) {
      const elementValue = yield* thisArray.getPropertyEvaluator(String(i));
      const resultCompletion = yield* callback.call(
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
        throw new Error(
          "Expected result completion to return a value, but got undefined",
        );
      }

      value = resultCompletion.value;
    }

    return NormalCompletion(value);
  },
};

export default arrayProtoReduceRightDeclaration;
