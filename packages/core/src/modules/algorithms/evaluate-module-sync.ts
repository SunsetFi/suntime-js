import type { StaticJsModuleRecord } from "#modules/implementation-v2/modules/StaticJsModuleRecord.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { StaticJsCyclicModuleRecord } from "#modules/implementation-v2/modules/StaticJsCyclicModuleRecord.js";
import { assert } from "#utils/assert.js";

export const evaluateModuleSync = Q.makeReceiver(function* evaluateModuleSync(
  module: StaticJsModuleRecord,
) {
  if (module instanceof StaticJsCyclicModuleRecord) {
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
