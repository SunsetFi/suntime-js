import { promiseReject } from "../../../algorithms/promise-reject.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

export const promiseCtorRejectDeclaration: IntrinsicPropertyDeclaration = {
  key: "reject",
  length: 1,
  *func(realm, _thisArg, reason = realm.types.undefined) {
    return yield* promiseReject(reason, realm);
  },
};
