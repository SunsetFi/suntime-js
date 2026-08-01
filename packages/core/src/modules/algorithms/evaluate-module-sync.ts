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

  const promise = yield* module.evaluate();
  assert(
    promise.promiseState !== "fulfilled" && promise.promiseState !== "rejected",
    "Promise should not be in a terminal state here",
  );

  if (promise.promiseState === "rejected") {
    promise.markRejectionHandled();
    throw Completion.Throw(promise.promiseResult!);
  }
});
