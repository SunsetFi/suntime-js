import type { Writable } from "type-fest";
import {
  parse as parseAst,
  parseExpression as parseExpressionAst,
} from "@babel/parser";
import { type Node } from "@babel/types";

import hasOwnProperty from "../../../internal/has-own-property.js";

import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import StaticJsRuntimeError from "../../../errors/StaticJsRuntimeError.js";

import { evaluateCommands } from "../../../evaluator/evaluator-runtime.js";
import { AbnormalCompletion } from "../../../evaluator/completions/AbnormalCompletion.js";
import EvaluationContext from "../../../evaluator/EvaluationContext.js";
import setupEnvironment from "../../../evaluator/node-evaluators/setup-environment.js";
import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import type { StaticJsEnvironment } from "../../environments/StaticJsEnvironment.js";
import StaticJsGlobalEnvironmentRecord from "../../environments/implementation/StaticJsGlobalEnvironmentRecord.js";

import type { Instrinsics } from "../../intrinsics/create-intrinsics.js";
import {
  createIntrinsics,
  defineGlobalProperties,
} from "../../intrinsics/create-intrinsics.js";

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
  StaticJsModuleResolution,
  StaticJsModuleResolver,
  StaticJsRealmOptions,
} from "../factories/StaticJsRealm.js";

import type {
  StaticJsTaskIterator,
  StaticJsTaskRunner,
} from "../StaticJsTask.js";

import type {
  StaticJsEvaluator,
  StaticJsRealm,
  StaticJsRunTaskOptions,
} from "../StaticJsRealm.js";
import { StaticJsTaskAbortedError } from "../../../errors/StaticJsTaskAbortedError.js";
import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

export default class StaticJsRealmImpl implements StaticJsRealm {
  private readonly _globalObject: StaticJsObject;
  private readonly _globalEnv: StaticJsEnvironment;
  private readonly _typeFactory: StaticJsTypeFactory;

  private readonly _staticModules = new Map<
    string,
    StaticJsModuleImplementation | null
  >();
  private readonly _externalResolveModule: StaticJsModuleResolver | undefined;

  private readonly _tasks: Macrotask[] = [];
  private _currentTask: Macrotask | null = null;

  private readonly _defaultRunTask: StaticJsTaskRunner;

  private _invokeEvaluatorSyncDepth = 0;
  private _invokeEvaluatorSyncMicrotasks: (() => EvaluationGenerator<void>)[] =
    [];

  constructor({
    globalObject,
    globalThis,
    modules,
    resolveImportedModule: resolveModule,
    runTask,
  }: StaticJsRealmOptions = {}) {
    this._externalResolveModule = resolveModule;
    this._defaultRunTask = runTask ?? defaultTaskRunner;

    // Note: We could check to see if globalObject has factories or prototypes and use them
    // instead of these.
    const intrinsics = createIntrinsics(this);
    this._typeFactory = new StaticJsTypeFactoryImpl(this, intrinsics);

    // It would be nice to compute these outside in the function, but most of these rely on the type factory,
    // and the type factory relies on having a reference to StaticJsRealm.

    let globalObjectResolved: StaticJsObject;
    if (!globalObject) {
      globalObjectResolved = this._typeFactory.object();
    } else if (globalObject && "value" in globalObject) {
      const value = globalObject.value;
      if (!value || typeof value !== "object") {
        throw new Error("Invalid global object value.  Must be an object.");
      }

      const staticJsValue = this._typeFactory.toStaticJsValue(value);

      // Make our object be the prototype, so we can freely attach our globals.
      // FIXME: This is suprising from the user's perspective, since it has an appreciable effect on the runtime.
      // We used to have a special global that passively adds the objects.  Reconsider doing that again.
      globalObjectResolved = this._typeFactory.object(undefined, staticJsValue);
    } else if (globalObject && "properties" in globalObject) {
      globalObjectResolved = this._typeFactory.object();
      for (const [name, descriptor] of Object.entries(
        globalObject.properties,
      )) {
        const descr = globalDeclToDescriptor(this, descriptor);

        globalObjectResolved.definePropertySync(name, descr);
      }
    } else {
      throw new Error("Invalid globalObject");
    }

    let globalThisResolved: StaticJsValue;
    if (globalThis) {
      globalThisResolved = this._typeFactory.toStaticJsValue(globalThis.value);
    } else {
      globalThisResolved = globalObjectResolved;
    }

    this._setupGlobalObject(
      globalObjectResolved,
      globalThisResolved,
      intrinsics,
    );

    this._globalObject = globalObjectResolved;

    this._globalEnv = new StaticJsGlobalEnvironmentRecord(
      this,
      globalThisResolved,
      globalObjectResolved,
    );

    for (const [name, moduleDef] of Object.entries(modules ?? {})) {
      const module = realmModuleToModule(this, name, moduleDef);
      this._staticModules.set(name, module);
    }
  }

  get globalObject() {
    return this._globalObject;
  }

  get globalEnv() {
    return this._globalEnv;
  }

  get types() {
    return this._typeFactory;
  }

