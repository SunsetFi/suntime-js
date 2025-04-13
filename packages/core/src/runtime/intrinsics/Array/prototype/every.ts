import ThrowCompletion, {
  isThrowCompletion,
} from "../../../../evaluator/completions/ThrowCompletion.js";
import { NormalCompletion } from "../../../../evaluator/internal.js";
import StaticJsEngineError from "../../../../evaluator/StaticJsEngineError.js";

import { isStaticJsFunction } from "../../../types/index.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";
import getLength from "./utils/get-length.js";

const arrayProtoEveryDeclaration: IntrinsicPropertyDeclaration = {
  name: "every",
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

    if (length === 0) {
      return NormalCompletion(realm.types.false);
    }

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
          "Expected result completion to return a value, but got undefined",
        );
      }

      if (!resultCompletion.value.toBoolean()) {
        return NormalCompletion(realm.types.false);
      }
    }

    return NormalCompletion(realm.types.true);
  },
};

export default arrayProtoEveryDeclaration;
