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
import evaluateNode from "../../../evaluator/node-evaluators/evaluate-node.js";
import type EvaluationContext from "../../../evaluator/EvaluationContext.js";
import setupEnvironment from "../../../evaluator/node-evaluators/setup-environment.js";

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

import type { StaticJsTask, StaticJsTaskRunner } from "../StaticJsTask.js";

import type {
  StaticJsRealm,
  StaticJsRunTaskOptions,
} from "../StaticJsRealm.js";
import { StaticJsTaskAbortedError } from "../../../errors/StaticJsTaskAbortedError.js";

interface QueuedTask {
  evaluator: () => EvaluationGenerator<unknown>;
  resolve: (value: unknown) => void;
  reject: (reason?: unknown) => void;
  runTask: StaticJsTaskRunner;
  get microtask(): boolean;
  get done(): boolean;
}

function createQueuedTask(
  microtask: boolean,
  evaluator: () => EvaluationGenerator<unknown>,
  runTask: StaticJsTaskRunner,
) {
  let task!: QueuedTask;
  let done = false;
  const promise = new Promise<unknown>((resolve, reject) => {
    task = {
      evaluator,
      resolve: (value: unknown) => {
        done = true;
        resolve(value);
      },
      reject: (reason?: unknown) => {
        done = true;
        reject(reason);
      },
      runTask,
      get microtask() {
        return microtask;
      },
      get done() {
        return done;
      },
    };
  });
  return [task, promise] as const;
}

export default class StaticJsRealmImpl implements StaticJsRealm {
  private readonly _globalObject: StaticJsObject;
  private readonly _globalEnv: StaticJsEnvironment;
  private readonly _typeFactory: StaticJsTypeFactory;

  private readonly _staticModules = new Map<
    string,
    StaticJsModuleImplementation | null
  >();
  private readonly _externalResolveModule: StaticJsModuleResolver | undefined;

  private readonly _taskQueues: [
    microtask: QueuedTask[],
    macrotask: QueuedTask[],
  ] = [[], []];

  private _currentTask: QueuedTask | null = null;

  private _microtasksDrainedCallbacks: ((err?: unknown) => void)[] = [];

  private readonly _runTask: StaticJsTaskRunner;

  constructor({
    globalObject,
    globalThis,
    modules,
    resolveImportedModule: resolveModule,
    runTask,
  }: StaticJsRealmOptions = {}) {
    this._externalResolveModule = resolveModule;
    this._runTask = runTask ?? defaultTaskRunner;

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

    const [task, promise] = createQueuedTask(true, evaluatorFn, this._runTask);
    this._taskQueues[0].push(task);
    this._tryDrainTaskQueue();

    // These errors will be trapped and handled by the task logic.
    // They will bubble up to the macrotask that caused them.
    promise.catch(() => {});
  }

  enqueueMacrotask<TReturn>(
    evaluator: EvaluationGenerator<TReturn>,
    { taskRunner = this._runTask } = {},
  ): Promise<TReturn> {
    return new Promise<TReturn>((accept, reject) => {
      const evaluatorFn = () => evaluator;
      const [queuedTask, promise] = createQueuedTask(
        false,
        evaluatorFn,
        taskRunner,
      );
      this._taskQueues[1].push(queuedTask);
      this._tryDrainTaskQueue();

      this._microtasksDrainedCallbacks.push((err) => {
        if (err) {
          reject(err);
        } else {
          accept(promise as Promise<TReturn>);
        }
      });
    });
  }

  invokeEvaluatorSync<TReturn>(
    evaluator: EvaluationGenerator<TReturn>,
  ): TReturn {
    const iterator = evaluateCommands(evaluator);

    let iteratorResult = iterator.next();
    while (!iteratorResult.done) {
      iteratorResult = iterator.next();
    }

    return iteratorResult.value;
  }

  private _onTaskCompleted() {
    if (this._taskQueues[0].length === 0) {
      this._onMicrotasksDrained(null);
    }

    this._tryDrainTaskQueue();
  }

  private _tryDrainTaskQueue() {
    if (this._currentTask !== null) {
      // Already running a task.
      return;
    }

    for (const queue of this._taskQueues) {
      const queuedTask = queue.shift();
      if (queuedTask) {
        this._invokeQueuedTask(queuedTask);
        return;
      }
    }
  }

  private _invokeQueuedTask(queuedTask: QueuedTask) {
    if (this._currentTask !== null) {
      throw new Error("Cannot invoke a task while another task is running.");
    }

    this._currentTask = queuedTask;

    // Invoke on the microtask queue, so that
    // we do not end up calling another task runner inside the
    // .next() call of a previous task runner.
    Promise.resolve().then(() => {
      const iterator = this._createTask(queuedTask);
      try {
        queuedTask.runTask(iterator);
      } catch (e) {
        // If the task runner throws, we need to reject the task
        // and clean up if its still pending.
        if (!queuedTask.done) {
          queuedTask.reject(e);
        }
        if (this._currentTask === queuedTask) {
          this._currentTask = null;
          this._onTaskCompleted();
        }
      }
    });
  }

  private _createTask(task: QueuedTask): StaticJsTask {
    const iterator = evaluateCommands(task.evaluator());
    let done = false;
    let aborted = false;
    return {
      get done() {
        return done;
      },
      get aborted() {
        return aborted;
      },
      next: () => {
        if (this._currentTask !== task) {
          throw new Error("Cannot call next() on an inactive task.");
        }

        if (aborted) {
          throw new StaticJsTaskAbortedError(
            "Cannot call next() on an aborted task.",
          );
        }

        try {
          const result = iterator.next();
          if (result.done) {
            done = true;
            this._currentTask = null;
            this._onTaskCompleted();
            task.resolve(result.value);
          }
          return {
            value: undefined,
            done: result.done,
          };
        } catch (e) {
          // Normally we should pass this to the generator's throw method,
          // but we are passed generators that handle all of that for us, so the only
          // throws we should be getting here are final throws.
          task.reject(e);
          this._currentTask = null;
          if (task.microtask) {
            // Kill all remaining microtasks and resolve with the error.
            // Probably not spec compliant...
            // TODO: Implement a handler for uncaught errors.
            this._taskQueues[0] = [];
            this._onMicrotasksDrained(e);
          }
          this._onTaskCompleted();
          return {
            value: undefined,
            done: true,
          };
        }
      },

      abort: () => {
        if (this._currentTask !== task) {
          throw new Error("Cannot call abort() on an inactive task.");
        }
        aborted = true;
        this._currentTask = null;
        task.reject(new StaticJsTaskAbortedError("Task was aborted."));
        this._tryDrainTaskQueue();
      },
    };
  }

  private _onMicrotasksDrained(err: unknown | null) {
    for (const callback of this._microtasksDrainedCallbacks) {
      callback(err);
    }
    this._microtasksDrainedCallbacks = [];
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

function defaultTaskRunner(task: StaticJsTask) {
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
  const context: EvaluationContext = {
    realm,
    strict: strict ?? false,
    env: realm.globalEnv,
    label: null,
  };
  try {
    yield* setupEnvironment(node, context);
    const result = yield* evaluateNode(node, context);
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
