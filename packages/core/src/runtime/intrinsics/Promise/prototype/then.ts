import { Completion } from "../../../../evaluator/completions/Completion.js";

import { isStaticJsPromise } from "../../../types/StaticJsPromise.js";

import { isCallable } from "../../../algorithms/is-callable.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const promiseProtoThenDeclaration: IntrinsicPropertyDeclaration = {
  key: "then",
  *func(
    realm,
    thisArg = realm.types.undefined,
    onFulfilled = realm.types.undefined,
    onRejected = realm.types.undefined,
  ) {
    if (!isStaticJsPromise(thisArg)) {
      throw Completion.Throw("TypeError", "then called on non-promise");
    }

    // Spec says these can be unspecified and also non-functions
    if (!isCallable(onFulfilled)) {
      onFulfilled = undefined;
    }
    if (!isCallable(onRejected)) {
      onRejected = undefined;
    }

    return yield* thisArg.thenEvaluator(onFulfilled, onRejected);
  },
};

export default promiseProtoThenDeclaration;
