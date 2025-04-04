import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import StaticJsRealmImpl from "../implementation/StaticJsRealmImpl.js";
import { StaticJsRealm as IStaticJsRealm } from "../interfaces/index.js";

export interface StaticJsRealmGlobalDeclProperty {
  readonly configurable?: boolean;
  readonly enumerable?: boolean;
  readonly writable?: boolean;
  readonly value?: unknown;
  readonly get?: () => unknown | EvaluationGenerator<unknown>;
  readonly set?: (value: unknown) => void | EvaluationGenerator<void>;
}
export interface StaticJsRealmGlobalDecl {
  properties: Record<string, StaticJsRealmGlobalDeclProperty>;
  extensible?: boolean;
}
export interface StaticJsRealmGlobalValue {
  value: object;
}

export interface StaticJsRealmModuleExports {
  exports: Record<string, unknown>;
}

export type StaticJsRealmModule = StaticJsRealmModuleExports;
export interface StaticJsRealmOptions {
  globalThis?: { value: unknown };
  globalObject?: StaticJsRealmGlobalDecl | StaticJsRealmGlobalValue;
  modules?: Record<string, StaticJsRealmModule>;
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
