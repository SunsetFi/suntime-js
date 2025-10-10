import promiseResolve from "../../../algorithms/promise-resolve.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const promiseCtorResolveDeclaration: IntrinsicPropertyDeclaration = {
  key: "resolve",
  *func(realm, _thisArg, value) {
    return yield* promiseResolve(value ?? realm.types.undefined, realm);
  },
};

export default promiseCtorResolveDeclaration;
