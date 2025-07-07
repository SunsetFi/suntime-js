import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsModule } from "../../modules/StaticJsModule.js";
import type { StaticJsModuleImplementation } from "../../modules/StaticJsModuleImplementation.js";

import type { StaticJsRealm as IStaticJsRealm } from "../StaticJsRealm.js";

import type { StaticJsTaskRunner } from "../StaticJsTaskIterator.js";

import StaticJsRealmImpl from "../implementation/StaticJsRealmImpl.js";

export interface StaticJsRealmGlobalDataPropertyDecl {
  readonly configurable?: boolean;
  readonly enumerable?: boolean;
  readonly writable?: boolean;
  readonly value: unknown;
}

export interface StaticJsRealmGlobalAccessorPropertyDecl {
  readonly configurable?: boolean;
  readonly enumerable?: boolean;
  get?(): unknown | EvaluationGenerator<unknown>;
  set?(value: unknown): void | EvaluationGenerator<void>;
}
export type StaticJsRealmGlobalDeclProperty =
  | StaticJsRealmGlobalDataPropertyDecl
  | StaticJsRealmGlobalAccessorPropertyDecl;
export interface StaticJsRealmGlobalDecl {
  properties: Record<string, StaticJsRealmGlobalDeclProperty>;
}
export interface StaticJsRealmGlobalValue {
  value: object;
}

export interface StaticJsRealmModuleExports {
  exports: Record<string, unknown>;
}

/**
 * Valid types for an ECMAScript Module resolution.
 */
export type StaticJsModuleResolution =
  | StaticJsRealmModuleExports
  | StaticJsModule
  | StaticJsModuleImplementation
  | string;

/**
 * A factory function to resolve an imported ECMAScript Module.
 */
export type StaticJsModuleResolver = (
  referencingModule: StaticJsModule,
  specifier: string,
) => Promise<StaticJsModuleResolution>;

/**
 * Options for creating a StaticJsRealm.
 */
export interface StaticJsRealmOptions {
  /**
   * Settings for the global 'this' object in the realm.
   */
  globalThis?: { value: unknown };

  /**
   * Settings for the global object in the realm.
   */
  globalObject?: StaticJsRealmGlobalDecl | StaticJsRealmGlobalValue;

  /**
   * Statically defined ECMA Modules.
   */
  modules?: Record<string, StaticJsModuleResolution>;

  /**
   * A resolver function to resolve imported ECMA Modules not found in @see modules
   */
  resolveImportedModule?: StaticJsModuleResolver;

  /**
   * Invoked when the realm wants to run a task.
   *
   * The implementation should call .next() on the evaluator until it is done.
   * This may be done synchronously or asynchronously.
   */
  runTask?: StaticJsTaskRunner;
}

/**
 * Creates a StaticJsRealm
 * @param opts - Options for creating the realm.
 * @returns The created realm.
 * @public
 */
export default function StaticJsRealm(
  opts: StaticJsRealmOptions = {},
): IStaticJsRealm {
  return new StaticJsRealmImpl(opts);
}
