import promiseResolve from "../../../algorithms/promise-resolve.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const promiseCtorResolveDeclaration: IntrinsicPropertyDeclaration = {
  key: "resolve",
  *func(realm, _thisArg, value = realm.types.undefined) {
    return yield* promiseResolve(value, realm);
  },
};

export default promiseCtorResolveDeclaration;
