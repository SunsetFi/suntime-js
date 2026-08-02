import type { StaticJsModuleImpl } from "#modules/implementation/modules/StaticJsModuleImpl.js";
import type { StaticJsPromiseCapabilityRecord } from "#types/StaticJsPromise.js";

import { call } from "#algorithms/call.js";
import { performPromiseThen } from "#algorithms/perform-promise-then.js";
import { captureThrownCompletion } from "#evaluator/completions/capture-thrown-completion.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { X } from "#evaluator/completions/X.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";

import { getModuleNamespace } from "./get-module-namespace.js";

export function* continueDynamicImport(
  promiseCapability: StaticJsPromiseCapabilityRecord,
  moduleCompletion: StaticJsModuleImpl | Completion.Throw,
) {
  const realm = EvaluationContext.current.realm;
  const { types } = realm;

  if (Completion.Abrupt.is(moduleCompletion)) {
    yield* X(call(promiseCapability.reject, types.undefined, [Completion.value(moduleCompletion)]));
    return;
  }

  const module = moduleCompletion;
  const loadPromise = yield* module.loadRequestedModules();

  const onRejected = StaticJsNativeFunctionImpl.create(realm, "", function* (_thisArg, reason) {
    yield* X(call(promiseCapability.reject, types.undefined, [reason]));
    return types.undefined;
  });

  const linkAndEvaluate = StaticJsNativeFunctionImpl.create(
    realm,
    "",
    function* () {
      const link = yield* captureThrownCompletion(module.link());
      if (Completion.Abrupt.is(link)) {
        yield* X(call(promiseCapability.reject, types.undefined, [Completion.value(link)]));
        return types.undefined;
      }

      const evaluatePromise = yield* module.evaluate();

      const onFulfilled = StaticJsNativeFunctionImpl.create(realm, "", function* () {
        const namespace = getModuleNamespace(module);
        yield* X(call(promiseCapability.resolve, types.undefined, [namespace]));
        return types.undefined;
      });

      yield* performPromiseThen(evaluatePromise, onFulfilled, onRejected);
      return types.undefined;
    },
    {
      captures: [module, onRejected],
    },
  );

  yield* performPromiseThen(loadPromise, linkAndEvaluate, onRejected);
}
