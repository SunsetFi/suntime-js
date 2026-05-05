import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { isStaticJsPromise } from "../../../types/StaticJsPromise.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const promiseProtoCatchDeclaration: IntrinsicPropertyDeclaration = {
  key: "catch",
  length: 1,
  *func(realm, thisArg, onRejected = realm.types.undefined) {
    if (!isStaticJsPromise(thisArg)) {
      throw Completion.Throw("TypeError", "catch called on non-promise");
    }

    if (!isCallable(onRejected)) {
      throw Completion.Throw("TypeError", "onRejected must be a function.");
    }

    return yield* thisArg.catchEvaluator(onRejected);
  },
};

export default promiseProtoCatchDeclaration;
