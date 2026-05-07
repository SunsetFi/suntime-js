import { expressionStatement, file, program } from "@babel/types";

import { StaticJsConcurrentEvaluationError } from "../../../errors/StaticJsConcurrentEvaluationError.js";
import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { StaticJsSynchronousTaskIncompleteError } from "../../../errors/StaticJsSynchronousTaskIncompleteError.js";
import { StaticJsSyntaxError } from "../../../errors/StaticJsSyntaxError.js";
import { StaticJsTaskAbortedError } from "../../../errors/StaticJsTaskAbortedError.js";
import { StaticJsUnhandledRejectionError } from "../../../errors/StaticJsUnhandledRejectionError.js";
import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";
import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { EvaluationContext } from "../../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { globalDeclarationInstantiation } from "../../../evaluator/instantiation/global-declaration-instantiation.js";
import { StaticJsScriptRecord } from "../../../evaluator/ScriptOrModuleRecord/StaticJsScriptRecord.js";
import { type StaticJsEvaluator, invokeEvaluator } from "../../../evaluator/StaticJsEvaluator.js";
import { findTopLevelAwait } from "../../../parser/find-top-level-await.js";
import { parseExpression } from "../../../parser/parse-expression.js";
import { parseModule } from "../../../parser/parse-module.js";
import { parseScript } from "../../../parser/parse-script.js";
import { createDeferred } from "../../../utils/create-deferred.js";
import { hasOwnProperty } from "../../../utils/has-own-property.js";
import { symbolInspect } from "../../../utils/symbol-inspect.js";
import { getValue } from "../../algorithms/get-value.js";
import { AsyncInvocation } from "../../async/AsyncInvocation.js";
import { StaticJsDeclarativeEnvironmentRecord } from "../../environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import { StaticJsGlobalEnvironmentRecord } from "../../environments/implementation/StaticJsGlobalEnvironmentRecord.js";
import { StaticJsObjectEnvironmentRecord } from "../../environments/implementation/StaticJsObjectEnvironmentRecord.js";
import type { RealmHooks } from "../../hooks/hooks.js";
import { populateIntrinsics } from "../../intrinsics/create-intrinsics.js";
import { Intrinsics, IntrinsicsRecord } from "../../intrinsics/intrinsics.js";
import { populateGlobal } from "../../intrinsics/populate-global.js";
import { StaticJsAstModuleImpl } from "../../modules/implementation/StaticJsAstModuleImpl.js";
import { StaticJsExternalModuleImpl } from "../../modules/implementation/StaticJsExternalModuleImpl.js";
import type { StaticJsModule } from "../../modules/StaticJsModule.js";
import { isStaticJsModule } from "../../modules/StaticJsModule.js";
import type { StaticJsModuleImplementation } from "../../modules/StaticJsModuleImplementation.js";
import {
  isStaticJsModuleImplementation,
  staticJsModuleToImplementation,
} from "../../modules/StaticJsModuleImplementation.js";
import type { StaticJsRunTaskOptions } from "../../tasks/StaticJsRunTaskOptions.js";
import { StaticJsTaskCalleeType } from "../../tasks/StaticJsTaskCalleeType.js";
import type { StaticJsTaskIterator } from "../../tasks/StaticJsTaskIterator.js";
import type { StaticJsTaskRunner } from "../../tasks/StaticJsTaskRunner.js";
import { StaticJsTaskType } from "../../tasks/StaticJsTaskType.js";
import { StaticJsExternalFunction } from "../../types/implementation/functions/StaticJsExternalFunction.js";
import { StaticJsTypeFactoryImpl } from "../../types/implementation/StaticJsTypeFactoryImpl.js";
import type { StaticJsPlainObject } from "../../types/StaticJsPlainObject.js";
import type { StaticJsPropertyDescriptor } from "../../types/StaticJsPropertyDescriptor.js";
import {
  type StaticJsPropertyDescriptorRecord,
  validateStaticJsPropertyDescriptorRecord,
} from "../../types/StaticJsPropertyDescriptor.js";
import type { StaticJsTypeFactory } from "../../types/StaticJsTypeFactory.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";
import { drainIterator } from "../../utils/drain-iterator.js";
import type { StaticJsRealmOptions } from "../factories/StaticJsRealm.js";
import type { StaticJsRealmGlobalDeclProperty } from "../factories/StaticJsRealmGlobalOptions.js";
import { StaticJsConfig } from "../StaticJsConfig.js";
import type { StaticJsModuleResolution } from "../StaticJsModuleResolver.js";
import type { StaticJsModuleResolver } from "../StaticJsModuleResolver.js";
import type { StaticJsRealm } from "../StaticJsRealm.js";
import type {
  StaticJsRealmEvaluateScriptOptions,
  StaticJsRealmEvaluateScriptSyncOptions,
} from "../StaticJsRealmEvaluateScriptOptions.js";
import { StaticJsRealmEvaluateSourceOptions } from "../StaticJsRealmEvaluateSourceOptions.js";

