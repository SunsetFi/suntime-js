import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isNotUndefined } from "../../../../utils/is-not-undefined.js";
import { call } from "../../../algorithms/call.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

export const functionProtoCallDeclaration: IntrinsicPropertyDeclaration = {
  key: "call",
  length: 1,
  *func(realm, thisFunc, thisArg = realm.types.undefined, ...args) {
    if (!isCallable(thisFunc)) {
      throw Completion.Throw("TypeError", "Function.prototype.call called on a non-function.");
    }

    const result = yield* call(
      thisFunc,
      thisArg,
      // These will never be value-undefined.  Undefined is only used to force
      // non-spread args to consider the argument might be missing.
      args.filter(isNotUndefined),
    );
    return result;
  },
};
