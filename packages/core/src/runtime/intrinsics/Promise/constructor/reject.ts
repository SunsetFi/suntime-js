import promiseReject from "../../../algorithms/promise-reject.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const promiseCtorRejectDeclaration: IntrinsicPropertyDeclaration = {
  key: "reject",
  *func(realm, _thisArg, reason) {
    return yield* promiseReject(reason ?? realm.types.undefined, realm);
  },
};

export default promiseCtorRejectDeclaration;
