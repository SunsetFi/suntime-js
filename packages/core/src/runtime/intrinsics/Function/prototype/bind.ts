import isNotUndefined from "../../../../internal/is-not-undefined.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";

import StaticJsBoundFunction from "../../../types/implementation/StaticJsBoundFunctionImpl.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const functionProtoBindDeclaration: IntrinsicPropertyDeclaration = {
  key: "bind",
  *func(realm, self, thisArg, ...args) {
    if (!isStaticJsFunction(self)) {
      throw Completion.Throw(
        realm.types.error("TypeError", "Bind must be called on a function"),
      );
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
