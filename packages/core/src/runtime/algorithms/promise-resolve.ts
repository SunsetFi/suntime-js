import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import { isStaticJsPromise, type StaticJsPromise } from "../types/StaticJsPromise.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import call from "./call.js";
import { get } from "./get.js";

import newPromiseCapability from "./new-promise-capability.js";

export default function* promiseResolve(
  constructor: StaticJsObjectLike,
  value: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsPromise> {
  if (isStaticJsPromise(value)) {
    const constructor = yield* get(value, "constructor");
    if (constructor === constructor) {
      return value;
    }
  }

  const capability = yield* newPromiseCapability(constructor, realm);
  yield* call(capability.resolve, realm.types.undefined, [value ?? realm.types.undefined]);
  return capability.promise;
}
