import {
  ThrowCompletion,
  isThrowCompletion,
} from "../../../../evaluator/completions/ThrowCompletion.js";
import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";
import StaticJsEngineError from "../../../../errors/StaticJsEngineError.js";

import {
  isStaticJsArray,
  isStaticJsFunction,
  StaticJsValue,
} from "../../../types/index.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoMapDeclaration: IntrinsicPropertyDeclaration = {
  name: "map",
  *func(realm, thisArg, callback, providedThisArg) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (!isStaticJsArray(thisArg)) {
      // Seems to do nothing in NodeJs.
      return ReturnCompletion(realm.types.undefined);
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

    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }

    const resultArray: StaticJsValue[] = new Array(length);
    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        // map does not invoke for, and preserves, empties.
        continue;
      }

      const elementValue = yield* thisArg.getPropertyEvaluator(property);
      const resultCompletion = yield* callback.callEvaluator(
        providedThisArg ?? thisArg,
        elementValue,
        realm.types.number(i),
        thisArg,
      );
      if (resultCompletion.type === "throw") {
        return resultCompletion;
      }
      if (
        resultCompletion.type !== "normal" ||
        resultCompletion.value == null
      ) {
        throw new StaticJsEngineError(
          "Expected Array.prototype.map callback to return a normal completion",
        );
      }

      resultArray[i] = resultCompletion.value;
    }

    return ReturnCompletion(realm.types.array(resultArray));
  },
};

export default arrayProtoMapDeclaration;
