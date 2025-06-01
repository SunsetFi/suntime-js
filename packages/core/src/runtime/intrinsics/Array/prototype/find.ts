import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";
import {
  ThrowCompletion,
  isThrowCompletion,
} from "../../../../evaluator/completions/ThrowCompletion.js";
import StaticJsEngineError from "../../../../errors/StaticJsEngineError.js";

import { isStaticJsFunction } from "../../../types/interfaces/StaticJsFunction.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoFindDeclaration: IntrinsicPropertyDeclaration = {
  name: "find",
  *func(realm, thisArg, callback) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (callback == null) {
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

    for (let i = 0; i < length; i++) {
      const value = yield* thisObj.getPropertyEvaluator(String(i));
      const resultCompletion = yield* callback.callEvaluator(
        thisObj,
        value,
        realm.types.number(i),
        thisObj,
      );
      if (resultCompletion.type === "throw") {
        return resultCompletion;
      }
      if (resultCompletion.type !== "normal" || !resultCompletion.value) {
        throw new StaticJsEngineError(
          "Expected Array.prototype.find callback invocation to return a normal completion",
        );
      }

      const result = resultCompletion.value;
      if (result.toBoolean()) {
        return ReturnCompletion(value);
      }
    }

    return ReturnCompletion(realm.types.undefined);
  },
};

export default arrayProtoFindDeclaration;
