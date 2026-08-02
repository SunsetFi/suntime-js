import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsCyclicModuleImpl } from "#modules/implementation/modules/StaticJsCyclicModuleImpl.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { call } from "#algorithms/call.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { X } from "#evaluator/completions/X.js";
import { assert } from "#utils/assert.js";

export function* asyncModuleExecutionRejected(
  module: StaticJsCyclicModuleImpl,
  error: StaticJsValue,
): EvaluationGenerator<void> {
  if (module.status === "evaluated") {
    assert.notNull(module.evaluationError, "Expected evaluated module to have an evaluation error");
    return;
  }

  assert(
    module.status === "evaluating-async",
    "Expected cyclic module to be in evaluating-async state for async rejection",
  );
  assert.isNumeric(
    module.asyncEvaluationOrder,
    "Expected cyclic module to have a numeric asyncEvaluationOrder for async rejection",
  );
  assert(
    module.evaluationError === null,
    "Expected cyclic module to have no evaluation error for async rejection",
  );

  module.evaluationError = Completion.Throw(error);
  module.status = "evaluated";
  module.asyncEvaluationOrder = "done";

  if (module.topLevelCapability !== null) {
    assert(
      module.cycleRoot === module,
      "Expected cyclic module to be its own cycle root for top-level capability rejection",
    );
    yield* X(call(module.topLevelCapability.reject, module.realm.types.undefined, [error]));
  }

  for (const ancestorModule of module.asyncParentModules) {
    yield* asyncModuleExecutionRejected(ancestorModule, error);
  }
}
