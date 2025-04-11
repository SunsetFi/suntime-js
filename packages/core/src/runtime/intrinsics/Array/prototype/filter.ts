import { isThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import { NormalCompletion } from "../../../../evaluator/internal.js";
import StaticJsEngineError from "../../../../evaluator/StaticJsEngineError.js";
import { isStaticJsFunction, StaticJsValue } from "../../../types/index.js";
import createTypeErrorCompletion from "../../errors/TypeError.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";
import getLength from "./utils/get-length.js";

const arrayProtoFilterDeclaration: IntrinsicPropertyDeclaration = {
  name: "filter",
  *func(realm, thisArg, callback) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (!callback) {
      callback = realm.types.undefined;
    }

    if (!isStaticJsFunction(callback)) {
      return createTypeErrorCompletion(
        `${callback.toString()} is not a function`,
        realm,
      );
    }

    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }

    const resultItems: StaticJsValue[] = [];
    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        continue;
      }

      const elementValue = yield* thisObj.getPropertyEvaluator(property);
      const resultCompletion = yield* callback.call(
        thisObj,
        elementValue,
        realm.types.number(i),
        thisObj,
      );
      if (resultCompletion.type === "throw") {
        return resultCompletion;
      }
      if (resultCompletion.type !== "normal" || !resultCompletion.value) {
        throw new StaticJsEngineError(
          "Expected Array.prototype.filter invocation completion to return a value, but got undefined",
        );
      }

      if (resultCompletion.value.toBoolean()) {
        resultItems.push(elementValue);
      }
    }

    return NormalCompletion(realm.types.array(resultItems));
  },
};

export default arrayProtoFilterDeclaration;
