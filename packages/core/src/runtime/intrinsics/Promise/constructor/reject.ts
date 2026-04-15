import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { promiseReject } from "../../../algorithms/promise-reject.js";

const promiseCtorRejectDeclaration: IntrinsicPropertyDeclaration = {
  key: "reject",
  *func(realm, _thisArg, reason = realm.types.undefined) {
    return yield* promiseReject(reason, realm);
  },
};

export default promiseCtorRejectDeclaration;
