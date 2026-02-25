import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsPromise } from "../../../types/StaticJsPromise.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const promiseProtoCatchDeclaration: IntrinsicPropertyDeclaration = {
  key: "catch",
  *func(realm, thisArg, onRejected) {
    if (!isStaticJsPromise(thisArg)) {
      throw new ThrowCompletion(realm.types.error("TypeError", "catch called on non-promise"));
    }

    if (!isStaticJsFunction(onRejected)) {
      throw new ThrowCompletion(realm.types.error("TypeError", "onRejected must be a function."));
    }

    return yield* thisArg.catchEvaluator(onRejected);
  },
};

export default promiseProtoCatchDeclaration;
