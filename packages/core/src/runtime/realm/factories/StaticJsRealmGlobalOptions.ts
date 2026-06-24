import type { MaybeEvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";
import type { StaticJsTypeFactory } from "../../types/StaticJsTypeFactory.js";

export interface StaticJsRealmGlobalDataPropertyDecl {
  readonly configurable?: boolean;
  readonly enumerable?: boolean;
  readonly writable?: boolean;
  readonly value: unknown;
}

export interface StaticJsRealmGlobalAccessorPropertyDecl {
  readonly configurable?: boolean;
  readonly enumerable?: boolean;
  get?(): MaybeEvaluationGenerator<unknown>;
  set?(value: unknown): MaybeEvaluationGenerator<void>;
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

export interface StaticJsRealmGlobalFactory {
  (types: StaticJsTypeFactory): StaticJsObject;
}

export type StaticJsRealmGlobalOption =
  | StaticJsRealmGlobalDecl
  | StaticJsRealmGlobalValue
  | StaticJsRealmGlobalFactory;
