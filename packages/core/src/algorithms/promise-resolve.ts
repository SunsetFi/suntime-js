import { EvaluationContext } from "../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";
import { isStaticJsPromise, type StaticJsPromise } from "../runtime/types/StaticJsPromise.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

import { call } from "./call.js";
import { get } from "./get.js";
import { newPromiseCapability } from "./new-promise-capability.js";

export function* promiseResolve(
  constructor: StaticJsObject,
  value: StaticJsValue,
  realm?: StaticJsRealm,
): EvaluationGenerator<StaticJsPromise> {
  if (isStaticJsPromise(value)) {
    const constructor = yield* get(value, "constructor");
    if (constructor === constructor) {
      return value;
    }
  }

  if (!realm) {
    realm = EvaluationContext.current.realm;
  }

  const capability = yield* newPromiseCapability(constructor, realm);
  yield* call(capability.resolve, realm.types.undefined, [value ?? realm.types.undefined]);
  return capability.promise;
}
