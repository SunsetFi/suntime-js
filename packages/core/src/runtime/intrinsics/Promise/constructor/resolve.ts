import newPromiseCapability from "../../../algorithms/new-promise-capability.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const promiseCtorResolveDeclaration: IntrinsicPropertyDeclaration = {
  key: "resolve",
  *func(realm, _thisArg, value) {
    const capability = yield* newPromiseCapability(
      realm.types.constructors.Promise,
      realm,
    );
    yield* capability.resolve.callEvaluator(
      realm.types.undefined,
      value ?? realm.types.undefined,
    );
    return capability.promise;
  },
};

export default promiseCtorResolveDeclaration;
