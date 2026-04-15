import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isNotUndefined } from "../../../../utils/is-not-undefined.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { StaticJsBoundFunction } from "../../../types/implementation/functions/StaticJsBoundFunctionImpl.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

const functionProtoBindDeclaration: IntrinsicPropertyDeclaration = {
  key: "bind",
  *func(realm, self, thisArg, ...args) {
    if (!isCallable(self)) {
      throw Completion.Throw("TypeError", "Bind must be called on a function");
    }

    if (!thisArg || isStaticJsUndefined(thisArg)) {
      thisArg = realm.globalThis;
    }

    // The only reason we type them as maybe undefined is to force our code
    // to assume it might not get them for non-spread parameters.
    const cleanedArgs = args.filter(isNotUndefined);

    return yield* StaticJsBoundFunction.create(realm, self, thisArg, cleanedArgs);
  },
};

export default functionProtoBindDeclaration;