import { EvaluationTask } from "./EvaluationTask.js";

export default class StaticJsRealmImpl implements StaticJsRealm {
  private readonly _intrinsics: Intrinsics;
  private readonly _global: StaticJsPlainObject;
  private readonly _globalThis: StaticJsValue;
  private readonly _objectEnv: StaticJsObjectEnvironmentRecord;
  private readonly _declarativeEnv: StaticJsDeclarativeEnvironmentRecord;
  private readonly _globalEnv: StaticJsGlobalEnvironmentRecord;
  private readonly _typeFactory: StaticJsTypeFactory;

  private readonly _staticModules = new Map<string, StaticJsModuleImplementation | null>();
  private readonly _externalResolveModule: StaticJsModuleResolver | undefined;

  private readonly _tasks: EvaluationTask[] = [];
  private _currentTask: EvaluationTask | null = null;
  private _taskQueueDrainScheduled = false;

  private readonly _defaultRunTask: StaticJsTaskRunner;
  private readonly _defaultRunTaskSync: StaticJsTaskRunner;

  private readonly _config: StaticJsConfig;

  private _idleCallbacks: (() => void)[] = [];

  // FIXME: Hack because we rely on *Sync calls to bootstrap the environment,
  // which should not be exposed to the outside workd.
  // Need to fix these with generator calls!
  private _boostrapping = true;

  constructor(
    {
      global: globalObject,
      globalThis: globalThisOpt,
      modules,
      resolveImportedModule: resolveModule,
      runTask,
      runTaskSync,
    }: StaticJsRealmOptions,
    private readonly _hooks: RealmHooks,
  ) {
    this._externalResolveModule = resolveModule;
    this._defaultRunTask = runTask ?? defaultTaskRunner;
    this._defaultRunTaskSync = runTaskSync ?? defaultTaskRunner;
    this._config = Object.freeze({
      runTask: this._defaultRunTask,
      runTaskSync: this._defaultRunTaskSync,
    });

    const intrinsics: IntrinsicsRecord = {} as IntrinsicsRecord;
    this._intrinsics = intrinsics;

    const typeFactory = new StaticJsTypeFactoryImpl(this);
    // Set the type factory now, so the rest of the type instantiation can use it.
    // This is a little bit fiddly, but much of our systems rely on having a reference to the type factory
    // through us, so it needs to be available early.
    this._typeFactory = typeFactory;

    drainIterator(populateIntrinsics(this, intrinsics));

    const globalObjectResolved = resolveGlobalObject(this, globalObject);
    const globalThisResolved = resolveGlobalThis(this, globalObjectResolved, globalThisOpt);

    this._global = globalObjectResolved;
    this._globalThis = globalThisResolved;

    this._objectEnv = new StaticJsObjectEnvironmentRecord(this._global, false, null, this);
    this._declarativeEnv = new StaticJsDeclarativeEnvironmentRecord(null, this);

    this._globalEnv = new StaticJsGlobalEnvironmentRecord(
      globalThisResolved,
      this._declarativeEnv,
      this._objectEnv,
      this,
    );

    drainIterator(populateGlobal(this, this._global));

    for (const [name, moduleDef] of Object.entries(modules ?? {})) {
      const module = realmModuleToModule(this, name, moduleDef);
      this._staticModules.set(name, module);
    }

    this._boostrapping = false;
  }

  [symbolInspect](): string {
    return `StaticJsRealm {}`;
  }

  get config() {
    return this._config;
  }

  get intrinsics() {
    return this._intrinsics;
  }

  get global() {
    return this._global;
  }

  get globalThis() {
    return this._globalThis;
  }

  get globalEnv() {
    return this._globalEnv;
  }

  get objectEnv() {
    return this._objectEnv;
  }

  get declarativeRecord() {
    return this._declarativeEnv;
  }

