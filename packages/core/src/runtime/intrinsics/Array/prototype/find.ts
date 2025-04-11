import { isThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import {
  NormalCompletion,
  ThrowCompletion,
} from "../../../../evaluator/internal.js";
import StaticJsEngineError from "../../../../evaluator/StaticJsEngineError.js";
import { isStaticJsFunction } from "../../../types/index.js";
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
        realm.types.string(`${callback.toString()} is not a function`),
      );
    }

    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }

    for (let i = 0; i < length; i++) {
      const value = yield* thisObj.getPropertyEvaluator(String(i));
      const resultCompletion = yield* callback.call(
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
        return NormalCompletion(value);
      }
    }

    return NormalCompletion(realm.types.undefined);
  },
};

export default arrayProtoFindDeclaration;
