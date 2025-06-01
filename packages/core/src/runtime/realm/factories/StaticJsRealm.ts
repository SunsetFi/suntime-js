import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { StaticJsModule } from "../../modules/interfaces/StaticJsModule.js";
import { StaticJsModuleImplementation } from "../../modules/interfaces/StaticJsModuleImplementation.js";

import { StaticJsRealm as IStaticJsRealm } from "../interfaces/StaticJsRealm.js";

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

export type StaticJsRealmModule =
  | StaticJsRealmModuleExports
  | StaticJsModule
  | StaticJsModuleImplementation
  | string;

export type StaticJsRealmModuleFactory = (
  referencingModule: StaticJsModule,
  specifier: string,
) => Promise<StaticJsRealmModule>;

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
  modules?: Record<string, StaticJsRealmModule>;

  /**
   * A resolver function to resolve imported ECMA Modules not found in @see modules
   */
  resolveImportedModule?: StaticJsRealmModuleFactory;
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
