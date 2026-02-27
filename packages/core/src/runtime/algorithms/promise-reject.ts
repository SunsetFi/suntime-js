import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsPromise } from "../types/StaticJsPromise.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import newPromiseCapability from "./new-promise-capability.js";

export default function* promiseReject(
  value: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsPromise> {
  const capability = yield* newPromiseCapability(realm.types.constructors.Promise, realm);
  yield* capability.reject.callEvaluator(realm.types.undefined, [value ?? realm.types.undefined]);
  return capability.promise;
}
