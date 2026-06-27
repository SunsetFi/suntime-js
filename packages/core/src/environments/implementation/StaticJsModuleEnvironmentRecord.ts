import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsMarkable, StaticJsMarkableAllocator } from "#memory/StaticJsMarkable.js";
import type { StaticJsModuleImplementation } from "#modules/StaticJsModuleImplementation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";

import { StaticJsEnvironmentRecordBase } from "./StaticJsEnvironmentRecordBase.js";

interface ModuleBinding {
  module: StaticJsModuleImplementation;
  bindingName: string;
}
export class StaticJsModuleEnvironmentRecord extends StaticJsEnvironmentRecordBase {
  private readonly _moduleBindings = new Map<string, ModuleBinding>();

  constructor(private readonly _realm: StaticJsRealm) {
    super(_realm.globalEnv);
  }

  *inspectBindingsEvaluator(): EvaluationGenerator<Record<string, StaticJsValue | null>> {
    const result: Record<string, StaticJsValue | null> = {};
    for (const [name, { module, bindingName }] of this._moduleBindings.entries()) {
      result[name] = yield* module.getOwnBindingValueEvaluator(bindingName);
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
    const value = yield* module.getOwnBindingValueEvaluator(bindingName);
    if (value == null) {
      throw new StaticJsEngineError(`Export ${name} not found in module ${module.name}.`);
    }
    return value;
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

  *createImportBindingEvaluator(
    name: string,
    module: StaticJsModuleImplementation,
    bindingName: string,
  ): EvaluationGenerator<void> {
    this._moduleBindings.set(name, { module, bindingName });
  }

  mark(marks: Set<StaticJsMarkable>, allocate?: StaticJsMarkableAllocator): void {
    if (marks.has(this)) {
      return;
    }

    marks.add(this);

    for (const { module } of this._moduleBindings.values()) {
      module.mark(marks, allocate);
    }
  }
}