  get types() {
    return this._typeFactory;
  }

  get hooks() {
    return this._hooks;
  }

  evaluateExpression(
    expression: string,
    opts?: StaticJsRealmEvaluateSourceOptions,
  ): Promise<StaticJsValue> {
    try {
      const parsed = parseExpression(
        expression,
        opts?.sourceName ?? this._createInlineSourceName(),
      );
      const node = file(program([expressionStatement(parsed)], [], "script"));
      const record = StaticJsScriptRecord(node, expression);
      const evaluator = doEvaluateScript(record, this);
      return this._enqueueMacrotask(evaluator, "evaluate", opts);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  evaluateExpressionSync(
    expression: string,
    opts?: StaticJsRealmEvaluateSourceOptions,
  ): StaticJsValue {
    if (this._currentTask && !this._currentTask.entered) {
      throw new StaticJsConcurrentEvaluationError(
        "Synchronous script evaluations from outside the current task cannot be performed while another task is running.",
      );
    }

    const parsed = parseExpression(expression, opts?.sourceName ?? this._createInlineSourceName());
    const record = StaticJsScriptRecord(parsed, expression);
    const evaluator = doEvaluateScript(record, this);
    return this._invokeMacrotaskSync(evaluator, "evaluate", opts);
  }

  evaluateScript(
    script: string,
    opts?: StaticJsRealmEvaluateScriptOptions,
  ): Promise<StaticJsValue> {
    try {
      const parsed = parseScript(script, opts?.sourceName ?? this._createInlineSourceName(), {
        topLevelAwait: Boolean(opts?.topLevelAwait),
        strictMode: Boolean(opts?.strict),
      });
      const strict = parsed.program.directives.some(
        (directive) => directive.value.value === "use strict",
      );

      const record = StaticJsScriptRecord(parsed, script);

      let evaluator: StaticJsEvaluator<StaticJsValue>;

      const topLevelAwait = findTopLevelAwait(parsed);
      if (topLevelAwait || opts?.topLevelAwait === true) {
        if (opts?.topLevelAwait === false) {
          throw new StaticJsSyntaxError(
            "Top-level await is not allowed in this script.",
            topLevelAwait?.loc?.start ?? null,
          );
        }

        evaluator = doEvaluateScriptAsync(record, this, strict);
      } else {
        evaluator = doEvaluateScript(record, this, strict);
      }

      return this._enqueueMacrotask(evaluator, "evaluate", opts);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  evaluateScriptSync(script: string, opts?: StaticJsRealmEvaluateScriptSyncOptions): StaticJsValue {
    const parsed = parseScript(script, opts?.sourceName ?? this._createInlineModuleSourceName());
    const strict = parsed.program.directives.some(
      (directive) => directive.value.value === "use strict",
    );

    const record = StaticJsScriptRecord(parsed, script);

    if (this._currentTask) {
      if (!this._currentTask.entered) {
        throw new StaticJsConcurrentEvaluationError(
          "Synchronous script evaluations from outside the current task cannot be performed while another task is running.",
        );
      }
    }

    return this._invokeMacrotaskSync(doEvaluateScript(record, this, strict), "evaluate", opts);
  }

  async evaluateModule(
    code: string,
    opts?: StaticJsRealmEvaluateSourceOptions,
  ): Promise<StaticJsModule> {
    try {
      const sourceName = opts?.sourceName ?? this._createInlineModuleSourceName();
      const parsed = parseModule(code, sourceName);
      const module = new StaticJsAstModuleImpl(sourceName, code, parsed.program, this);

      // Bit weird that we link immediately instead of when we are ready to perform the task?
      await module.linkModules();

      const { promise: moduleEvaluated, resolve } = createDeferred<StaticJsModule>();
      function* evaluate() {
        yield* module.moduleDeclarationInstantiationEvaluator();
        const resolutionPromise = yield* module.moduleEvaluationEvaluator();
        resolve(
          resolutionPromise.then(
            () => module,
            (err) => {
              Completion.handleRuntime(err);
              throw err;
            },
          ),
        );
      }

      try {
        const [, module] = await Promise.all([
          this._enqueueMacrotask(evaluate, "evaluate", opts),
          moduleEvaluated,
        ]);
        return module;
      } catch (e) {
        Completion.handleRuntime(e);

        throw e;
      }
    } catch (e) {
      Completion.handleRuntime(e);
      throw e;
    }
  }

  async awaitCurrentTask() {
    if (this._currentTask === null) {
      // No current task, so we can resolve immediately.
      return Promise.resolve();
    }

    return this._currentTask.await().then(() => {});
  }

  async awaitIdle() {
    if (this._currentTask === null && this._tasks.length === 0) {
      // No current task, so we can resolve immediately.
      return Promise.resolve();
    }

    // Queue the callback registration in a microtask, so that if a task is pending in the microtask queue,
    // this invocation of awaitIdle will await that task.
    return Promise.resolve().then(() => {
      return new Promise<void>((accept) => {
        this._idleCallbacks.push(accept);
      });
    });
  }

  raiseUnhandledRejection(error: StaticJsValue): () => void {
    if (this._currentTask) {
      return this._currentTask.raiseUnhandledRejection(error);
    }

    throw new StaticJsUnhandledRejectionError(error);
  }

  async resolveImportedModule(
    specifier: string,
    referencingModule: StaticJsModule,
  ): Promise<StaticJsModuleImplementation | null> {
    let module = this._staticModules.get(specifier);

    if (!module && this._externalResolveModule) {
      const resolved = await this._externalResolveModule(specifier, referencingModule);
      module = realmModuleToModule(this, specifier, resolved);
    }

    return module ?? null;
  }

  enqueuePromiseJob(evaluator: StaticJsEvaluator<void>): void {
    // For a bit, we were considering the task done after its promise resolves, leading to
    // completed tasks sitting in _currentTask when modules enqueued jobs.
    if (!this._currentTask || this._currentTask.done) {
      // Not sure for the callee type here... When this is called out of a task, its usually
      // for modules evaluating asynchronously...
      this._enqueueMacrotask(evaluator, "evaluate");
      return;
    }

    // oxlint-disable-next-line typescript/no-this-alias
    const realm = this;
    const scriptOrModule = EvaluationContext.scriptOrModule;
    function* evaluate() {
      const context = EvaluationContext.createRootContext(scriptOrModule, false, realm);
      return yield* context.run(() => invokeEvaluator(evaluator));
    }

    this._currentTask.enqueueMicrotask(evaluate);
  }

  invokeEvaluatorSync<TReturn>(
    evaluator: StaticJsEvaluator<TReturn>,
    {
      runTask = this._defaultRunTaskSync,
      calleeType = "host",
    }: StaticJsRunTaskOptions & { calleeType?: StaticJsTaskCalleeType } = {},
  ): TReturn {
    if (this._boostrapping) {
      return this._invokeEvaluatorSyncNow(evaluator, "macrotask", "host", drainIterator);
    } else if (this._currentTask && this._currentTask.entered) {
      return this._invokeEvaluatorSyncNow(evaluator, "macrotask", calleeType, runTask);
    }

    // oxlint-disable-next-line typescript/no-this-alias
    const realm = this;
    function* evaluate() {
      // We may be ran from outside any active context, so bootstrap
      // one if needed.
      if (EvaluationContext.stack.length === 0) {
        return yield* EvaluationContext.createRootContext(null, false, realm).run<TReturn>(
          function* () {
            return yield* invokeEvaluator(evaluator);
          },
        );
      }

      return yield* invokeEvaluator(evaluator);
    }

    return this._invokeMacrotaskSync(evaluate, calleeType, { runTask: this._defaultRunTaskSync });
  }

  invokeEvaluatorAsync<TReturn>(
    evaluator: StaticJsEvaluator<TReturn>,
    { runTask = this._defaultRunTask }: StaticJsRunTaskOptions = {},
  ): Promise<TReturn> {
    // oxlint-disable-next-line typescript/no-this-alias
    const realm = this;
    function* evaluate() {
      const context = EvaluationContext.createRootContext(null, false, realm);
      return yield* context.run(() => invokeEvaluator(evaluator));
    }

    const macrotask = this._createMacrotask(evaluate, "host", true, runTask);
    this._registerTask(macrotask);

    try {
      return macrotask.await() as Promise<TReturn>;
    } catch (e) {
      Completion.handleRuntime(e);
      throw e;
    }
  }

  private _createMacrotask(
    evaluator: StaticJsEvaluator,
    calleeType: StaticJsTaskCalleeType,
    async: boolean,
    taskRunner: StaticJsTaskRunner,
  ) {
    return new EvaluationTask(evaluator, calleeType, async, taskRunner, (task) =>
      this._assertTaskRunning(task),
    );
  }

  private _createInlineSourceName() {
    return `inline-script?${Date.now()}`;
  }

  private _createInlineModuleSourceName() {
    return `inline-module?${Date.now()}`;
  }

  private _assertTaskRunning(task: EvaluationTask) {
    // This should never trigger, but is a sanity check against bugs in the task queuing system.
    if (this._currentTask !== task) {
      throw new StaticJsEngineError("Cannot run a task that is not the current task.");
    }
  }

  private _registerTask(task: EvaluationTask) {
    // Note: We ideally want to run the next job after current promises resolve, but
    // we need to know this ASAP due to module queuePromiseJobs coming in hot and
    // getting assigned to the already-completed task.
    task.onComplete((err) => {
      this._onTaskCompleted(err);
    });

    this._tasks.push(task);
    this._tryDrainTaskQueue();
  }

  private _onTaskCompleted(_error: unknown) {
    const completedTask = this._currentTask;
    if (!completedTask) {
      throw new StaticJsEngineError("No current task found when trying to complete a task.");
    }

    // Clear the current task immediately, as its possible we have another enqueuePromiseJob on its way,
    // and this task may be active but fulfilled and cause errors.
    this._currentTask = null;

    // Continue AFTER the current task's promise chain completes.
    this._tryScheduleDrainTaskQueue();
  }

  private _tryScheduleDrainTaskQueue() {
    if (this._taskQueueDrainScheduled) {
      return;
    }

    // Absolutely amazing bug:
    // We use setTimeout because we want our continuation to occur
    // after all promise resolutions for the original task.
    // However, vitest runs tests entirely through the async chain, so
    // these setTimeouts were backing up behind the test runner, and causing realms
    // to never get GCd.
    // Don't queue anything if we have no tasks pending.
    if (!this._tasks.length) {
      return;
    }

    this._taskQueueDrainScheduled = true;

    setTimeout(() => {
      this._taskQueueDrainScheduled = false;
      this._tryDrainTaskQueue();
    }, 0);
  }

  private _tryDrainTaskQueue() {
    if (this._currentTask !== null) {
      // Already running a task.
      return;
    }

    if (this._taskQueueDrainScheduled) {
      // Wait for the schedule
      return;
    }

    const nextTask = this._tasks.shift();
    if (nextTask) {
      this._invokeMacrotask(nextTask);
      return;
    } else {
      while (this._idleCallbacks.length > 0) {
        const cb = this._idleCallbacks.shift()!;
        cb();
        if (this._currentTask !== null) {
          // A task was started during the idle callback.
          return;
        }
      }
    }
  }

  private _enqueueMacrotask<TReturn>(
    evaluator: StaticJsEvaluator<TReturn>,
    calleeType: StaticJsTaskCalleeType,
    { runTask = this._defaultRunTask }: StaticJsRunTaskOptions = {},
  ): Promise<TReturn> {
    const macrotask = this._createMacrotask(evaluator, calleeType, true, runTask);
    this._registerTask(macrotask);

    return macrotask.await() as Promise<TReturn>;
  }

  private _invokeMacrotask(task: EvaluationTask) {
    if (this._currentTask !== null) {
      throw new Error("Cannot invoke a task while another task is running.");
    }

    this._currentTask = task;

    // Invoke on the microtask queue, so that
    // we do not end up calling another task while inside the
    // final .next() call of a previous task.
    Promise.resolve().then(() => {
      if (this._currentTask !== task) {
        throw new Error("Cannot invoke a task that is not the current task.");
      }

      task.invoke();
    });
  }

  private _invokeMacrotaskSync<TReturn>(
    evaluator: StaticJsEvaluator<TReturn>,
    calleeType: StaticJsTaskCalleeType,
    { runTask = this._defaultRunTaskSync }: StaticJsRunTaskOptions = {},
  ): TReturn {
    const previousTask = this._currentTask;

    try {
      let result: TReturn | undefined = undefined;
      let error: unknown | undefined = undefined;
      let complete = false;

      // oxlint-disable-next-line typescript/no-this-alias
      const realm = this;
      function* evaluate() {
        // We may be ran from outside any active context, so bootstrap
        // one if needed.
        if (EvaluationContext.stack.length === 0) {
          return yield* EvaluationContext.createRootContext(null, false, realm).run<TReturn>(
            function* () {
              return yield* invokeEvaluator(evaluator);
            },
          );
        }

        return yield* invokeEvaluator(evaluator);
      }

      const macrotask = this._createMacrotask(evaluate, calleeType, false, runTask);
      macrotask.onComplete((value, err) => {
        complete = true;
        error = err;
        result = value as TReturn;
      });

      this._currentTask = macrotask;

      macrotask.invoke();

      if (!macrotask.done) {
        throw new StaticJsSynchronousTaskIncompleteError(
          `A synchronous task did not complete synchronously.  The task runner was: ${runTask.name || "anonymous"}`,
        );
      }

      if (!complete) {
        // This should never occur and indicates a bug in the Macrotask implementation.
        throw new StaticJsEngineError("The macrotask did not complete correctly.");
      }

      if (error) {
        throw error;
      }

      return result!;
    } finally {
      this._currentTask = previousTask;
    }
  }

  private _invokeEvaluatorSyncNow<TReturn>(
    evaluator: StaticJsEvaluator<TReturn>,
    type: StaticJsTaskType,
    calleeType: StaticJsTaskCalleeType,
    runTask: StaticJsTaskRunner,
  ): TReturn {
    const iter = invokeEvaluator(evaluator);

    let iterDone: boolean = false;
    let iterAborted: boolean = false;
    let iterReturn: TReturn | undefined = undefined;
    let iterThrow: unknown | undefined = undefined;
    const task: StaticJsTaskIterator = {
      get type() {
        return type;
      },
      get calleeType() {
        return calleeType;
      },
      get async() {
        return false;
      },
      get aborted() {
        return iterAborted;
      },
      get done() {
        return iterDone;
      },
      get operation() {
        return null;
      },
      get stack() {
        return [];
      },
      next: () => {
        if (iterDone) {
          return { done: true, value: undefined };
        }
        const { done, value } = iter.next();
        if (done) {
          iterDone = true;
          iterReturn = value as TReturn;
          return { done: true, value: undefined };
        }
        return { done: false, value: undefined };
      },
      throw: (error: unknown) => {
        if (iterDone) {
          return { done: true, value: undefined };
        }
        iterDone = true;
        iterThrow = error;
        return { done: true, value: undefined };
      },
      abort() {
        iterDone = true;
        iterAborted = true;
        iterThrow = new StaticJsTaskAbortedError();
      },
    };

    runTask(task);

    if (!iterDone) {
      throw new StaticJsSynchronousTaskIncompleteError();
    }

    if (iterThrow) {
      throw iterThrow;
    }

    return iterReturn as TReturn;
  }
}

function resolveGlobalObject(realm: StaticJsRealm, globalObject?: StaticJsRealmOptions["global"]) {
  let globalObjectResolved: StaticJsPlainObject;
  if (!globalObject) {
    globalObjectResolved = realm.types.object();
  } else if (globalObject && "value" in globalObject) {
    const value = globalObject.value;
    if (!value || typeof value !== "object") {
      throw new Error("Invalid global object value.  Must be an object.");
    }

    const staticJsValue = realm.types.toStaticJsValue(value);

    // Make our object be the prototype, so we can freely attach our globals.
    // FIXME: This is suprising from the user's perspective, since it has an appreciable effect on the runtime.
    // We used to have a special global that passively adds the objects.  Reconsider doing that again.
    globalObjectResolved = realm.types.object(undefined, staticJsValue);
  } else if (globalObject && "properties" in globalObject) {
    globalObjectResolved = realm.types.object(
      Object.fromEntries(
        Object.entries(globalObject.properties).map(([name, descriptor]) => {
          const descr = globalDeclToDescriptor(realm, descriptor);
          return [name, descr];
        }),
      ),
    );
  } else {
    throw new Error("Invalid globalObject");
  }

  return globalObjectResolved;
}

function resolveGlobalThis(
  realm: StaticJsRealm,
  globalObject: StaticJsPlainObject,
  globalThisOpt?: StaticJsRealmOptions["globalThis"],
) {
  let globalThisResolved: StaticJsValue;
  if (globalThisOpt) {
    globalThisResolved = realm.types.toStaticJsValue(globalThisOpt.value);
  } else {
    globalThisResolved = globalObject;
  }
  return globalThisResolved;
}

function realmModuleToModule(
  realm: StaticJsRealm,
  specifier: string,
  module: StaticJsModuleResolution,
): StaticJsModuleImplementation {
  if (typeof module === "string") {
    const parsed = parseModule(module, specifier);
    return new StaticJsAstModuleImpl(specifier, module, parsed.program, realm);
  } else if (isStaticJsModuleImplementation(module)) {
    return module;
  } else if (isStaticJsModule(module)) {
    return staticJsModuleToImplementation(realm, module);
  } else if (module != null && "exports" in module) {
    return new StaticJsExternalModuleImpl(specifier, module.exports, realm);
  } else {
    throw new TypeError(
      `StaticJsRealm resolveModule for module ${specifier} did not return source code, a valid module, or an object with an exports property.`,
    );
  }
}

function globalDeclToDescriptor(realm: StaticJsRealm, descriptor: StaticJsRealmGlobalDeclProperty) {
  const descr: StaticJsPropertyDescriptorRecord = {
    configurable: descriptor.configurable ?? false,
    enumerable: descriptor.enumerable ?? false,
  };

  if (hasOwnProperty(descriptor, "value")) {
    descr.value = realm.types.toStaticJsValue(descriptor.value);
    descr.writable = hasOwnProperty(descriptor, "writable") ? Boolean(descriptor.writable) : false;
  } else if (hasOwnProperty(descriptor, "get") || hasOwnProperty(descriptor, "set")) {
    const { get, set } = descriptor as {
      get?: () => unknown | EvaluationGenerator<unknown>;
      set?: (value: unknown) => void | EvaluationGenerator<void>;
    };

    if (typeof get === "function") {
      descr.get = new StaticJsExternalFunction(realm, "get", function* () {
        let value = get();
        if (isIterator(value)) {
          value = yield* value;
        }

        // ExternalFunction wraps this for us.
        return value;
      });
    }

    if (typeof set === "function") {
      descr.set = new StaticJsExternalFunction(realm, "set", function* (value: unknown) {
        const setResult = set(value);
        if (isIterator(setResult)) {
          yield* setResult;
        }
      });
    }
  }

  validateStaticJsPropertyDescriptorRecord(descr);
  return descr as StaticJsPropertyDescriptor;
}

function isIterator<T>(obj: unknown): obj is Generator<T, unknown, unknown> {
  return (
    typeof obj === "object" && obj !== null && typeof (obj as Generator<T>).next === "function"
  );
}

function defaultTaskRunner(task: StaticJsTaskIterator) {
  // This is a default task runner that runs the generator synchronously.
  // It can be replaced by the user to run tasks asynchronously.
  let result = task.next();
  while (!result.done) {
    result = task.next();
  }
}

function* doEvaluateScript(
  scriptRecord: StaticJsScriptRecord,
  realm: StaticJsRealm,
  strict?: boolean,
): EvaluationGenerator<StaticJsValue> {
  const context = EvaluationContext.createRootContext(scriptRecord, strict ?? false, realm);
  return yield* context.run(function* () {
    try {
      yield* globalDeclarationInstantiation(
        scriptRecord.ecmaScriptCode,
        realm.globalEnv as StaticJsGlobalEnvironmentRecord,
      );
      const result = yield* Q(EvaluateNodeCommand(scriptRecord.ecmaScriptCode));
      if (result) {
        return yield* getValue(result);
      }

      return realm.types.undefined;
    } catch (e) {
      Completion.handleRuntime(e);

      throw e;
    }
  });
}

function* doEvaluateScriptAsync(
  scriptRecord: StaticJsScriptRecord,
  realm: StaticJsRealm,
  strict?: boolean,
): EvaluationGenerator<StaticJsValue> {
  const context = EvaluationContext.createRootContext(scriptRecord, strict ?? false, realm);
  return yield* context.run(function* () {
    try {
      yield* globalDeclarationInstantiation(
        scriptRecord.ecmaScriptCode,
        realm.globalEnv as StaticJsGlobalEnvironmentRecord,
      );
      function* evaluator() {
        const result = yield* Q(EvaluateNodeCommand(scriptRecord.ecmaScriptCode));
        if (result) {
          const value = yield* getValue(result);
          throw Completion.Return(value);
        }
        throw Completion.Return(realm.types.undefined);
      }
      const invocation = new AsyncInvocation(evaluator, realm);

      // Note that invocation.start() performs its own sandbox error handling, so nothing
      // beyond here should throw abnormal completions.
      yield* invocation.start();
      return invocation.promise;
    } catch (e) {
      Completion.handleRuntime(e);

      throw e;
    }
  });
}
