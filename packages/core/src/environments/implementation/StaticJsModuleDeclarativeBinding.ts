import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsModuleImpl } from "#modules/implementation/modules/StaticJsModuleImpl.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { allocated } from "#memory/allocated.js";
import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";

import { StaticJsDeclarativeBinding } from "./StaticJsDeclarativeBinding.js";

export interface StaticJsModuleDeclarativeBindingCreateParams {
  realm: StaticJsRealm;
  name: string;
  module: StaticJsModuleImpl;
  targetName: string;
}

export class StaticJsModuleDeclarativeBinding extends StaticJsDeclarativeBinding {
  static create(
    params: StaticJsModuleDeclarativeBindingCreateParams,
  ): StaticJsModuleDeclarativeBinding {
    return allocated(new StaticJsModuleDeclarativeBinding(params));
  }

  private readonly _module: StaticJsModuleImpl;
  private readonly _targetName: string;

  constructor({ realm, name, module, targetName }: StaticJsModuleDeclarativeBindingCreateParams) {
    super({
      realm,
      name,
      isMutable: false,
      isStrict: true,
      isDeletable: false,
    });
    this._module = module;
    this._targetName = targetName;
  }

  override *isInitialized(): EvaluationGenerator<boolean> {
    // Not sure how the spec expects these to work...
    const env = this._module.environment;
    if (!env) {
      return false;
    }

    return yield* env.isInitializedEvaluator(this._targetName);
  }

  override *initialize(): EvaluationGenerator<void> {
    throw new StaticJsEngineError(
      "Module declarative bindings cannot be initialized directly. They are initialized by the module system.",
    );
  }

  override *get(): EvaluationGenerator<StaticJsValue> {
    const env = this._module.environment;
    if (!env) {
      throw new StaticJsEngineError(
        "Module declarative bindings cannot be accessed before the module is initialized.",
      );
    }

    return yield* env.getBindingValueEvaluator(this._targetName, true);
  }

  override *set(): EvaluationGenerator<void> {
    throw yield* Completion.Throw.create("TypeError", `Assignment to module import`);
  }

  override mark(set: Set<StaticJsAllocation>): void {
    if (set.has(this)) {
      return;
    }

    set.add(this);

    this._module.mark(set);
  }

  override allocateSelf(
    allocate: StaticJsAllocator = this.realm.memory.allocate.bind(this.realm.memory),
  ): void {
    allocate?.(StaticJsMemoryAllocationTag.RawString, this._targetName);
  }
}
