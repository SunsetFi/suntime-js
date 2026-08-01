import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type {
  StaticJsCyclicModuleImpl,
  StaticJsCyclicModuleStatus,
} from "#modules/implementation/modules/StaticJsCyclicModuleImpl.js";

import { newPromiseCapability } from "#algorithms/new-promise-capability.js";
import { performPromiseThen } from "#algorithms/perform-promise-then.js";
import { Q } from "#evaluator/completions/Q.js";
import { X } from "#evaluator/completions/X.js";
import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { assert } from "#utils/assert.js";

import { asyncModuleExecutionFulfilled } from "./async-module-execution-fulfilled.js";
import { asyncModuleExecutionRejected } from "./async-module-execution-rejected.js";

/**
 * "evaluating" | "evaluating-async"
 */
const EvaluatingStatusAssert = new Set<StaticJsCyclicModuleStatus>([
  "evaluating",
  "evaluating-async",
]);

export const executeAsyncModule = Q.makeReceiver(function* executeAsyncModule(
  module: StaticJsCyclicModuleImpl,
): EvaluationGenerator<void> {
  assert(
    EvaluatingStatusAssert.has(module.status),
    `Expected cyclic module to be in an evaluating state for async execution, but it is ${module.status}`,
  );

  assert(module.hasTLA, `Expected cyclic module to have a top-level await for async execution`);

  const promiseCapability = yield* newPromiseCapability(module.realm.intrinsics.Promise);

  const onFulfilled = StaticJsNativeFunctionImpl.create(
    module.realm,
    "",
    function* () {
      yield* asyncModuleExecutionFulfilled(module);
      return module.realm.types.undefined;
    },
    {
      captures: [module],
    },
  );
  const onRejected = StaticJsNativeFunctionImpl.create(
    module.realm,
    "",
    function* (reason) {
      yield* asyncModuleExecutionRejected(module, reason);
      return module.realm.types.undefined;
    },
    {
      captures: [module],
    },
  );

  yield* performPromiseThen(promiseCapability.promise, onFulfilled, onRejected);
  yield* X(module.executeModule(promiseCapability));
});
