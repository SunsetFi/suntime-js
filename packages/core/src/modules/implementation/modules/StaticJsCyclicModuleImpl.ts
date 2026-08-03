import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsLoadedModuleRequestRecord } from "#modules/implementation/StaticJsLoadedModuleRequestRecord.js";
import type { StaticJsCyclicModuleRecord } from "#modules/StaticJsCyclicModuleRecord.js";
import type { StaticJsPromise, StaticJsPromiseCapabilityRecord } from "#types/StaticJsPromise.js";

import { call } from "#algorithms/call.js";
import { newPromiseCapability } from "#algorithms/new-promise-capability.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { X } from "#evaluator/completions/X.js";
import { innerModuleEvaluation } from "#modules/implementation/algorithms/inner-module-evaluation.js";
import { innerModuleLinking } from "#modules/implementation/algorithms/inner-module-linking.js";
import { innerModuleLoading } from "#modules/implementation/algorithms/inner-module-loading.js";
import { assert } from "#utils/assert.js";

import type { StaticJsModuleRequest } from "../../StaticJsModuleRequest.js";
import type { StaticJsGraphLoadingState } from "../StaticJsGraphLoadingState.js";

import {
  AtLeastLinkedStatus,
  EvaluatingAsyncOrEvaluatedStatus,
  type StaticJsCyclicModuleStatus,
} from "../StaticJsCyclicModuleStatus.js";
import { StaticJsModuleImpl, type StaticJsModuleImplCreateParams } from "./StaticJsModuleImpl.js";

export interface StaticJsCyclicModuleCreateParams extends StaticJsModuleImplCreateParams {
  requestedModules: readonly StaticJsModuleRequest[];
  hasTLA: boolean;
}

/**
 * "unlinked" | "linked" | "evaluating-async" | "evaluated"
 */
const ReadyForLinkStatusAssert = new Set<StaticJsCyclicModuleStatus>([
  "unlinked",
  "linked",
  "evaluating-async",
  "evaluated",
]);

export abstract class StaticJsCyclicModuleImpl
  extends StaticJsModuleImpl
  implements StaticJsCyclicModuleRecord
{
  protected constructor({
    requestedModules,
    hasTLA,
    ...options
  }: StaticJsCyclicModuleCreateParams) {
    super(options);
    this.requestedModules = requestedModules;
    this.hasTLA = hasTLA;
  }

  status: StaticJsCyclicModuleStatus = "new";

  evaluationError: Completion.Throw | null = null;

  dfsAncestorIndex: number | null = null;

  readonly requestedModules: readonly StaticJsModuleRequest[];
  private readonly _loadedModules: StaticJsLoadedModuleRequestRecord[] = [];
  get loadedModules(): readonly StaticJsLoadedModuleRequestRecord[] {
    return this._loadedModules;
  }

  _pushLoadedModule(module: StaticJsLoadedModuleRequestRecord) {
    this._loadedModules.push(module);
  }

  cycleRoot: StaticJsCyclicModuleImpl | null = null;

  readonly hasTLA: boolean;

  asyncEvaluationOrder: number | null | "done" = null;

  topLevelCapability: StaticJsPromiseCapabilityRecord | null = null;

  readonly asyncParentModules: StaticJsCyclicModuleImpl[] = [];
  pendingAsyncDependencies: number | null = null;

  override *loadRequestedModules(): EvaluationGenerator<StaticJsPromise> {
    const promiseCapability = yield* newPromiseCapability(this.realm.intrinsics.Promise);
    const state: StaticJsGraphLoadingState = {
      isLoading: true,
      pendingModulesCount: 1,
      visited: new Set(),
      promiseCapability,
    };

    yield* innerModuleLoading(state, this);

    return promiseCapability.promise;
  }

  abstract initializeEnvironment(): EvaluationGenerator<void>;

  abstract executeModule(
    capability?: StaticJsPromiseCapabilityRecord,
  ): EvaluationGenerator<void | Completion.Throw>;

  override *link(): EvaluationGenerator<null | Completion.Throw> {
    assert(
      ReadyForLinkStatusAssert.has(this.status),
      `Cyclic module status is not in a linkable state: ${this.status}`,
    );

    const stack: StaticJsModuleImpl[] = [];
    const result = yield* innerModuleLinking(this, stack, 0);
    if (Completion.Abrupt.is(result)) {
      for (const requiredModule of stack) {
        if (requiredModule instanceof StaticJsCyclicModuleImpl) {
          assert(
            requiredModule.status === "linking",
            `Expected required module status to be "linking" before checking for unlinked state, but it is ${requiredModule.status}`,
          );
          requiredModule.status = "unlinked";
        }
      }

      assert(
        this.status === "unlinked",
        `Expected failing cyclic innerModuleLinking module to be unlinked, but it is ${this.status}`,
      );
      return yield* Q(result);
    }

    assert(
      AtLeastLinkedStatus.has(this.status),
      `Cyclic module status is not in a post-linkable state: ${this.status}`,
    );

    return null;
  }

  override *evaluate(): EvaluationGenerator<StaticJsPromise> {
    const { status } = this;

    assert(
      AtLeastLinkedStatus.has(status),
      `Cyclic module status is not in a pre-evaluable state: ${this.status}`,
    );

    const { types, intrinsics } = this.realm;

    // oxlint-disable-next-line typescript/no-this-alias
    let module: StaticJsCyclicModuleImpl = this;
    if (status === "evaluating-async" || status === "evaluated") {
      if (this.cycleRoot !== null) {
        // Spec says we change our module target here.
        // We could instead call the root's evaluate, but that might not actually
        // be allowed based on the assert above us.
        module = this.cycleRoot;
      } else {
        assert(
          status === "evaluated" && module.evaluationError !== null,
          "Expected module to be evaluated with an evaluation error if it has no cyclic root",
        );
      }
    }

    if (module.topLevelCapability) {
      return module.topLevelCapability.promise;
    }

    const stack: StaticJsCyclicModuleImpl[] = [];
    const promiseCapability = yield* newPromiseCapability(intrinsics.Promise);
    const result = yield* innerModuleEvaluation(module, stack, 0);
    if (Completion.Throw.is(result)) {
      for (const requiredModule of stack) {
        assert(
          requiredModule.status === "evaluating",
          `Expected required module status to be "evaluating" for error handling, but it is ${requiredModule.status}`,
        );
        requiredModule.status = "evaluated";
        module.evaluationError = result;
      }

      assert(
        module.status === "evaluated",
        `Expected failing cyclic innerModuleEvaluation module to be evaluated, but it is ${module.status}`,
      );

      assert(
        module.evaluationError === result,
        `Expected failing cyclic innerModuleEvaluation module to have the evaluation error result`,
      );
      yield* X(call(promiseCapability.reject, types.undefined, [result.value]));
    } else {
      assert(
        EvaluatingAsyncOrEvaluatedStatus.has(module.status),
        `Cyclic module status is not in a post-evaluable state: ${module.status}`,
      );

      assert(
        module.evaluationError === null,
        `Expected successful cyclic innerModuleEvaluation module to have no evaluation error`,
      );

      if (module.status === "evaluated") {
        assert(
          module.asyncEvaluationOrder === null || module.asyncEvaluationOrder === "done",
          `Expected successful cyclic innerModuleEvaluation module to have asyncEvaluationOrder done or null`,
        );
        yield* X(call(promiseCapability.resolve, types.undefined, []));
      }

      assert(stack.length === 0, `Expected stack to be empty after evaluation`);
    }

    return promiseCapability.promise;
  }
}
