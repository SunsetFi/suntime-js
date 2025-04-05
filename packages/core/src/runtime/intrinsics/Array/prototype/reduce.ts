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

const arrayProtoReduceDeclaration: IntrinsicPropertyDeclaration = {
  name: "reduce",
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
    if (initialValue) {
      value = initialValue;
    } else {
      value = yield* thisArray.getPropertyEvaluator("0");
    }

    for (let i = 0; i < length; i++) {
      const elementValue = yield* thisArray.getPropertyEvaluator(String(i));
      const resultCompletion = yield* callback.call(
        thisArray,
        value,
        elementValue,
        realm.types.number(i),
        thisArray,
      );
      switch (resultCompletion.type) {
        case "normal":
          if (!resultCompletion.value) {
            throw new Error(
              "Expected result completion to return a value, but got undefined",
            );
          }
          value = resultCompletion.value;
          break;
        case "throw":
          return resultCompletion;
        default:
          throw new Error(
            "Expected result completion to return normal or throw, but got " +
              resultCompletion.type,
          );
      }
    }

    return NormalCompletion(value);
  },
};

export default arrayProtoReduceDeclaration;
