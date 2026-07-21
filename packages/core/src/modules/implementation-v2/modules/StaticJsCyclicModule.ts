import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsPromise, StaticJsPromiseCapabilityRecord } from "#types/StaticJsPromise.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { call } from "#algorithms/call.js";
import { newPromiseCapability } from "#algorithms/new-promise-capability.js";
import { performPromiseThen } from "#algorithms/perform-promise-then.js";
import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { captureThrownCompletion } from "#evaluator/completions/capture-thrown-completion.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { X } from "#evaluator/completions/X.js";
import { evaluateModuleSync } from "#modules/algorithms/evaluate-module-sync.js";
import { getImportedModule } from "#modules/algorithms/get-imported-module.js";
import { incrementModuleAsyncEvaluationCount } from "#modules/algorithms/increment-module-async-evalutaion-count.js";
import { innerModuleLoading } from "#modules/algorithms/inner-module-loading.js";
import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { assert } from "#utils/assert.js";

import type { StaticJsGraphLoadingState } from "../StaticJsGraphLoadingState.js";
import type { StaticJsLoadedModuleRequest } from "../StaticJsLoadedModuleRequest.js";
import type { StaticJsModuleRequest } from "../StaticJsModuleRequest.js";

import { StaticJsModule, type StaticJsModuleCreateOptions } from "./StaticJsModule.js";

export type StaticJsCyclicModuleStatus =
  | "new"
  | "unlinked"
  | "linking"
  | "linked"
  | "evaluating"
  | "evaluating-async"
  | "evaluated";

export interface StaticJsCyclicModuleCreateOptions extends StaticJsModuleCreateOptions {}

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
 * "linking" | "linked" | "evaluating-async" | "evaluated"
 */
