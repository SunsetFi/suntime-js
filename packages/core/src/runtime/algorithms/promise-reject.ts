import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsPromise } from "../types/StaticJsPromise.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { call } from "./call.js";
import { newPromiseCapability } from "./new-promise-capability.js";

export function* promiseReject(
  value: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsPromise> {
  const capability = yield* newPromiseCapability(realm.intrinsics.Promise, realm);
  yield* call(capability.reject, realm.types.undefined, [value ?? realm.types.undefined]);
  return capability.promise;
}
