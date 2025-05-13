import {
  ThrowCompletion,
  isThrowCompletion,
} from "../../../../evaluator/completions/ThrowCompletion.js";
import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";
import StaticJsEngineError from "../../../../evaluator/StaticJsEngineError.js";

import { isStaticJsFunction } from "../../../types/index.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoSomeDeclaration: IntrinsicPropertyDeclaration = {
  name: "some",
  *func(realm, thisArg, callback) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (!callback) {
      callback = realm.types.undefined;
    }
    if (!isStaticJsFunction(callback)) {
      // FIXME: NodeJs is doing something aside from casting it to string.
      // Object appears as "#<Object>"
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
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        continue;
      }

      const elementValue = yield* thisObj.getPropertyEvaluator(property);
      const resultCompletion = yield* callback.callEvaluator(
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
          "Expected Array.prototype.some callback to return a normal completion",
        );
      }

      if (resultCompletion.value.toBoolean()) {
        return ReturnCompletion(realm.types.true);
      }
    }

    return ReturnCompletion(realm.types.false);
  },
};

export default arrayProtoSomeDeclaration;
