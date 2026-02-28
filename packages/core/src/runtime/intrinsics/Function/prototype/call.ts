import isNotUndefined from "../../../../internal/is-not-undefined.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const functionProtoCallDeclaration: IntrinsicPropertyDeclaration = {
  key: "call",
  *func(realm, thisFunc, thisArg, ...args) {
    if (!isStaticJsFunction(thisFunc)) {
      throw Completion.Throw(
        realm.types.error("TypeError", "Function.prototype.call called on a non-function."),
      );
    }

    const result = yield* thisFunc.callEvaluator(
      thisArg ?? realm.types.undefined,
      // These will never be value-undefined.  Undefined is only used to force
      // non-spread args to consider the argument might be missing.
      args.filter(isNotUndefined),
    );
    return result;
  },
};

export default functionProtoCallDeclaration;
