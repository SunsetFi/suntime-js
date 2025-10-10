import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import newPromiseCapability from "./new-promise-capability.js";

export default function* promiseResolve(
  value: StaticJsValue,
  realm: StaticJsRealm,
) {
  const capability = yield* newPromiseCapability(
    realm.types.constructors.Promise,
    realm,
  );
  yield* capability.resolve.callEvaluator(
    realm.types.undefined,
    value ?? realm.types.undefined,
  );
  return capability.promise;
}
