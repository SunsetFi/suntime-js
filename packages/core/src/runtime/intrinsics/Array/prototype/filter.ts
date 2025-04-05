import { NormalCompletion } from "../../../../evaluator/internal.js";
import {
  isStaticJsArray,
  isStaticJsFunction,
  isStaticJsNull,
  isStaticJsUndefined,
  StaticJsValue,
} from "../../../types/index.js";
import createTypeErrorCompletion from "../../errors/TypeError.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoFilterDeclaration: IntrinsicPropertyDeclaration = {
  name: "filter",
  func: function* (realm, thisArg, callback) {
    if (isStaticJsNull(thisArg) || isStaticJsUndefined(thisArg)) {
      return createTypeErrorCompletion(
        "Array.prototype.filter called on null or undefined",
        realm,
      );
    }
    if (!isStaticJsArray(thisArg)) {
      // Seems to do nothing in NodeJs.
      return NormalCompletion(realm.types.createArray([]));
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

    const length = yield* thisArg.getLengthEvaluator();
    if (length === 0) {
      return NormalCompletion(realm.types.createArray([]));
    }

    const resultItems: StaticJsValue[] = [];
    for (let i = 0; i < length; i++) {
      const elementValue = yield* thisArg.getPropertyEvaluator(String(i));
      const resultCompletion = yield* callback.call(
        thisArg,
        elementValue,
        realm.types.number(i),
        thisArg,
      );
      switch (resultCompletion.type) {
        case "normal":
          if (!resultCompletion.value) {
            throw new Error(
              "Expected result completion to return a value, but got undefined",
            );
          }
          if (resultCompletion.value.toBoolean()) {
            resultItems.push(elementValue);
          }
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

    return NormalCompletion(realm.types.createArray(resultItems));
  },
};

export default arrayProtoFilterDeclaration;
