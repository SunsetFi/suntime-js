import { NormalCompletion } from "../../../../evaluator/internal.js";
import {
  isStaticJsArray,
  isStaticJsFunction,
  isStaticJsNull,
  isStaticJsUndefined,
} from "../../../types/index.js";
import createTypeErrorCompletion from "../../errors/TypeError.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoMapDeclaration: IntrinsicPropertyDeclaration = {
  name: "map",
  func: function* (realm, thisArg, callback) {
    if (isStaticJsNull(thisArg) || isStaticJsUndefined(thisArg)) {
      return createTypeErrorCompletion(
        "Array.prototype.map called on null or undefined",
        realm,
      );
    }

    if (!isStaticJsArray(thisArg)) {
      // Seems to do nothing in NodeJs.
      return NormalCompletion(realm.types.undefined);
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

    const resultArray = realm.types.createArray(new Array(length));
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
          yield* resultArray.setPropertyEvaluator(
            String(i),
            resultCompletion.value,
            false,
          );
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

    return NormalCompletion(resultArray);
  },
};

export default arrayProtoMapDeclaration;
