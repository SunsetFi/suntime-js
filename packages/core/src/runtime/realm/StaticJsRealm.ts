import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";

import type { StaticJsObject } from "../types/StaticJsObject.js";
import type StaticJsTypeFactory from "../types/StaticJsTypeFactory.js";

import type { StaticJsModule } from "../modules/StaticJsModule.js";
import type { StaticJsModuleImplementation } from "../modules/StaticJsModuleImplementation.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";

import type { StaticJsRunTaskOptions } from "../tasks/StaticJsRunTaskOptions.js";

export interface StaticJsEvaluateScriptOptions extends StaticJsRunTaskOptions {
  /**
   * An optional file name to associate with the script.
   */
  fileName?: string;

  /**
   * Whether to support top-level await in the script.
   * If true, evaluateScript will always return a promise.
   * If "auto", evaluateScript will return a promise if top-level await is used, otherwise it will return the result directly.
   * If false or omitted, top-level await is not supported and will throw a syntax error if used.
   *
   * Default: false
   * @see {@link StaticJsRealm["evaluateScript"]}
   */
  topLevelAwait?: boolean | "auto";
}

export type StaticJsEvaluateScriptSyncOptions = Omit<
  StaticJsEvaluateScriptOptions,
  "topLevelAwait"
>;

export type StaticJsEvaluator<T = unknown> =
  | EvaluationGenerator<T>
  | (() => EvaluationGenerator<T>);

/**
 * A top-level construct describing the overall environment in which a javascript program is executed.
 * This is not to be confused with an Environment, or Environment Record, which is a lower-level
 * construct that describes the lexical scope of a function.
 *
 * This class is analogous to a [Realm](https://tc39.es/ecma262/#sec-code-realms) in the ECMAScript specification.
 * @public
 */
export interface StaticJsRealm {
  /**
   * The type factory for the realm.
   */
  readonly types: StaticJsTypeFactory;

  /**
   * The global-scope global object of the realm.
   */
  readonly global: StaticJsObject;

  /**
   * The global-scope `this` value of the realm.
   */
  readonly globalThis: StaticJsValue;

  /**
   * The global-scope Environment of the realm.
   * @internal
   */
  readonly globalEnv: StaticJsEnvironmentRecord;

  /**
   * The environment record for the global object.
   * @internal
   */
  readonly objectEnv: StaticJsEnvironmentRecord;

  /**
   * The environment record for declarative bindings.
   */
  readonly declarativeRecord: StaticJsEnvironmentRecord;

  /**
   * Evaluates the expression in the realm, returning a promise that resolves to the result.
   * @param expression The expression to evaluate.
   * @param opts Options for running the task.
   */
  evaluateExpression(
    expression: string,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue>;

  /**
   * Evaluates the expression in the realm synchronously, returning the result.
   * This cannot be called if a task is already running.
   * @param expression The expression to evaluate.
   * @param opts Options for running the task.
   */
  evaluateExpressionSync(
    expression: string,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsValue;

  /**
   * Runs the given script in the realm, returning a promise that resolves to the result.
   * @param script The script to run.
   * @param opts Options for running the task.
   */
  evaluateScript(
    script: string,
    opts?: StaticJsEvaluateScriptOptions,
  ): Promise<StaticJsValue>;

  /**
   * Evaluates the script in the realm synchronously, returning the result.
   * This cannot be called if a task is already running.
   * @param script The script to evaluate.
   * @param opts Options for running the task.
   */
  evaluateScriptSync(
    script: string,
    opts?: StaticJsEvaluateScriptSyncOptions,
  ): StaticJsValue;

  /**
   * Evaluates a module in the realm, returning a promise that resolves to the module.
   *
   * Note: Async modules may invoke more than one task.
   * @param code The code of the module to evaluate.
   * @param opts Options for running the task.
   */
  evaluateModule(
    code: string,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsModule>;

  /**
   * Returns a promise that resolves when the current task, and all resulting microtasks, have completed.
   *
   * The promise will reject if a task or microtask throws an exception or encounters an evaluation error.
   */
  awaitCurrentTask(): Promise<void>;

  /**
   * Returns a promise that resolves when the realm is idle, i.e. there are no tasks or microtasks remaining to be processed.
   */
  awaitIdle(): Promise<void>;

  /*
  The below is all internal.  We could isolate this from the public API using a different interface.
  */

  /**
   * Raises an uncaught error in the realm.
   * @param error The error to raise.
   * @returns A function that, when called, will clear the uncaught error.
   * @internal
   */
  raiseUnhandledRejection(error: StaticJsValue): () => void;

  /**
   * A function to resolve an imported ECMAScript Module given a referencing module
   * and a specifier.
   * @internal
   * @param referencingModule
   * @param specifier
   */
  resolveImportedModule(
    referencingModule: StaticJsModule,
    specifier: string,
  ): Promise<StaticJsModuleImplementation | null>;

  /**
   * Enqueues a microtask to be executed in the next event loop tick.
   * @internal
   * @param evaluator The evaluator to enqueue.
   */
  enqueueMicrotask(evaluator: StaticJsEvaluator<void>): void;

  /**
   * Enqueues a macrotask to be executed in the next event loop tick.
   * @internal
   * @param evaluator The evaluator to enqueue.
   * @param opts Options for running the task.
   */
  enqueueMacrotask<TReturn>(
    evaluator: StaticJsEvaluator<TReturn>,
    opts?: StaticJsRunTaskOptions,
  ): Promise<TReturn>;

  /**
   * Invokes a macrotask synchronously, blocking until it completes.
   * This differs from invokeEvaluatorSync in that it handles draining all microtasks from the resultant task.
   * This cannot be called if there is already a task running.
   * @internal
   * @param evaluator The evaluator to invoke.
   * @param opts Options for running the task.
   */
  invokeMacrotaskSync<TReturn>(
    evaluator: StaticJsEvaluator<TReturn>,
    opts?: StaticJsRunTaskOptions,
  ): TReturn;

  /**
   * Invoke the given evaluator synchronously, returning the result.
   * @internal
   * @param evaluator The evaluator to invoke.
   */
  invokeEvaluatorSync<TReturn>(
    evaluator: EvaluationGenerator<TReturn>,
  ): TReturn;

  /**
   * Invokes the given evaluator asynchronously, returning a promise that resolves to the result.
   * TODO: If there is a current task running, inline this invocation into that task.  Else, start it as a macrotask.
   * @internal
   * @param evaluator The evaluator to invoke.
   */
  invokeEvaluatorAsync<TReturn>(
    evaluator: EvaluationGenerator<TReturn>,
    opts?: StaticJsRunTaskOptions,
  ): Promise<TReturn>;
}

export function isStaticJsRealm(value: unknown): value is StaticJsRealm {
  return (
    value != null &&
    typeof value === "object" &&
    "strict" in value &&
    "globalObject" in value &&
    "globalEnv" in value &&
    "types" in value
  );
}
