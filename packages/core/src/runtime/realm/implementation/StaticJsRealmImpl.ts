import type { Writable } from "type-fest";
import { type Node } from "@babel/types";

import parseScript from "../../../parser/parse-script.js";
import parseModule from "../../../parser/parse-module.js";
import parseExpression from "../../../parser/parse-expression.js";
import hasTopLevelAwait from "../../../parser/has-top-level-await.js";

import hasOwnProperty from "../../../internal/has-own-property.js";

import StaticJsSyntaxError from "../../../errors/StaticJsSyntaxError.js";
import StaticJsUnhandledRejectionError from "../../../errors/StaticJsUnhandledRejectionError.js";
import StaticJsSynchronousTaskIncompleteError from "../../../errors/StaticJsSynchronousTaskIncompleteError.js";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";
import StaticJsConcurrentEvaluationError from "../../../errors/StaticJsConcurrentEvaluationError.js";

import StaticJsDeclarativeEnvironmentRecord from "../../environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import EvaluationContext from "../../../evaluator/EvaluationContext.js";

import { evaluateCommands } from "../../../evaluator/evaluator-runtime.js";

import AsyncEvaluatorInvocation from "../../../evaluator/AsyncEvaluatorInvocation.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import { AbnormalCompletion } from "../../../evaluator/completions/AbnormalCompletion.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";
import globalDeclarationInstantiation from "../../../initialization/global-declaration-instantiation.js";

import StaticJsGlobalEnvironmentRecord from "../../environments/implementation/StaticJsGlobalEnvironmentRecord.js";
import StaticJsObjectEnvironmentRecord from "../../environments/implementation/StaticJsObjectEnvironmentRecord.js";

import {
  createPrototypes,
  instantiatePrototypes,
} from "../../intrinsics/create-prototypes.js";
import { createConstructors } from "../../intrinsics/create-constructors.js";
import { createIntrinsicSymbols } from "../../intrinsics/create-symbols.js";
import { populateGlobal } from "../../intrinsics/populate-global.js";

import StaticJsTypeFactoryImpl from "../../types/implementation/StaticJsTypeFactoryImpl.js";

import type StaticJsTypeFactory from "../../types/StaticJsTypeFactory.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";
import type {
  StaticJsAccessorPropertyDescriptor,
  StaticJsDataPropertyDescriptor,
  StaticJsPropertyDescriptor,
} from "../../types/StaticJsPropertyDescriptor.js";
import { validateStaticJsPropertyDescriptor } from "../../types/StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";
import StaticJsExternalFunction from "../../types/implementation/StaticJsExternalFunction.js";

import type { StaticJsModuleImplementation } from "../../modules/StaticJsModuleImplementation.js";
import {
  isStaticJsModuleImplementation,
  staticJsModuleToImplementation,
} from "../../modules/StaticJsModuleImplementation.js";
import type { StaticJsModule } from "../../modules/StaticJsModule.js";
import { isStaticJsModule } from "../../modules/StaticJsModule.js";

import StaticJsExternalModuleImpl from "../../modules/implementation/StaticJsExternalModuleImpl.js";
import { StaticJsModuleImpl } from "../../modules/implementation/StaticJsModuleImpl.js";

import type {
  StaticJsRealmGlobalDeclProperty,
  StaticJsRealmOptions,
} from "../factories/StaticJsRealm.js";
import type { StaticJsModuleResolution } from "../StaticJsModuleResolver.js";
import type { StaticJsModuleResolver } from "../StaticJsModuleResolver.js";

import type {
  StaticJsTaskIterator,
  StaticJsTaskRunner,
} from "../StaticJsTaskIterator.js";

import type {
  StaticJsEvaluateScriptOptions,
  StaticJsEvaluateScriptSyncOptions,
  StaticJsEvaluator,
  StaticJsRealm,
  StaticJsRunTaskOptions,
} from "../StaticJsRealm.js";

import Macrotask from "./Macrotask.js";

