import newPromiseCapability from "../../../algorithms/new-promise-capability.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const promiseCtorRejectDeclaration: IntrinsicPropertyDeclaration = {
  key: "reject",
  *func(realm, _thisArg, reason) {
    const capability = yield* newPromiseCapability(
      realm.types.constructors.Promise,
      realm,
    );
    yield* capability.reject.callEvaluator(
      realm.types.undefined,
      reason ?? realm.types.undefined,
    );
    return capability.promise;
  },
};

export default promiseCtorRejectDeclaration;