  evaluateExpression(
    code: string,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue> {
    const parsed = parseExpressionAst(code, { sourceType: "script" });
    return this.enqueueMacrotask(doEvaluateNode(parsed, this), opts);
  }

  async evaluateScript(
    code: string,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue> {
    const parsed = parseAst(code, { sourceType: "script" });
    const strict = parsed.program.directives.some(
      (directive) => directive.value.value === "use strict",
    );
    return this.enqueueMacrotask(
      doEvaluateNode(parsed.program, this, strict),
      opts,
    );
  }

  async evaluateModule(
    code: string,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsModule> {
    const parsed = parseAst(code, { sourceType: "module" });
    const module = new StaticJsModuleImpl(
      `inline-module?${Date.now()}`,
      parsed.program,
      this,
    );

    // Bit weird that we link immediately instead of when we are ready to perform the task?
    await module.linkModules();

    return await this.enqueueMacrotask(doEvaluateModule(module), opts);
  }

  async awaitCurrentTask() {
    if (this._currentTask === null) {
      // No current task, so we can resolve immediately.
      return Promise.resolve();
    }

    return this._currentTask.await().then(() => {});
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

  enqueueMicrotask(evaluator: EvaluationGenerator<void>): void;
  enqueueMicrotask(evaluator: () => EvaluationGenerator<void>): void;
  enqueueMicrotask(
    evaluator: (() => EvaluationGenerator<void>) | EvaluationGenerator<void>,
  ): void {
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

    // This used to work.  We could still make it work if we wanted to.
    if (!this._currentTask) {
      throw new StaticJsEngineError(
        "Cannot enqueue a microtask when no task is running.",
      );
    }

    this._currentTask.enqueueMicrotask(evaluatorFn);
  }

  enqueueMacrotask<TReturn>(
    evaluator: EvaluationGenerator<TReturn>,
    { taskRunner = this._defaultRunTask } = {},
  ): Promise<TReturn> {
    const macrotask = new Macrotask(
      () => evaluator,
      taskRunner,
      (task) => this._assertTaskRunning(task),
    );

    macrotask.onComplete((err) => this._onTaskCompleted(err));

    this._tasks.push(macrotask);
    this._tryDrainTaskQueue();

    return macrotask.await() as Promise<TReturn>;
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

  private _assertTaskRunning(task: Macrotask) {
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

  private _setupGlobalObject(
    globalObject: StaticJsObject,
    globalThis: StaticJsValue,
    intrinsics: Instrinsics,
  ) {
    if (!globalObject.hasPropertySync("globalThis")) {
      globalObject.definePropertySync("globalThis", {
        value: globalThis,
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }

    if (!globalObject.hasPropertySync("global")) {
      globalObject.definePropertySync("global", {
        value: globalObject,
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }

    defineGlobalProperties(this, globalObject, intrinsics);
  }
}

function realmModuleToModule(
  realm: StaticJsRealm,
  specifier: string,
  module: StaticJsModuleResolution,
): StaticJsModuleImplementation {
  if (typeof module === "string") {
    // Could try to import the compileModule function but I fear circular references.
    try {
      const parsed = parseAst(module, { sourceType: "module" });
      return new StaticJsModuleImpl(specifier, parsed.program, realm);
    } catch (e: unknown) {
      // FIXME: Only if actual syntax error
      // FIXME: Do we even get thrown syntax errors when evaluating dependent modules?
      throw new StaticJsRuntimeError(
        realm.types.error("SyntaxError", (e as Error).message),
      );
    }
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
  const context = EvaluationContext.createRootContext(strict ?? false, realm);
  try {
    yield* setupEnvironment(node, context);
    const result = yield* EvaluateNodeCommand(node, context);
    return result ?? realm.types.undefined;
  } catch (e) {
    if (e instanceof AbnormalCompletion) {
      throw e.toRuntime();
    }

    throw e;
  }
}

function* doEvaluateModule(
  module: StaticJsModuleImpl,
): EvaluationGenerator<StaticJsModule> {
  try {
    yield* module.moduleDeclarationInstantiationEvaluator();
    yield* module.moduleEvaluationEvaluator();
    return module;
  } catch (e) {
    if (e instanceof AbnormalCompletion) {
      throw e.toRuntime();
    }

    throw e;
  }
}

class Macrotask {
  private readonly _microtasks: StaticJsEvaluator<void>[] = [];

  private readonly _promise: Promise<unknown>;

  private _status: "pending" | "running" | "fulfilled" | "rejected" = "pending";
  private _macrotaskCompletionValue: unknown | undefined = undefined;
  private _acceptPromise!: (value: unknown) => void;
  private _rejectPromise!: (reason?: unknown) => void;

  // This isn't the same as the promise.  The promise is for returning to the outside world,
  // but our internals still want to be notified when the task completes without marking the rejection
  // as handled.
  private _onCompletedCallbacks: ((err?: unknown) => void)[] = [];

  private _currentNode: Node | null = null;

  constructor(
    private readonly _evaluator: StaticJsEvaluator,
    private readonly _taskRunner: StaticJsTaskRunner,
    // This shouldn't be needed if this task stays in sync with the realm about whether it is running.
    private readonly _assertIsRunning: (task: Macrotask) => void,
  ) {
    this._promise = new Promise<unknown>((accept, reject) => {
      this._acceptPromise = accept;
      this._rejectPromise = reject;
    });
  }

  get taskRunner() {
    return this._taskRunner;
  }

  onComplete(callback: (err?: unknown) => void) {
    this._onCompletedCallbacks.push(callback);
  }

  enqueueMicrotask(evaluator: StaticJsEvaluator<void>) {
    if (this._status !== "running") {
      throw new StaticJsEngineError(
        `Cannot enqueue a microtask when task is not running.  Current status: ${this._status}`,
      );
    }

    this._microtasks.push(evaluator);
  }

  await() {
    return this._promise;
  }

  invoke() {
    if (this._status !== "pending") {
      throw new StaticJsEngineError(
        `Cannot invoke a task that is already ${this._status}.`,
      );
    }

    this._status = "running";

    this._runTask(
      this._evaluator,
      (value) => this._acceptMacrotask(value),
      (reason) => this._reject(reason),
    );
  }

  private _tryDrainMicrotasks() {
    if (this._status !== "running") {
      throw new StaticJsEngineError(
        `Cannot drain microtasks when task is not running.  Current status: ${this._status}`,
      );
    }

    const microtask = this._microtasks.shift();
    if (!microtask) {
      this._accept();
      return;
    }

    this._runTask(
      microtask,
      () => this._acceptMicrotask(),
      (reason) => {
        this._reject(reason);
      },
    );
  }

  private _runTask(
    evaluator: StaticJsEvaluator,
    accept: (value: unknown) => void,
    reject: (reason: unknown) => void,
  ) {
    const taskIterator = this._createTaskIterator(evaluator, accept, reject);
    this._taskRunner(taskIterator);
  }

  private _createTaskIterator(
    evaluator: StaticJsEvaluator,
    accept: (value: unknown) => void,
    reject: (reason: unknown) => void,
  ): StaticJsTaskIterator {
    const iterator = evaluateCommands(invokeEvaluator(evaluator), {
      onBeforeNodeEntry: (node) => {
        this._currentNode = node;
      },
    });

    let done = false;
    let aborted = false;

    const getCurrentNode = () => {
      return this._currentNode;
    };
    return {
      get done() {
        return done;
      },
      get aborted() {
        return aborted;
      },
      get line() {
        return getCurrentNode()?.loc?.start.line ?? -1;
      },
      get column() {
        return getCurrentNode()?.loc?.start.column ?? -1;
      },
      next: () => {
        if (aborted) {
          throw new StaticJsTaskAbortedError(
            "Cannot call next() on an aborted task.",
          );
        }

        if (done) {
          throw new StaticJsEngineError(
            "Cannot call next() on a completed task.",
          );
        }

        this._assertIsRunning(this);

        try {
          const result = iterator.next();
          if (result.done) {
            done = true;
            accept(result.value);
          }
          return {
            value: undefined,
            done: result.done,
          };
        } catch (e) {
          // Normally we should pass this to the generator's throw method,
          // but we are passed generators that handle all of that for us, so the only
          // throws we should be getting here are final throws.
          done = true;
          reject(e);
          return {
            value: undefined,
            done: true,
          };
        }
      },

      abort: () => {
        if (done || aborted) {
          throw new StaticJsEngineError(
            "Cannot abort a task that is already done or aborted.",
          );
        }

        this._assertIsRunning(this);

        aborted = true;
        reject(new StaticJsTaskAbortedError("Task was aborted."));
      },
    };
  }

  private _acceptMacrotask(value: unknown) {
    this._macrotaskCompletionValue = value;
    this._tryDrainMicrotasks();
  }

  private _acceptMicrotask() {
    this._tryDrainMicrotasks();
  }

  private _accept() {
    if (this._status !== "running") {
      throw new StaticJsEngineError(
        `Cannot accept a task that is not running.  Current status: ${this._status}`,
      );
    }

    this._status = "fulfilled";
    this._acceptPromise(this._macrotaskCompletionValue);
    this._onCompletedCallbacks.forEach((cb) => cb());
    this._onCompletedCallbacks = [];
    this._macrotaskCompletionValue = undefined;
  }

  private _reject(reason?: unknown) {
    if (this._status !== "running") {
      throw new StaticJsEngineError(
        `Cannot reject a task that is not running.  Current status: ${this._status}`,
      );
    }

    this._status = "rejected";
    this._rejectPromise(reason);
    this._onCompletedCallbacks.forEach((cb) => cb(reason));
    this._onCompletedCallbacks = [];
    this._macrotaskCompletionValue = undefined;
  }
}

function invokeEvaluator<T>(
  evaluator: StaticJsEvaluator<T>,
): EvaluationGenerator<T> {
  if (typeof evaluator === "function") {
    return evaluator();
  } else {
    return evaluator;
  }
}
