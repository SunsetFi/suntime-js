import type { Completion } from "#evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsModuleRecord } from "#modules/implementation-v2/modules/StaticJsModuleRecord.js";

import { Q } from "#evaluator/completions/Q.js";
import {
  StaticJsCyclicModuleRecord,
  type StaticJsCyclicModuleStatus,
} from "#modules/implementation-v2/modules/StaticJsCyclicModuleRecord.js";
import { assert } from "#utils/assert.js";

import { evaluateModuleSync } from "./evaluate-module-sync.js";
import { executeAsyncModule } from "./execute-async-module.js";
import { getImportedModule } from "./get-imported-module.js";
import { incrementModuleAsyncEvaluationCount } from "./increment-module-async-evalutaion-count.js";

const PostEvaluateStatus = new Set<StaticJsCyclicModuleStatus>(["evaluating-async", "evaluated"]);

/**
 * "evaluating" | "evaluating-async" | "evaluated"
 */
const EvaluatingOrEvaluatedStatusAssert = new Set<StaticJsCyclicModuleStatus>([
  "evaluating",
  "evaluating-async",
  "evaluated",
]);

export const innerModuleEvaluation = Q.makeReceiver(function* innerModuleEvaluation(
  module: StaticJsModuleRecord,
  stack: StaticJsModuleRecord[],
  index: number,
): EvaluationGenerator<number | Completion.Throw> {
  if (module instanceof StaticJsCyclicModuleRecord === false) {
    yield* evaluateModuleSync(module);
    return index;
  }

  if (PostEvaluateStatus.has(module.status)) {
    if (module.evaluationError === null) {
      return index;
    }
    return yield* Q(module.evaluationError);
  }

  if (module.status === "evaluating") {
    return index;
  }

  module.status = "evaluating";

  let moduleIndex = index;
  module.dfsAncestorIndex = index;

  module.pendingAsyncDependencies = 0;
  index += 1;
  stack.push(module);

  for (const request of module.requestedModules) {
    let requiredModule: StaticJsModuleRecord = getImportedModule(module, request);
    index = yield* Q(innerModuleEvaluation(requiredModule, stack, index));

    // Nasty hack for typescript reasons.
    // Typescript will erase our requiredModule instanceof check here
    // even if we assign it to a different StaticJsCyclicModule reference
    let _requiredModule = requiredModule;
    if (_requiredModule instanceof StaticJsCyclicModuleRecord) {
      // Create a new variable reference so typescript doesn't erase
      // the StaticJsCyclicModule cast.
      let requiredModule = _requiredModule;

      assert(
        EvaluatingOrEvaluatedStatusAssert.has(requiredModule.status),
        `Invalid inner module evaluation requested module status ${requiredModule.status}`,
      );

      assert(
        requiredModule.status !== "evaluating" || !stack.includes(requiredModule),
        `Inner module evaluation required module is evaluating but not in the stack`,
      );

      if (requiredModule.status === "evaluating") {
        // Not in the spec, but here for type guard purposes.
        assert.isNumeric(
          requiredModule.dfsAncestorIndex,
          `Expected required module to have a numeric dfsAncestorIndex`,
        );
        module.dfsAncestorIndex = Math.min(
          module.dfsAncestorIndex,
          requiredModule.dfsAncestorIndex,
        );
      } else {
        // Note: Spec says we set requiredModule to this, but we
        // need this for typing reasons.
        const cycleRoot = requiredModule.cycleRoot;
        assert.notNull(cycleRoot, `Expected required module to have a non-null cycleRoot`);

        requiredModule = cycleRoot;

        assert(
          PostEvaluateStatus.has(requiredModule.status),
          `Expected required module to have a post-evaluate status`,
        );

        if (requiredModule.evaluationError) {
          return yield* Q(requiredModule.evaluationError);
        }
      }
      if (requiredModule.asyncEvaluationOrder !== null) {
        module.pendingAsyncDependencies += 1;
      }
      requiredModule.asyncParentModules.push(module);
    }
  }

  if (module.hasTLA || module.pendingAsyncDependencies > 0) {
    assert(
      module.asyncEvaluationOrder === null,
      `Expected module _asyncEvaluationOrder to be null before setting it for async evaluation`,
    );
    module.asyncEvaluationOrder = incrementModuleAsyncEvaluationCount();
    if (module.pendingAsyncDependencies === 0) {
      yield* executeAsyncModule(module);
    }
  } else {
    yield* Q(module.executeModule());
  }

  assert(
    stack.indexOf(module) !== stack.lastIndexOf(module),
    "Expected innerModuleEvaluation module to appear at most once in the stack",
  );

  assert(
    module.dfsAncestorIndex <= moduleIndex,
    `Expected innerModuleEvaluation module _dfsAncestorIndex to be less than or equal to moduleIndex`,
  );

  if (module.dfsAncestorIndex === moduleIndex) {
    let done = false;
    while (!done) {
      const requiredModule = stack.pop();

      assert.instance(
        requiredModule,
        StaticJsCyclicModuleRecord,
        `Expected required module to be an instance of StaticJsCyclicModuleRecord`,
      );

      assert(
        requiredModule.asyncEvaluationOrder !== "done",
        `Expected required module _asyncEvaluationOrder to not be "done" when popping from the stack`,
      );

      if (requiredModule.asyncEvaluationOrder === null) {
        requiredModule.status = "evaluated";
      } else {
        requiredModule.status = "evaluating-async";
      }

      if (requiredModule === module) {
        done = true;
      }

      requiredModule.cycleRoot = module;
    }
  }

  return index;
});