const LinkingOrPostLinkStatusAssert = new Set<StaticJsCyclicModuleStatus>([
  "linking",
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

/**
 * "evaluating" | "evaluating-async"
 */
const EvaluatingStatusAssert = new Set<StaticJsCyclicModuleStatus>([
  "evaluating",
  "evaluating-async",
]);
/**
 * "evaluating" | "evaluating-async" | "evaluated"
 */
const EvaluatingOrEvaluatedStatusAssert = new Set<StaticJsCyclicModuleStatus>([
  "evaluating",
  "evaluating-async",
  "evaluated",
]);

export abstract class StaticJsCyclicModule extends StaticJsModule {
  private _status: StaticJsCyclicModuleStatus = "new";

  private _evaluationError: Completion.Throw | null = null;

  private _dfsAncestorIndex: number | null = null;

  private readonly _requestedModules: StaticJsModuleRequest[] = [];
  private readonly _loadedModules: StaticJsLoadedModuleRequest[] = [];

  private _cycleRoot: StaticJsCyclicModule | null = null;

  private _hasTLA: boolean = false;

  private _asyncEvaluationOrder: number | null | "done" = null;

  private _topLevelCapability: StaticJsPromiseCapabilityRecord | null = null;

  private readonly _asyncParentModules: StaticJsCyclicModule[] = [];
  private _pendingAsyncDependencies: number | null = null;

  protected constructor(options: StaticJsCyclicModuleCreateOptions) {
    super(options);
  }

  get status() {
    return this._status;
  }

  get evaluationError() {
    return this._evaluationError;
  }

  get requestedModules() {
    return this._requestedModules;
  }

  get loadedModules() {
    return this._loadedModules;
  }

  get asyncParentModules() {
    return this._asyncParentModules;
  }

  get cycleRoot() {
    return this._cycleRoot;
  }

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
  ): EvaluationGenerator<StaticJsPromise>;

  override *link(): EvaluationGenerator<null | Completion.Throw> {
    assert(
      LinkStatusAssert.has(this.status),
      `Cyclic module status is not in a linkable state: ${this.status}`,
    );

    const stack: StaticJsModule[] = [];
    const result = yield* StaticJsCyclicModule._innerModuleLinking(this, stack, 0);
    if (Completion.Abrupt.is(result)) {
      for (const requiredModule of stack) {
        if (requiredModule instanceof StaticJsCyclicModule) {
          assert(
            requiredModule._status === "linking",
            `Expected required module status to be "linking" before checking for unlinked state, but it is ${requiredModule._status}`,
          );
          requiredModule._status = "unlinked";
        }
      }

      assert(
        this._status === "unlinked",
        `Expected failing cyclic innerModuleLinking module to be unlinked, but it is ${this._status}`,
      );
      return yield* Q(result);
    }

    assert(
      PostLinkStatusAssert.has(this._status),
      `Cyclic module status is not in a post-linkable state: ${this._status}`,
    );

    return null;
  }

  private static readonly _innerModuleLinking = Q.makeReceiver(function* innerModuleLinking(
    module: StaticJsModule,
    stack: StaticJsModule[],
    index: number,
  ): EvaluationGenerator<number | Completion.Throw> {
    if (module instanceof StaticJsCyclicModule === false) {
      yield* Q(module.link());
      return index;
    }

    if (LinkingOrPostLinkStatusAssert.has(module.status)) {
      return index;
    }

    assert(
      module.status === "unlinked",
      `Expected cyclic module status to be "unlinked" before linking, but it is ${module.status}`,
    );

    module._status = "linking";
    const moduleIndex = index;
    module._dfsAncestorIndex = index;
    index += 1;
    stack.push(module);

    for (const request of module.requestedModules) {
      const requiredModule = yield* getImportedModule(module, request);
      index = yield* Q(innerModuleLinking(requiredModule, stack, index));
      if (requiredModule instanceof StaticJsCyclicModule) {
        assert(
          LinkingOrPostLinkStatusAssert.has(requiredModule.status),
          `Cyclic module required module status is not in a post-linkable state: ${requiredModule.status}`,
        );

        assert(
          requiredModule.status !== "linking" || stack.includes(requiredModule),
          `Cyclic module required module status is linking but not in the stack`,
        );

        if (requiredModule.status === "linking") {
          // Not an assert in the spec, but ??
          if (requiredModule._dfsAncestorIndex === null) {
            throw new StaticJsEngineError(
              "Cyclic module required module dfsAncestorIndex is null while linking: " +
                requiredModule.status,
            );
          }
          module._dfsAncestorIndex = Math.min(
            module._dfsAncestorIndex,
            requiredModule._dfsAncestorIndex,
          );
        }
      }
    }

    yield* Q(module.initializeEnvironment());

    assert(
      stack.indexOf(module) === stack.lastIndexOf(module),
      `Cyclic module is in the stack more than once`,
    );

    if (module._dfsAncestorIndex > moduleIndex) {
      throw new StaticJsEngineError(
        "Cyclic module dfsAncestorIndex is greater than moduleIndex: " + module.status,
      );
    }

    if (module._dfsAncestorIndex === moduleIndex) {
      let done = false;
      while (!done) {
        const requiredModule = stack.pop();
        if (requiredModule instanceof StaticJsCyclicModule === false) {
          throw new StaticJsEngineError("Cyclic module required module is not a cyclic module");
        }
        requiredModule._status = "linked";
        if (requiredModule === module) {
          done = true;
        }
      }
    }

    return index;
  });

  override *evaluate(): EvaluationGenerator<StaticJsPromise> {
    const { _status: status } = this;

    assert(
      PreEvaluateStatusAssert.has(status),
      `Cyclic module status is not in a pre-evaluable state: ${this._status}`,
    );

    const { types, intrinsics } = this.realm;

    // oxlint-disable-next-line typescript/no-this-alias
    let module: StaticJsCyclicModule = this;
    if (status === "evaluating-async" || status === "evaluated") {
      if (this._cycleRoot !== null) {
        // Spec says we change our module target here.
        // We could instead call the root's evaluate, but that might not actually
        // be allowed based on the assert above us.
        module = this._cycleRoot;
      } else {
        assert(
          status === "evaluated" && module._evaluationError !== null,
          "Expected module to be evaluated with an evaluation error if it has no cyclic root",
        );
      }
    }

    if (module._topLevelCapability) {
      return module._topLevelCapability.promise;
    }

    const stack: StaticJsCyclicModule[] = [];
    const promiseCapability = yield* newPromiseCapability(intrinsics.Promise);
    const result = yield* StaticJsCyclicModule.innerModuleEvaluation(module, stack, 0);
    if (Completion.Throw.is(result)) {
      for (const requiredModule of stack) {
        assert(
          requiredModule._status === "evaluating",
          `Expected required module status to be "evaluating" for error handling, but it is ${requiredModule._status}`,
        );
        requiredModule._status = "evaluated";
        module._evaluationError = result;
      }

      assert(
        module._status === "evaluated",
        `Expected failing cyclic innerModuleEvaluation module to be evaluated, but it is ${module._status}`,
      );

      assert(
        module._evaluationError === result,
        `Expected failing cyclic innerModuleEvaluation module to have the evaluation error result`,
      );
      yield* X(call(promiseCapability.promise, types.undefined, [result.value]));
    } else {
      assert(
        PostEvaluateStatusAssert.has(module._status),
        `Cyclic module status is not in a post-evaluable state: ${module._status}`,
      );

      assert(
        module._evaluationError === null,
        `Expected successful cyclic innerModuleEvaluation module to have no evaluation error`,
      );

      if (module._status === "evaluated") {
        assert(
          module._asyncEvaluationOrder === null || module._asyncEvaluationOrder === "done",
          `Expected successful cyclic innerModuleEvaluation module to have asyncEvaluationOrder done or null`,
        );
        yield* X(call(promiseCapability.promise, types.undefined, []));
      }

      assert(stack.length === 0, `Expected stack to be empty after evaluation`);
    }

    return promiseCapability.promise;
  }

  private static readonly innerModuleEvaluation = Q.makeReceiver(function* innerModuleEvaluation(
    module: StaticJsModule,
    stack: StaticJsModule[],
    index: number,
  ): EvaluationGenerator<number | Completion.Throw> {
    if (module instanceof StaticJsCyclicModule === false) {
      yield* evaluateModuleSync(module);
      return index;
    }

    if (PostEvaluateStatusAssert.has(module._status)) {
      if (module._evaluationError === null) {
        return index;
      }
      return yield* Q(module._evaluationError);
    }

    if (module._status === "evaluating") {
      return index;
    }

    module._status = "evaluating";

    let moduleIndex = index;
    module._dfsAncestorIndex = index;

    module._pendingAsyncDependencies = 0;
    index += 1;
    stack.push(module);

    for (const request of module.requestedModules) {
      let requiredModule = yield* getImportedModule(module, request);
      index = yield* Q(StaticJsCyclicModule.innerModuleEvaluation(requiredModule, stack, index));

      // Nasty hack for typescript reasons.
      // Typescript will erase our requiredModule instanceof check here
      // even if we assign it to a different StaticJsCyclicModule reference
      let _requiredModule = requiredModule;
      if (_requiredModule instanceof StaticJsCyclicModule) {
        // Create a new variable reference so typescript doesn't erase
        // the StaticJsCyclicModule cast.
        let requiredModule = _requiredModule;

        assert(
          EvaluatingOrEvaluatedStatusAssert.has(requiredModule._status),
          `Invalid inner module evaluation requested module status ${requiredModule._status}`,
        );

        assert(
          requiredModule._status !== "evaluating" || !stack.includes(requiredModule),
          `Inner module evaluation required module is evaluating but not in the stack`,
        );

        if (requiredModule._status === "evaluating") {
          // Not in the spec, but here for type guard purposes.
          assert.numeric(
            requiredModule._dfsAncestorIndex,
            `Expected required module to have a numeric dfsAncestorIndex`,
          );
          module._dfsAncestorIndex = Math.min(
            module._dfsAncestorIndex,
            requiredModule._dfsAncestorIndex,
          );
        } else {
          // Note: Spec says we set requiredModule to this, but we
          // need this for typing reasons.
          const cycleRoot = requiredModule._cycleRoot;
          if (cycleRoot === null) {
            throw new StaticJsEngineError(
              `Inner module evaluation required module has null cycleRoot`,
            );
          }

          requiredModule = cycleRoot;

          assert(
            PostEvaluateStatusAssert.has(requiredModule._status),
            `Expected required module to have a post-evaluate status`,
          );

          if (requiredModule._evaluationError) {
            return yield* Q(requiredModule._evaluationError);
          }
        }
        if (requiredModule._asyncEvaluationOrder !== null) {
          module._pendingAsyncDependencies += 1;
        }
        requiredModule._asyncParentModules.push(module);
      }
    }

    if (module._hasTLA || module._pendingAsyncDependencies > 0) {
      assert(
        module._asyncEvaluationOrder === null,
        `Expected module _asyncEvaluationOrder to be null before setting it for async evaluation`,
      );
      module._asyncEvaluationOrder = incrementModuleAsyncEvaluationCount();
      if (module._pendingAsyncDependencies === 0) {
        yield* module._executeAsyncModule();
      }
    } else {
      yield* Q(module.executeModule());
    }

    assert(
      stack.indexOf(module) !== stack.lastIndexOf(module),
      "Expected innerModuleEvaluation module to appear at most once in the stack",
    );

    assert(
      module._dfsAncestorIndex <= moduleIndex,
      `Expected innerModuleEvaluation module _dfsAncestorIndex to be less than or equal to moduleIndex`,
    );

    if (module._dfsAncestorIndex === moduleIndex) {
      let done = false;
      while (!done) {
        const requiredModule = stack.pop();
        if (requiredModule instanceof StaticJsCyclicModule === false) {
          throw new StaticJsEngineError(
            `Expected required module to be an instance of StaticJsCyclicModule`,
          );
        }

        assert(
          requiredModule._asyncEvaluationOrder !== "done",
          `Expected required module _asyncEvaluationOrder to not be "done" when popping from the stack`,
        );

        if (requiredModule._asyncEvaluationOrder === null) {
          requiredModule._status = "evaluated";
        } else {
          requiredModule._status = "evaluating-async";
        }

        if (requiredModule === module) {
          done = true;
        }

        requiredModule._cycleRoot = module;
      }
    }

    return index;
  });

  private *_executeAsyncModule(): EvaluationGenerator<void> {
    assert(
      EvaluatingStatusAssert.has(this._status),
      `Expected cyclic module to be in an evaluating state for async execution, but it is ${this._status}`,
    );

    assert(this._hasTLA, `Expected cyclic module to have a top-level await for async execution`);

    const promiseCapability = yield* newPromiseCapability(this.realm.intrinsics.Promise);

    // oxlint-disable-next-line typescript/no-this-alias
    const module = this;
    const onFulfilled = StaticJsNativeFunctionImpl.create(
      this.realm,
      "",
      function* () {
        yield* module._asyncModuleExecutionFulfilled();
        return module.realm.types.undefined;
      },
      {
        captures: [this],
      },
    );
    const onRejected = StaticJsNativeFunctionImpl.create(
      this.realm,
      "",
      function* (reason) {
        yield* module._asyncModuleExecutionRejected(reason);
        return module.realm.types.undefined;
      },
      {
        captures: [this],
      },
    );

    yield* performPromiseThen(promiseCapability.promise, onFulfilled, onRejected);
    yield* X(module.executeModule(promiseCapability));
  }

  private *_asyncModuleExecutionFulfilled(): EvaluationGenerator<void> {
    const { types } = this.realm;
    const { status } = this;
    if (status === "evaluated") {
      assert(
        this._evaluationError !== null,
        `Expected cyclic module to have an evaluation error if it is evaluated on fulfilled`,
      );
      return;
    }

    assert(
      status === "evaluating-async",
      `Expected cyclic module to be in evaluating-async state for async fulfillment`,
    );
    assert.numeric(
      this._asyncEvaluationOrder,
      `Expected cyclic module to have a numeric asyncEvaluationOrder for async fulfillment`,
    );
    assert(
      this._evaluationError === null,
      `Expected cyclic module to have no evaluation error for async fulfillment`,
    );

    this._asyncEvaluationOrder = "done";
    this._status = "evaluated";
    if (this._topLevelCapability != null) {
      assert(
        this._cycleRoot === this,
        `Expected cyclic module to be its own cycle root for top-level capability fulfillment`,
      );
      yield* X(call(this._topLevelCapability.resolve, types.undefined, [types.undefined]));
    }

    const execList = new Set<StaticJsCyclicModule>();
    StaticJsCyclicModule.gatherAvailableAncestors(this, execList);
    assert(() => {
      for (const ancestorModule of execList) {
        if (typeof ancestorModule._asyncEvaluationOrder !== "number") {
          return "asyncModuleExecutionFulfilled ancestor has no async evaluation order";
        }
        if (ancestorModule._pendingAsyncDependencies !== 0) {
          return "asyncModuleExecutionFulfilled ancestor has pending async dependencies";
        }
        if (ancestorModule._evaluationError !== null) {
          return "asyncModuleExecutionFulfilled ancestor has an evaluation error";
        }
      }
      return null;
    });

    const sortedExecList = Array.from(execList).sort(
      (a, b) => (a._asyncEvaluationOrder as number) - (b._asyncEvaluationOrder as number),
    );

    for (const ancestorModule of sortedExecList) {
      if (ancestorModule._status === "evaluated") {
        // SPEC WEIRDNESS: We asserted above that these are all null, so.... huh?
        assert(
          ancestorModule.evaluationError !== null,
          "Expected evaluated ancestor module to have an evaluation error",
        );
      } else if (ancestorModule._hasTLA) {
        yield* ancestorModule._executeAsyncModule();
      } else {
        const result = yield* captureThrownCompletion(ancestorModule.executeModule());
        if (Completion.Abrupt.is(result)) {
          yield* this._asyncModuleExecutionRejected(Completion.value(result));
        } else {
          ancestorModule._asyncEvaluationOrder = "done";
          ancestorModule._status = "evaluated";
          if (ancestorModule._topLevelCapability !== null) {
            assert(
              ancestorModule._cycleRoot === ancestorModule,
              "Expected ancestor module to be its own cycle root for top-level capability fulfillment",
            );
            yield* X(
              call(ancestorModule._topLevelCapability.resolve, types.undefined, [types.undefined]),
            );
          }
        }
      }
    }
  }

  private *_asyncModuleExecutionRejected(error: StaticJsValue): EvaluationGenerator<void> {
    if (this.status === "evaluated") {
      assert(
        this.evaluationError !== null,
        "Expected evaluated module to have an evaluation error",
      );
      return;
    }

    assert(
      this.status === "evaluating-async",
      "Expected cyclic module to be in evaluating-async state for async rejection",
    );
    assert.numeric(
      this._asyncEvaluationOrder,
      "Expected cyclic module to have a numeric asyncEvaluationOrder for async rejection",
    );
    assert(
      this.evaluationError === null,
      "Expected cyclic module to have no evaluation error for async rejection",
    );

    this._evaluationError = Completion.Throw(error);
    this._status = "evaluated";
    this._asyncEvaluationOrder = "done";

    if (this._topLevelCapability !== null) {
      assert(
        this._cycleRoot === this,
        "Expected cyclic module to be its own cycle root for top-level capability rejection",
      );
      yield* X(call(this._topLevelCapability.reject, this.realm.types.undefined, [error]));
    }

    for (const ancestorModule of this._asyncParentModules) {
      yield* ancestorModule._asyncModuleExecutionRejected(error);
    }
  }

  private static gatherAvailableAncestors(
    module: StaticJsCyclicModule,
    execList: Set<StaticJsCyclicModule>,
  ) {
    for (const ancestorModule of module.asyncParentModules) {
      // Spec weirdness: Shouldn't these all have the same cycleRoot?  And nothing we
      // are doing here can set an evaluationError?
      if (!execList.has(ancestorModule) && ancestorModule.cycleRoot?.evaluationError === null) {
        assert(
          ancestorModule.status === "evaluating-async",
          "gatherAvailableAncestors ancestor module is expected to be in 'evaluating-async' status",
        );
        assert(
          ancestorModule.evaluationError === null,
          "gatherAvailableAncestors ancestor module is expected to have no evaluation error",
        );

        assert.numeric(
          ancestorModule._pendingAsyncDependencies,
          "gatherAvailableAncestors ancestor module is expected to have a numeric _pendingAsyncDependencies",
        );
        assert(
          ancestorModule._pendingAsyncDependencies > 0,
          "gatherAvailableAncestors ancestor module is expected to have a positive number of pending async dependencies",
        );
        ancestorModule._pendingAsyncDependencies -= 1;
        if (ancestorModule._pendingAsyncDependencies === 0) {
          execList.add(ancestorModule);
        }
        if (!ancestorModule._hasTLA) {
          StaticJsCyclicModule.gatherAvailableAncestors(ancestorModule, execList);
        }
      }
    }
  }
}
