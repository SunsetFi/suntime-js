import type { StaticJsModule } from "#modules/implementation-v2/modules/StaticJsModule.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { StaticJsCyclicModule } from "#modules/implementation-v2/modules/StaticJsCyclicModule.js";
import { assert } from "#utils/assert.js";

export const evaluateModuleSync = Q.makeReceiver(function* evaluateModuleSync(
  module: StaticJsModule,
) {
  if (module instanceof StaticJsCyclicModule) {
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
