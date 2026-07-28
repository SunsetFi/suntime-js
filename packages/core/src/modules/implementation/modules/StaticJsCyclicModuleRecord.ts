import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsPromise, StaticJsPromiseCapabilityRecord } from "#types/StaticJsPromise.js";

import { call } from "#algorithms/call.js";
import { newPromiseCapability } from "#algorithms/new-promise-capability.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { X } from "#evaluator/completions/X.js";
import { innerModuleEvaluation } from "#modules/algorithms/inner-module-evaluation.js";
import { innerModuleLinking } from "#modules/algorithms/inner-module-linking.js";
import { innerModuleLoading } from "#modules/algorithms/inner-module-loading.js";
import { assert } from "#utils/assert.js";

import type { StaticJsModuleRequest } from "../../StaticJsModuleRequest.js";
import type { StaticJsGraphLoadingState } from "../StaticJsGraphLoadingState.js";
import type { StaticJsLoadedModuleRequestRecord } from "../StaticJsLoadedModuleRequestRecord.js";

import {
  StaticJsModuleRecord,
  type StaticJsModuleRecordCreateParams,
} from "./StaticJsModuleRecord.js";

export type StaticJsCyclicModuleStatus =
  | "new"
  | "unlinked"
  | "linking"
  | "linked"
  | "evaluating"
  | "evaluating-async"
  | "evaluated";

export interface StaticJsCyclicModuleCreateParams extends StaticJsModuleRecordCreateParams {
  requestedModules: readonly StaticJsModuleRequest[];
  hasTLA: boolean;
}

/**
 * "unlinked" | "linked" | "evaluating-async" | "evaluated"
 */
const LinkStatusAssert = new Set<StaticJsCyclicModuleStatus>([
  "unlinked",
  "linked",
  "evaluating-async",
  "evaluated",
]);

/**
 * "linked" | "evaluating-async" | "evaluated"
 */
const PostLinkStatusAssert = new Set<StaticJsCyclicModuleStatus>([
  "linked",
  "evaluating-async",
  "evaluated",
]);

/**
 * "linked" | "evaluating-async" | "evaluated"
 */
const PreEvaluateStatusAssert = new Set<StaticJsCyclicModuleStatus>([
  "linked",
  "evaluating-async",
  "evaluated",
]);

/**
 * "evaluating-async" | "evaluated"
 */
const PostEvaluateStatusAssert = new Set<StaticJsCyclicModuleStatus>([
  "evaluating-async",
  "evaluated",
]);

export abstract class StaticJsCyclicModuleRecord extends StaticJsModuleRecord {
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
  readonly loadedModules: StaticJsLoadedModuleRequestRecord[] = [];

  cycleRoot: StaticJsCyclicModuleRecord | null = null;

  readonly hasTLA: boolean;

  asyncEvaluationOrder: number | null | "done" = null;

  topLevelCapability: StaticJsPromiseCapabilityRecord | null = null;

  readonly asyncParentModules: StaticJsCyclicModuleRecord[] = [];
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
      LinkStatusAssert.has(this.status),
      `Cyclic module status is not in a linkable state: ${this.status}`,
    );

    const stack: StaticJsModuleRecord[] = [];
    const result = yield* innerModuleLinking(this, stack, 0);
    if (Completion.Abrupt.is(result)) {
      for (const requiredModule of stack) {
        if (requiredModule instanceof StaticJsCyclicModuleRecord) {
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
      PostLinkStatusAssert.has(this.status),
      `Cyclic module status is not in a post-linkable state: ${this.status}`,
    );

    return null;
  }

  override *evaluate(): EvaluationGenerator<StaticJsPromise> {
    const { status } = this;

    assert(
      PreEvaluateStatusAssert.has(status),
      `Cyclic module status is not in a pre-evaluable state: ${this.status}`,
    );

    const { types, intrinsics } = this.realm;

    // oxlint-disable-next-line typescript/no-this-alias
    let module: StaticJsCyclicModuleRecord = this;
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

    const stack: StaticJsCyclicModuleRecord[] = [];
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
      yield* X(call(promiseCapability.promise, types.undefined, [result.value]));
    } else {
      assert(
        PostEvaluateStatusAssert.has(module.status),
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
        yield* X(call(promiseCapability.promise, types.undefined, []));
      }

      assert(stack.length === 0, `Expected stack to be empty after evaluation`);
    }

    return promiseCapability.promise;
  }
}
