import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsModuleImpl } from "#modules/implementation/modules/StaticJsModuleImpl.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { allocated } from "#memory/allocated.js";
import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";
import { assert } from "#utils/assert.js";

import {
  StaticJsDeclarativeEnvironmentRecord,
  type StaticJsDeclarativeEnvironmentRecordCreateParams,
} from "./StaticJsDeclarativeEnvironmentRecord.js";

interface ModuleBinding {
  module: StaticJsModuleImpl;
  targetName: string;
}

export type StaticJsModuleEnvironmentRecordCreateParams =
  StaticJsDeclarativeEnvironmentRecordCreateParams;

export class StaticJsModuleEnvironmentRecord extends StaticJsDeclarativeEnvironmentRecord {
  static override create(
    params: StaticJsModuleEnvironmentRecordCreateParams,
  ): StaticJsModuleEnvironmentRecord {
    return allocated(new StaticJsModuleEnvironmentRecord(params));
  }

  protected constructor(params: StaticJsModuleEnvironmentRecordCreateParams) {
    super(params);
  }

  private readonly _moduleBindings = new Map<string, ModuleBinding>();

  override *getBindingValueEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<StaticJsValue> {
    assert(
      strict,
      "Strict must always be true for StaticJsModuleEnvironmentRecord.getBindingValueEvaluator",
    );
    const indirectBinding = this._moduleBindings.get(name);
    if (indirectBinding) {
      const { module, targetName } = indirectBinding;
      const targetEnv = module.environment;
      if (targetEnv == null) {
        throw yield* Completion.Throw.create(
          "ReferenceError",
          `Module binding ${name} of module ${module.specifier} accessed before module was initialized.`,
        );
      }
      return yield* Q(targetEnv.getBindingValueEvaluator(targetName, true));
    }

    const binding = this._bindings.get(name);
    assert.notNull(
      binding,
      "StaticJsModuleEnvironmentRecord should never have getBindingValueEvaluator called with a non-existent binding",
    );

    if (binding.value == null) {
      throw yield* Completion.Throw.create(
        "ReferenceError",
        `Cannot get value of uninitialized binding ${name}`,
      );
    }

    return binding.value;
  }

  override *deleteBindingEvaluator(): EvaluationGenerator<boolean> {
    // Should not be used
    throw new StaticJsEngineError(
      "StaticJsModuleEnvironmentRecord.deleteBindingEvaluator should not be used",
    );
  }

  override *hasThisBindingEvaluator() {
    return true;
  }

  override *getThisBindingEvaluator() {
    return this._realm.types.undefined;
  }

  createImportBinding(name: string, module: StaticJsModuleImpl, bindingName: string): void {
    assert(
      () => !this._bindings.has(name) && !this._moduleBindings.has(name),
      `StaticJsModuleEnvironmentRecord createImportBinding called with duplicate binding ${name}`,
    );

    this._moduleBindings.set(name, { module, targetName: bindingName });
  }

  override mark(marks: Set<StaticJsAllocation>): void {
    if (marks.has(this)) {
      return;
    }

    super.mark(marks);

    for (const { module } of this._moduleBindings.values()) {
      module.mark(marks);
    }
  }

  override allocateSelf(
    allocate: StaticJsAllocator = this._realm.memory.allocate.bind(this._realm.memory),
  ): void {
    super.allocateSelf(allocate);
    for (const name of this._moduleBindings.keys()) {
      allocate(StaticJsMemoryAllocationTag.RawString, name);
    }
  }
}
