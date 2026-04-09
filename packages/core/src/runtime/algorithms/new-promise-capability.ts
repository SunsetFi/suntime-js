import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { StaticJsNativeFunctionImpl } from "../types/implementation/functions/StaticJsNativeFunctionImpl.js";

import { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsFunction } from "../types/StaticJsFunction.js";
import { StaticJsCallable } from "../types/StaticJsCallable.js";
import {
  isStaticJsPromise,
  type StaticJsPromiseCapabilityRecord,
} from "../types/StaticJsPromise.js";

import { isCallable } from "./is-callable.js";

export default function* newPromiseCapability(
  constructor: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsPromiseCapabilityRecord> {
  if (!isStaticJsFunction(constructor) || !constructor.isConstructor) {
    throw Completion.Throw("TypeError", "Promise constructor must be a constructor");
  }

  let resolveFunc: StaticJsCallable | null = null;
  let rejectFunc: StaticJsCallable | null = null;

  const resolver = new StaticJsNativeFunctionImpl(
    realm,
    "resolver",
    function* (_thisArg, resolve, reject) {
      if (resolveFunc !== null || rejectFunc !== null) {
        throw Completion.Throw("TypeError", "Promise resolver called multiple times");
      }

      if (!isCallable(resolve) || !isCallable(reject)) {
        throw Completion.Throw("TypeError", "Resolve and reject must be functions");
      }

      resolveFunc = resolve;
      rejectFunc = reject;

      return realm.types.undefined;
    },
  );

  const promise = yield* constructor.constructEvaluator([resolver]);
  if (resolveFunc == null || rejectFunc == null) {
    throw Completion.Throw("TypeError", "Promise resolver did not get called");
  }

  // Our 'regular' constructor replaces the object instance with itself,
  // but still maintains the object prototype chain.
  if (!isStaticJsPromise(promise)) {
    throw Completion.Throw("TypeError", "Promise constructor did not result in a promise");
  }

  return {
    promise,
    resolve: resolveFunc,
    reject: rejectFunc,
  };
}
