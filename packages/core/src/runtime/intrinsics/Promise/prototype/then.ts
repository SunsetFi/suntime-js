import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsPromise } from "../../../types/StaticJsPromise.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const promiseProtoThenDeclaration: IntrinsicPropertyDeclaration = {
  key: "then",
  *func(realm, thisArg, onFulfilled, onRejected) {
    // FIXME: Support subclassing.  Somehow.
    if (!isStaticJsPromise(thisArg)) {
      throw new ThrowCompletion(
        realm.types.error("TypeError", "Then called on non-promise"),
      );
    }

    // Spec says these can be unspecified and also non-functions
    if (!isStaticJsFunction(onFulfilled)) {
      onFulfilled = undefined;
    }
    if (!isStaticJsFunction(onRejected)) {
      onRejected = undefined;
    }

    return yield* thisArg.thenEvaluator(onFulfilled, onRejected);
  },
};

export default promiseProtoThenDeclaration;
