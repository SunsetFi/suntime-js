import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsCyclicModuleImpl } from "#modules/implementation/modules/StaticJsCyclicModuleImpl.js";

import { call } from "#algorithms/call.js";
import { captureThrownCompletion } from "#evaluator/completions/capture-thrown-completion.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { X } from "#evaluator/completions/X.js";
import { assert } from "#utils/assert.js";

import { asyncModuleExecutionRejected } from "./async-module-execution-rejected.js";
import { executeAsyncModule } from "./execute-async-module.js";
import { gatherAvailableAncestors } from "./gather-available-ancestors.js";

export const asyncModuleExecutionFulfilled = Q.makeReceiver(function* asyncModuleExecutionFulfilled(
  module: StaticJsCyclicModuleImpl,
): EvaluationGenerator<void> {
  const { types } = module.realm;
  const { status } = module;
  if (status === "evaluated") {
    assert.notNull(
      module.evaluationError,
      `Expected cyclic module to have an evaluation error if it is evaluated on fulfilled`,
    );
    return;
  }

  assert(
    status === "evaluating-async",
    `Expected cyclic module to be in evaluating-async state for async fulfillment`,
  );
  assert.isNumeric(
    module.asyncEvaluationOrder,
    `Expected cyclic module to have a numeric asyncEvaluationOrder for async fulfillment`,
  );
  assert(
    module.evaluationError === null,
    `Expected cyclic module to have no evaluation error for async fulfillment`,
  );

  module.asyncEvaluationOrder = "done";
  module.status = "evaluated";
  if (module.topLevelCapability != null) {
    assert(
      module.cycleRoot === module,
      `Expected cyclic module to be its own cycle root for top-level capability fulfillment`,
    );
    yield* X(call(module.topLevelCapability.resolve, types.undefined, [types.undefined]));
  }

  const execList = new Set<StaticJsCyclicModuleImpl>();
  gatherAvailableAncestors(module, execList);
  assert(() => {
    for (const ancestorModule of execList) {
      if (typeof ancestorModule.asyncEvaluationOrder !== "number") {
        return "asyncModuleExecutionFulfilled ancestor has no async evaluation order";
      }
      if (ancestorModule.pendingAsyncDependencies !== 0) {
        return "asyncModuleExecutionFulfilled ancestor has pending async dependencies";
      }
      if (ancestorModule.evaluationError !== null) {
        return "asyncModuleExecutionFulfilled ancestor has an evaluation error";
      }
    }
    return null;
  });

  const sortedExecList = Array.from(execList).sort(
    (a, b) => (a.asyncEvaluationOrder as number) - (b.asyncEvaluationOrder as number),
  );

  for (const ancestorModule of sortedExecList) {
    if (ancestorModule.status === "evaluated") {
      // SPEC WEIRDNESS: We asserted above that these are all null, so.... huh?
      assert(
        ancestorModule.evaluationError !== null,
        "Expected evaluated ancestor module to have an evaluation error",
      );
    } else if (ancestorModule.hasTLA) {
      yield* executeAsyncModule(ancestorModule);
    } else {
      const result = yield* captureThrownCompletion(ancestorModule.executeModule());
      if (Completion.Abrupt.is(result)) {
        yield* asyncModuleExecutionRejected(module, Completion.value(result));
      } else {
        ancestorModule.asyncEvaluationOrder = "done";
        ancestorModule.status = "evaluated";
        if (ancestorModule.topLevelCapability !== null) {
          assert(
            ancestorModule.cycleRoot === ancestorModule,
            "Expected ancestor module to be its own cycle root for top-level capability fulfillment",
          );
          yield* X(
            call(ancestorModule.topLevelCapability.resolve, types.undefined, [types.undefined]),
          );
        }
      }
    }
  }
});
