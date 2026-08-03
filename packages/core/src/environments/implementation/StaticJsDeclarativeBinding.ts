import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

export interface StaticJsDeclarativeBindingCreateParams {
  realm: StaticJsRealm;
  name: string;
  isMutable: boolean;
  isStrict: boolean;
  isDeletable: boolean;
}

/**
 * Represents a declarative binding for a {@link StaticJsDeclarativeEnvironmentRecord}.  This is an abstract class that
 * is implemented by {@link StaticJsValueDeclarativeBinding} and {@link StaticJsModuleBinding}.  The former is used for
 * normal variable bindings, while the latter is used for module bindings.
 *
 * DeclarativeEnvironmentRecords are defined somewhat tautologically over
 * an abstract notion of a "binding".  This leads to confusion where
 * ModuleEnvironmentRecords are defined as adding bindings, but not overriding
 * behaviors of DeclarativeEnvironmentRecords that in fact need to change
 * for module binding behaviors.
 */
export abstract class StaticJsDeclarativeBinding implements StaticJsAllocation {
  readonly realm: StaticJsRealm;
  readonly name: string;
  readonly isMutable: boolean;
  readonly isStrict: boolean;
  readonly isDeletable: boolean;

  protected constructor(params: StaticJsDeclarativeBindingCreateParams) {
    this.realm = params.realm;
    this.name = params.name;
    this.isMutable = params.isMutable;
    this.isStrict = params.isStrict;
    this.isDeletable = params.isDeletable;
  }

  abstract isInitialized(): EvaluationGenerator<boolean>;
  abstract initialize(value: StaticJsValue): EvaluationGenerator<void>;
  abstract get(): EvaluationGenerator<StaticJsValue>;
  abstract set(value: StaticJsValue, strict: boolean): EvaluationGenerator<void>;

  abstract mark(set: Set<StaticJsAllocation>): void;
  abstract allocateSelf(allocate?: StaticJsAllocator): void;
}
