import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsPromise } from "#types/StaticJsPromise.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { EvaluationContext } from "#evaluator/EvaluationContext.js";

import { call } from "./call.js";
import { newPromiseCapability } from "./new-promise-capability.js";

export function* promiseReject(value: StaticJsValue): EvaluationGenerator<StaticJsPromise> {
  const realm = EvaluationContext.current.realm;
  const capability = yield* newPromiseCapability(realm.intrinsics.Promise);
  yield* call(capability.reject, realm.types.undefined, [value ?? realm.types.undefined]);
  return capability.promise;
}
