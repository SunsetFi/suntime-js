import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";

import {
  isStaticJsFunction,
  type StaticJsFunction,
} from "../types/StaticJsFunction.js";
import {
  isStaticJsPromise,
  type StaticJsPromiseCapabilityRecord,
} from "../types/StaticJsPromise.js";

export default function* newPromiseCapability(
  constructor: StaticJsFunction,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsPromiseCapabilityRecord> {
  if (!constructor.isConstructor) {
    throw new ThrowCompletion(
      realm.types.error(
        "TypeError",
        "Promise constructor must be a constructor",
      ),
    );
  }

  let resolveFunc: StaticJsFunction | null = null;
  let rejectFunc: StaticJsFunction | null = null;

  const resolver = new StaticJsFunctionImpl(realm, "resolver", function* (
    _thisArg,
    resolve,
    reject,
  ) {
    if (resolveFunc !== null || rejectFunc !== null) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          "Promise resolver called multiple times",
        ),
      );
    }

    if (!isStaticJsFunction(resolve) || !isStaticJsFunction(reject)) {
      throw new ThrowCompletion(
        realm.types.error("TypeError", "Resolve and reject must be functions"),
      );
    }

    resolveFunc = resolve;
    rejectFunc = reject;

    return realm.types.undefined;
  });

  const promise = yield* constructor.constructEvaluator([resolver]);
  if (resolveFunc == null || rejectFunc == null) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Promise resolver did not get called"),
    );
  }

  // Our 'regular' constructor replaces the object instance with itself,
  // but still maintains the object prototype chain.
  if (!isStaticJsPromise(promise)) {
    throw new ThrowCompletion(
      realm.types.error(
        "TypeError",
        "Promise constructor did not result in a promise",
      ),
    );
  }

  return {
    promise,
    resolve: resolveFunc,
    reject: rejectFunc,
  };
}
