import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import StaticJsRealmImpl from "../implementation/StaticJsRealmImpl.js";
import IStaticJsRealm from "../interfaces/StaticJsRealm.js";
import { StaticJsModule } from "../interfaces/StaticJsModule.js";

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

export type StaticJsRealmModule = StaticJsRealmModuleExports | StaticJsModule;
export interface StaticJsRealmOptions {
  globalThis?: { value: unknown };
  globalObject?: StaticJsRealmGlobalDecl | StaticJsRealmGlobalValue;
  modules?: Record<string, StaticJsRealmModule>;
  resolveModule?(moduleName: string): StaticJsRealmModule | string | null;
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
