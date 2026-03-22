import { Completion } from "../../../../evaluator/completions/Completion.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsPromise } from "../../../types/StaticJsPromise.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const promiseProtoCatchDeclaration: IntrinsicPropertyDeclaration = {
  key: "catch",
  *func(_realm, thisArg, onRejected) {
    if (!isStaticJsPromise(thisArg)) {
      throw Completion.Throw("TypeError", "catch called on non-promise");
    }

    if (!isStaticJsFunction(onRejected)) {
      throw Completion.Throw("TypeError", "onRejected must be a function.");
    }

    return yield* thisArg.catchEvaluator(onRejected);
  },
};

export default promiseProtoCatchDeclaration;
