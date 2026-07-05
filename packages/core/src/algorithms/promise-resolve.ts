import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { isStaticJsPromise, type StaticJsPromise } from "#types/StaticJsPromise.js";

import { call } from "./call.js";
import { get } from "./get.js";
import { newPromiseCapability } from "./new-promise-capability.js";

export function* promiseResolve(
  constructor: StaticJsObject,
  value: StaticJsValue,
): EvaluationGenerator<StaticJsPromise> {
  if (isStaticJsPromise(value)) {
    const constructor = yield* get(value, "constructor");
    if (constructor === constructor) {
      return value;
    }
  }

  const realm = EvaluationContext.current.realm;
  const capability = yield* newPromiseCapability(constructor);
  yield* call(capability.resolve, realm.types.undefined, [value ?? realm.types.undefined]);
  return capability.promise;
}