export default class StaticJsRealmImpl implements StaticJsRealm {
  private readonly _global: StaticJsObject;
  private readonly _globalThis: StaticJsValue;
  private readonly _objectEnv: StaticJsObjectEnvironmentRecord;
  private readonly _declarativeEnv: StaticJsDeclarativeEnvironmentRecord;
  private readonly _globalEnv: StaticJsGlobalEnvironmentRecord;
  private readonly _typeFactory: StaticJsTypeFactory;

  private readonly _staticModules = new Map<
    string,
    StaticJsModuleImplementation | null
  >();
  private readonly _externalResolveModule: StaticJsModuleResolver | undefined;

  private readonly _tasks: Macrotask[] = [];
  private _currentTask: Macrotask | null = null;

  private readonly _defaultRunTask: StaticJsTaskRunner;
  private readonly _defaultRunTaskSync: StaticJsTaskRunner;

  private _invokeEvaluatorSyncDepth = 0;
  private _invokeEvaluatorSyncMicrotasks: (() => EvaluationGenerator<void>)[] =
    [];

  private _idleCallbacks: (() => void)[] = [];

  constructor({
    global: globalObject,
    globalThis,
    modules,
    resolveImportedModule: resolveModule,
    runTask,
    runTaskSync,
  }: StaticJsRealmOptions = {}) {
    this._externalResolveModule = resolveModule;
    this._defaultRunTask = runTask ?? defaultTaskRunner;
    this._defaultRunTaskSync = runTaskSync ?? defaultTaskRunner;

    // Note: We could check to see if globalObject has factories or prototypes and use them
    // instead of these.
    const prototypes = createPrototypes(this);
    const symbols = createIntrinsicSymbols(this, prototypes);

    // Populate the type factory so it can be referenced by the prototype and constructor intantiation.
    const typeFactory = new StaticJsTypeFactoryImpl(this, prototypes, symbols);

    // Set the type factory now, so the rest of the type instantiation can use it.
    // This is a little bit fiddly, but much of our systems rely on having a reference to the type factory
    // through us, so it needs to be available early.
    this._typeFactory = typeFactory;

    // Populate the prototypes first.
    instantiatePrototypes(this);

    // Now populate the intrinsics, which may reference the prototypes.
    const constructors = createConstructors(this);
    // Update the type factory with the constructors.
    typeFactory._initializeConstructors(constructors);

    const globalObjectResolved = resolveGlobalObject(this, globalObject);
    const globalThisResolved = resolveGlobalThis(
      this,
      globalObjectResolved,
      globalThis,
    );

    this._global = globalObjectResolved;
    this._globalThis = globalThisResolved;

    this._objectEnv = new StaticJsObjectEnvironmentRecord(this, this._global);
    this._declarativeEnv = new StaticJsDeclarativeEnvironmentRecord(this);

    this._globalEnv = new StaticJsGlobalEnvironmentRecord(
      this,
      globalThisResolved,
      this._declarativeEnv,
      this._objectEnv,
    );

    populateGlobal(this, this._global);

    for (const [name, moduleDef] of Object.entries(modules ?? {})) {
      const module = realmModuleToModule(this, name, moduleDef);
      this._staticModules.set(name, module);
    }
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

  evaluateExpression(
    expression: string,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue> {
    const parsed = parseExpression(expression);
    return this.enqueueMacrotask(doEvaluateNode(parsed, this), opts);
  }

  evaluateExpressionSync(
    expression: string,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsValue {
    if (this._currentTask && !this._currentTask.entered) {
      throw new StaticJsConcurrentEvaluationError(
        "Synchronous script evaluations from outside the current task cannot be performed while another task is running.",
      );
    }

    const parsed = parseExpression(expression);
    return this.invokeMacrotaskSync(doEvaluateNode(parsed, this), opts);
  }

  async evaluateScript(
    script: string,
    opts?: StaticJsEvaluateScriptOptions,
  ): Promise<StaticJsValue> {
    const parsed = parseScript(script, {
      topLevelAwait: Boolean(opts?.topLevelAwait),
      fileName: opts?.fileName,
    });
    const strict = parsed.program.directives.some(
      (directive) => directive.value.value === "use strict",
    );

    let evaluator: StaticJsEvaluator<StaticJsValue>;

    const topLevelAwait = hasTopLevelAwait(parsed);
    if (topLevelAwait || opts?.topLevelAwait === true) {
      if (opts?.topLevelAwait === false) {
        throw new StaticJsSyntaxError(
          "Top-level await is not allowed in this script.",
        );
      }

      evaluator = doEvaluateNodeAsync(parsed.program, this, strict);
    } else {
      evaluator = doEvaluateNode(parsed.program, this, strict);
    }

    return this.enqueueMacrotask(evaluator, opts);
  }

  evaluateScriptSync(
    script: string,
    opts?: StaticJsEvaluateScriptSyncOptions,
  ): StaticJsValue {
    if (this._currentTask && !this._currentTask.entered) {
      throw new StaticJsConcurrentEvaluationError(
        "Synchronous script evaluations from outside the current task cannot be performed while another task is running.",
      );
    }

    const parsed = parseScript(script, {
      fileName: opts?.fileName,
    });
    const strict = parsed.program.directives.some(
      (directive) => directive.value.value === "use strict",
    );
    return this.invokeMacrotaskSync(
      doEvaluateNode(parsed.program, this, strict),
      opts,
    );
  }

  async evaluateModule(
    code: string,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsModule> {
    const parsed = parseModule(code);
    const module = new StaticJsModuleImpl(
      `inline-module?${Date.now()}`,
      parsed.program,
      this,
    );

    // Bit weird that we link immediately instead of when we are ready to perform the task?
    await module.linkModules();

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const realm = this;

    let moduleEvaluationResolve!: (value: StaticJsModule) => void;
    let moduleEvaluationReject!: (err: unknown) => void;
    const moduleEvaluationCompleted = new Promise<StaticJsModule>(
      (accept, rej) => {
        moduleEvaluationResolve = accept;
        moduleEvaluationReject = rej;
      },
    );

    // Start the module evaluation.
    // The evaluation can be asynchronous, so this might not evaluate everything.
    // FIXME (maybe): It might be suprising that resumes of the async will run on
    // the runTask of the resumption, not on the one passed to us.
    function* beginModuleEvaluation(): EvaluationGenerator<void> {
      yield* module.moduleDeclarationInstantiationEvaluator();

      const evaluator = module.moduleEvaluationEvaluator();
      const invocation = new AsyncEvaluatorInvocation(evaluator, realm);
      invocation.onComplete((_value, err) => {
        if (err) {
          // invocation is promise-like, so reinterpret the rejected error as a ThrowCompletion
          // This is so that it gets handled correctly as a thrown runtime error.
          moduleEvaluationReject(new ThrowCompletion(err));
        } else {
          moduleEvaluationResolve(module);
        }
      });

      // Note: This does its own error capture, and will not throw.
      yield* invocation.start();
    }

    try {
      // Wait for both the initial macrotask to complete, and for
      // the module async evaluation to complete.
      // In theory enqueueMacrotask will complete before or simultaniously with moduleEvaluationCompleted,
      // but await both at once to capture errors from either.
      const [_, mod] = await Promise.all([
        this.enqueueMacrotask(beginModuleEvaluation, opts),
        moduleEvaluationCompleted,
      ]);
      return mod;
    } catch (e) {
      if (e instanceof AbnormalCompletion) {
        throw e.toRuntime();
      }
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
    referencingModule: StaticJsModule,
    specifier: string,
  ): Promise<StaticJsModuleImplementation | null> {
    let module = this._staticModules.get(specifier);

    if (!module && this._externalResolveModule) {
      const resolved = await this._externalResolveModule(
        referencingModule,
        specifier,
      );
      module = realmModuleToModule(this, specifier, resolved);
    }

    return module ?? null;
  }

  enqueueMicrotask(evaluator: StaticJsEvaluator<void>): void {
    let evaluatorFn: () => EvaluationGenerator<void>;
    if (typeof evaluator === "function") {
      evaluatorFn = evaluator;
    } else {
      evaluatorFn = () => evaluator;
    }

    // HACK for synchronous evaluations.
    if (this._invokeEvaluatorSyncDepth > 0) {
      this._invokeEvaluatorSyncMicrotasks.push(evaluatorFn);
      return;
    }

    if (!this._currentTask) {
      throw new StaticJsEngineError(
        "Cannot enqueue a microtask when no task is running.",
      );
    }

    this._currentTask.enqueueMicrotask(evaluatorFn);
  }

  enqueueMacrotask<TReturn>(
    evaluator: StaticJsEvaluator<TReturn>,
    { runTask = this._defaultRunTask } = {},
  ): Promise<TReturn> {
    const macrotask = this._createMacrotask(evaluator, runTask);

    macrotask.onComplete((err) => this._onTaskCompleted(err));

    this._tasks.push(macrotask);
    this._tryDrainTaskQueue();

    return macrotask.await() as Promise<TReturn>;
  }

  invokeMacrotaskSync<TReturn>(
    evaluator: StaticJsEvaluator<TReturn>,
    { runTask = this._defaultRunTaskSync }: StaticJsRunTaskOptions = {},
  ): TReturn {
    const previousTask = this._currentTask;

    try {
      if (!runTask) {
        runTask = (task) => {
          while (!task.done) {
            task.next();
          }
        };
      }

      let result: TReturn | undefined = undefined;
      let error: unknown | undefined = undefined;
      let complete = false;

      const macrotask = this._createMacrotask(evaluator, runTask);
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
        throw new StaticJsEngineError(
          "The macrotask did not complete correctly.",
        );
      }

      if (error) {
        throw error;
      }

      return result!;
    } finally {
      this._currentTask = previousTask;
    }
  }

  invokeEvaluatorSync<TReturn>(
    evaluator: EvaluationGenerator<TReturn>,
  ): TReturn {
    this._invokeEvaluatorSyncDepth++;
    try {
      const iterator = evaluateCommands(evaluator);

      let iteratorResult = iterator.next();
      while (!iteratorResult.done) {
        iteratorResult = iterator.next();
      }

      while (this._invokeEvaluatorSyncMicrotasks.length > 0) {
        const evaluator = this._invokeEvaluatorSyncMicrotasks.shift()!;
        const iterator = evaluateCommands(evaluator());
        let iteratorResult = iterator.next();
        while (!iteratorResult.done) {
          iteratorResult = iterator.next();
        }
      }

      return iteratorResult.value;
    } finally {
      this._invokeEvaluatorSyncMicrotasks.splice(
        0,
        this._invokeEvaluatorSyncMicrotasks.length,
      );
      this._invokeEvaluatorSyncDepth--;
    }
  }

  private _createMacrotask(
    evaluator: StaticJsEvaluator,
    taskRunner: StaticJsTaskRunner,
  ) {
    return new Macrotask(
      typeof evaluator === "function" ? evaluator : () => evaluator,
      taskRunner,
      (task) => this._assertTaskRunning(task),
    );
  }

  private _assertTaskRunning(task: Macrotask) {
    // This should never trigger, but is a sanity check against bugs in the task queuing system.
    if (this._currentTask !== task) {
      throw new StaticJsEngineError(
        "Cannot run a task that is not the current task.",
      );
    }
  }

  private _onTaskCompleted(_error: unknown) {
    this._currentTask = null;
    this._tryDrainTaskQueue();
  }

  private _tryDrainTaskQueue() {
    if (this._currentTask !== null) {
      // Already running a task.
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

  private _invokeMacrotask(task: Macrotask) {
    if (this._currentTask !== null) {
      throw new Error("Cannot invoke a task while another task is running.");
    }

    this._currentTask = task;

    // Invoke on the microtask queue, so that
    // we do not end up calling another task while inside the
    // final .next() call of a previous task.
    Promise.resolve().then(() => {
      task.invoke();
    });
  }
}

function resolveGlobalObject(
  realm: StaticJsRealm,
  globalObject?: StaticJsRealmOptions["global"],
) {
  let globalObjectResolved: StaticJsObject;
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
    globalObjectResolved = realm.types.object();
    for (const [name, descriptor] of Object.entries(globalObject.properties)) {
      const descr = globalDeclToDescriptor(realm, descriptor);

      globalObjectResolved.definePropertySync(name, descr);
    }
  } else {
    throw new Error("Invalid globalObject");
  }

  return globalObjectResolved;
}

function resolveGlobalThis(
  realm: StaticJsRealm,
  globalObject: StaticJsObject,
  globalThis?: StaticJsRealmOptions["globalThis"],
) {
  let globalThisResolved: StaticJsValue;
  if (globalThis) {
    globalThisResolved = realm.types.toStaticJsValue(globalThis.value);
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
    const parsed = parseModule(module);
    return new StaticJsModuleImpl(specifier, parsed.program, realm);
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

function globalDeclToDescriptor(
  realm: StaticJsRealm,
  descriptor: StaticJsRealmGlobalDeclProperty,
) {
  const descr: Writable<
    Partial<StaticJsAccessorPropertyDescriptor & StaticJsDataPropertyDescriptor>
  > = {
    configurable: descriptor.configurable ?? false,
    enumerable: descriptor.enumerable ?? false,
  };

  if (hasOwnProperty(descriptor, "value")) {
    descr.value = realm.types.toStaticJsValue(descriptor.value);
    descr.writable = hasOwnProperty(descriptor, "writable")
      ? Boolean(descriptor.writable)
      : false;
  } else if (
    hasOwnProperty(descriptor, "get") ||
    hasOwnProperty(descriptor, "set")
  ) {
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
      descr.set = new StaticJsExternalFunction(realm, "set", function* (
        value: unknown,
      ) {
        const setResult = set(value);
        if (isIterator(setResult)) {
          yield* setResult;
        }
      });
    }
  }

  validateStaticJsPropertyDescriptor(descr);
  return descr as StaticJsPropertyDescriptor;
}

function isIterator<T>(obj: unknown): obj is Generator<T, unknown, unknown> {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as Generator<T>).next === "function"
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

function* doEvaluateNode(
  node: Node,
  realm: StaticJsRealm,
  strict?: boolean,
): EvaluationGenerator<StaticJsValue> {
  const context = EvaluationContext.createRootContext(
    strict ?? false,
    realm,
  ).createLexicalEnvContext(new StaticJsDeclarativeEnvironmentRecord(realm));
  try {
    // yield* setupEnvironment(node, context);
    yield* globalDeclarationInstantiation(node, context);
    const result = yield* EvaluateNodeCommand(node, context);
    return result ?? realm.types.undefined;
  } catch (e) {
    if (e instanceof AbnormalCompletion) {
      throw e.toRuntime();
    }

    throw e;
  }
}

function* doEvaluateNodeAsync(
  node: Node,
  realm: StaticJsRealm,
  strict?: boolean,
): EvaluationGenerator<StaticJsValue> {
  const context = EvaluationContext.createRootContext(
    strict ?? false,
    realm,
  ).createLexicalEnvContext(new StaticJsDeclarativeEnvironmentRecord(realm));
  try {
    // yield* setupEnvironment(node, context);
    yield* globalDeclarationInstantiation(node, context);
    const evaluator = EvaluateNodeCommand(node, context);
    const invocation = new AsyncEvaluatorInvocation(evaluator, realm, true);

    // Note that invocation.start() performs its own sandbox error handling, so nothing
    // beyond here should throw abnormal completions.
    yield* invocation.start();
    return invocation.promise;
  } catch (e) {
    if (e instanceof AbnormalCompletion) {
      throw e.toRuntime();
    }

    throw e;
  }
}
