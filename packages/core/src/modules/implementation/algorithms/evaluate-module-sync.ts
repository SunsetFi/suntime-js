import type { StaticJsModuleImpl } from "#modules/implementation/modules/StaticJsModuleImpl.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { StaticJsCyclicModuleImpl } from "#modules/implementation/modules/StaticJsCyclicModuleImpl.js";
import { assert } from "#utils/assert.js";

export const evaluateModuleSync = Q.makeReceiver(function* evaluateModuleSync(
  module: StaticJsModuleImpl,
) {
  if (module instanceof StaticJsCyclicModuleImpl) {
    throw new StaticJsEngineError("Unexpected cyclic module in evaluateModuleSync");
  }

  const promise = yield* module.evaluateEvaluator();
  assert(
    promise.promiseState === "fulfilled" || promise.promiseState === "rejected",
    "evaluateModuleSync evaluate should result in a terminal promise.",
  );

  if (promise.promiseState === "rejected") {
    promise.markRejectionHandled();
    throw Completion.Throw(promise.promiseResult!);
  }
});
