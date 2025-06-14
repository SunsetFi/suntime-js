import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsEnvironment } from "../environments/StaticJsEnvironment.js";

import type { StaticJsObject } from "../types/StaticJsObject.js";
import type StaticJsTypeFactory from "../types/StaticJsTypeFactory.js";

import type { StaticJsModule } from "../modules/StaticJsModule.js";
import type { StaticJsModuleImplementation } from "../modules/StaticJsModuleImplementation.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";

import type { StaticJsTaskRunner } from "./StaticJsTask.js";

/**
 * Options for running a macrotask in the StaticJs runtime.
 */
export interface StaticJsRunMacrotaskOptions {
  /**
   * The task runner to use.
   *
   * If specified, this will be used instead of {@link import('./factories/StaticJsRealm').StaticJsRealmOptions.runTask}.
   * @param task The task to run.
   */
  taskRunner?: StaticJsTaskRunner;
}

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
   * Whether the realm is in strict mode.
   */
  readonly strict: boolean;

  /**
   * The global-scope global object of the realm.
   */
  readonly globalObject: StaticJsObject;

  /**
   * The global-scope Environment of the realm.
   */
  readonly globalEnv: StaticJsEnvironment;

  /**
   * The type factory for the realm.
   */
  readonly types: StaticJsTypeFactory;

  /**
   * Evaluates the expression in the realm, returning a promise that resolves to the result.
   * @param code The code to evaluate.
   */
  evaluate(code: string): Promise<StaticJsValue>;

  /**
   * Runs the given script in the realm, returning a promise that resolves to the result.
   * @param code The code to run.
   */
  runScript(code: string): Promise<StaticJsValue>;

  /**
   * Evaluates a module in the realm, returning a promise that resolves to the module.
   * @param code The code of the module to evaluate.
   */
  evaluateModule(code: string): Promise<StaticJsModule>;

  /*
  The below is all internal.  We could isolate this from the public API using a different interface.
  Using stripInternal for now.
  */

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
  enqueueMicrotask(evaluator: EvaluationGenerator<void>): void;

  /**
   * Enqueues a macrotask to be executed in the next event loop tick.
   * @internal
   * @param evaluator The evaluator to enqueue.
   */
  enqueueMacrotask<TReturn>(
    evaluator: EvaluationGenerator<TReturn>,
    opts?: StaticJsRunMacrotaskOptions,
  ): Promise<TReturn>;

  /**
   * Invoke the given evaluator synchronously, returning the result.
   * @internal
   * @param evaluator The evaluator to invoke.
   */
  invokeEvaluatorSync<TReturn>(
    evaluator: EvaluationGenerator<TReturn>,
  ): TReturn;
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
