import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsModuleRecord } from "#modules/implementation-v2/modules/StaticJsModuleRecord.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { Completion } from "#evaluator/completions/Completion.js";
import { allocated } from "#memory/allocated.js";
import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";
import { assert } from "#utils/assert.js";

import {
  StaticJsEnvironmentRecordBase,
  type StaticJsEnvironmentRecordBaseCreateParams,
} from "./StaticJsEnvironmentRecordBase.js";

interface ModuleBinding {
  module: StaticJsModuleRecord;
  bindingName: string;
}

export type StaticJsModuleEnvironmentRecordCreateParams = StaticJsEnvironmentRecordBaseCreateParams;

export class StaticJsModuleEnvironmentRecord extends StaticJsEnvironmentRecordBase {
  private readonly _moduleBindings = new Map<string, ModuleBinding>();

  static create(
    params: StaticJsModuleEnvironmentRecordCreateParams,
  ): StaticJsModuleEnvironmentRecord {
    return allocated(new StaticJsModuleEnvironmentRecord(params.realm));
  }

  protected constructor(private readonly _realm: StaticJsRealm) {
    super(_realm.globalEnv);
  }

  *inspectBindingsEvaluator(): EvaluationGenerator<Record<string, StaticJsValue | null>> {
    const result: Record<string, StaticJsValue | null> = {};
    for (const [name, { module, bindingName }] of this._moduleBindings.entries()) {
      assert.notNull(
        module.environment,
        "Module environment should not be null in StaticJsModuleEnvironmentRecord inspectBindingsEvaluator",
      );
      const value = yield* module.environment.getBindingValueEvaluator(bindingName, true);
      result[name] = value;
    }
    return result;
  }

  *hasBindingEvaluator(name: string): EvaluationGenerator<boolean> {
    return this._moduleBindings.has(name);
  }

  *isInitializedEvaluator(name: string): EvaluationGenerator<boolean> {
    const binding = this._moduleBindings.get(name);
    if (!binding) {
      throw yield* Completion.Throw.create(
        "ReferenceError",
        `Binding ${name} does not exist in this module environment`,
      );
    }

    // Module bindings are always initialized.
    return true;
  }

  *createMutableBindingEvaluator(_name: string, _deletable: boolean) {
    throw yield* Completion.Throw.create(
      "TypeError",
      "Cannot create mutable bindings in a module environment record",
    );
  }

  *createImmutableBindingEvaluator(_name: string, _strict: boolean) {
    throw yield* Completion.Throw.create(
      "TypeError",
      "Cannot create immutable bindings in a module environment recor",
    );
  }

  *initializeBindingEvaluator(_name: string, _value: StaticJsValue): EvaluationGenerator<void> {
    throw yield* Completion.Throw.create(
      "TypeError",
      "Cannot initialize bindings in a module environment record",
    );
  }

  *setMutableBindingEvaluator(
    name: string,
    _value: StaticJsValue,
    _strict: boolean,
  ): EvaluationGenerator<void> {
    if (this._moduleBindings.has(name)) {
      throw yield* Completion.Throw.create("TypeError", "Assignment to constant");
    }

    throw yield* Completion.Throw.create(
      "ReferenceError",
      `Binding ${name} does not exist in this module environment`,
    );
  }

  *getBindingValueEvaluator(name: string, _strict: boolean): EvaluationGenerator<StaticJsValue> {
    const binding = this._moduleBindings.get(name);
    if (!binding) {
      throw yield* Completion.Throw.create(
        "ReferenceError",
        `Binding ${name} does not exist in this module environment`,
      );
    }

    const { module, bindingName } = binding;
    assert.notNull(
      module.environment,
      "Module environment should not be null in StaticJsModuleEnvironmentRecord getBindingValueEvaluator",
    );

    return yield* module.environment.getBindingValueEvaluator(bindingName, true);
  }

  *deleteBindingEvaluator(_name: string): EvaluationGenerator<boolean> {
    throw yield* Completion.Throw.create(
      "TypeError",
      "Cannot delete bindings in a module environment record.",
    );
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
  }

  *hasSuperBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  *withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
  }

  createImportBinding(name: string, module: StaticJsModuleRecord, bindingName: string): void {
    this._moduleBindings.set(name, { module, bindingName });
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
