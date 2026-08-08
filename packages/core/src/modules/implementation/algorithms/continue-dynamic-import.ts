import type { StaticJsModuleImpl } from "#modules/implementation/modules/StaticJsModuleImpl.js";
import type { StaticJsTaskRunner } from "#tasks/StaticJsTaskRunner.js";
import type { StaticJsPromiseCapabilityRecord } from "#types/StaticJsPromise.js";

import { call } from "#algorithms/call.js";
import { performPromiseThen } from "#algorithms/perform-promise-then.js";
import { captureThrownCompletion } from "#evaluator/completions/capture-thrown-completion.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { X } from "#evaluator/completions/X.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";

import { getModuleNamespace } from "./get-module-namespace.js";

export function continueDynamicImport(
  promiseCapability: StaticJsPromiseCapabilityRecord,
  moduleCompletion: StaticJsModuleImpl | Completion.Throw,
  runTask: StaticJsTaskRunner,
) {
  const realm = EvaluationContext.current.realm;
  const { types } = realm;

  if (Completion.Abrupt.is(moduleCompletion)) {
    promiseCapability.reject.callAsync(types.undefined, [Completion.value(moduleCompletion)], {
      runTask,
    });
    return;
  }

  const module = moduleCompletion;
  const loadPromise = module.loadRequestedModules();

  loadPromise.then(
    () => {
      realm.enqueueGenericJob(function* () {
        const link = yield* captureThrownCompletion(module.linkEvaluator());
        if (Completion.Abrupt.is(link)) {
          yield* X(call(promiseCapability.reject, types.undefined, [Completion.value(link)]));
          return;
        }

        const evaluatePromise = yield* module.evaluateEvaluator();

        const onFulfilled = StaticJsNativeFunctionImpl.create(realm, "", function* () {
          const namespace = getModuleNamespace(module);
          yield* X(call(promiseCapability.resolve, types.undefined, [namespace]));
          return types.undefined;
        });

        const onRejected = StaticJsNativeFunctionImpl.create(
          realm,
          "",
          function* (_thisArg, reason) {
            yield* X(call(promiseCapability.reject, types.undefined, [reason]));
            return types.undefined;
          },
        );

        yield* performPromiseThen(evaluatePromise, onFulfilled, onRejected);
      }, runTask);
    },
    (err) => {
      if (Completion.Abrupt.is(err)) {
        realm.enqueueGenericJob(function* () {
          yield* X(call(promiseCapability.reject, types.undefined, [Completion.value(err)]));
        }, runTask);
      }

      // FIXME: Nothing catches this!
      // This can happen if the module resolver fn throws a non runtime error.
      throw err;
    },
  );
}
