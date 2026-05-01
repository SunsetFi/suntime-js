import { Completion } from "../../../../evaluator/completions/Completion.js";
import { promiseResolve } from "../../../algorithms/promise-resolve.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

export const promiseCtorResolveDeclaration: IntrinsicPropertyDeclaration = {
  key: "resolve",
  length: 1,
  *func(realm, thisArg, value = realm.types.undefined) {
    if (!isStaticJsObject(thisArg)) {
      throw Completion.Throw("TypeError", "Promise.resolve called on non-object");
    }
    return yield* promiseResolve(thisArg, value, realm);
  },
};
