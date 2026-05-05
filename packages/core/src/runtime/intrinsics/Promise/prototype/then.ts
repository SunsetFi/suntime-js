import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { isStaticJsPromise } from "../../../types/StaticJsPromise.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const promiseProtoThenDeclaration: IntrinsicPropertyDeclaration = {
  key: "then",
  length: 2,
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
