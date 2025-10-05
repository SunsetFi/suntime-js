import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsString } from "../../../types/StaticJsString.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const functionProtoBindDeclaration: IntrinsicPropertyDeclaration = {
  key: "bind",
  *func(realm, self, thisArg, ...args) {
    if (!isStaticJsFunction(self)) {
      throw new ThrowCompletion(
        realm.types.error("TypeError", "Bind must be called on a function"),
      );
    }

    if (!thisArg || isStaticJsUndefined(thisArg)) {
      thisArg = realm.globalThis;
    }

    let name = yield* self.getPropertyEvaluator("name");
    if (!isStaticJsString(name)) {
      name = realm.types.string("<anonymous>");
    }

    name = realm.types.string("bound " + name.value);

    // The only reason we type them as maybe undefined is to force our code
    // to assume it might not get them for non-spread parameters.
    const cleanedArgs = args.filter(isNotUndefined);

    return new StaticJsFunctionImpl(realm, name.value, function* (
      _thisArg,
      ...moreArgs
    ) {
      return yield* self.callEvaluator(thisArg, ...cleanedArgs, ...moreArgs);
    });
  },
};

function isNotUndefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

export default functionProtoBindDeclaration;
