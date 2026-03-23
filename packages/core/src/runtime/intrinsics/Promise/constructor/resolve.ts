import { Completion } from "../../../../evaluator/completions/Completion.js";

import promiseResolve from "../../../algorithms/promise-resolve.js";

import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const promiseCtorResolveDeclaration: IntrinsicPropertyDeclaration = {
  key: "resolve",
  *func(realm, thisArg, value = realm.types.undefined) {
    if (!isStaticJsObjectLike(thisArg)) {
      throw Completion.Throw("TypeError", "Promise.resolve called on non-object");
    }
    return yield* promiseResolve(thisArg, value, realm);
  },
};

export default promiseCtorResolveDeclaration;
