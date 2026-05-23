import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsObject } from "../../types/StaticJsObject.js";
import { StaticJsTypeFactory } from "../../types/StaticJsTypeFactory.js";

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

export interface StaticJsRealmGlobalFactory {
  (types: StaticJsTypeFactory): StaticJsObject;
}

export type StaticJsRealmGlobalOption =
  | StaticJsRealmGlobalDecl
  | StaticJsRealmGlobalValue
  | StaticJsRealmGlobalFactory;
