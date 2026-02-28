import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../../types/StaticJsValue.js";

import type { StaticJsModuleImplementation } from "../../modules/StaticJsModuleImplementation.js";

import StaticJsEnvironmentRecordBase from "./StaticJsEnvironmentRecordBase.js";

interface ModuleBinding {
  module: StaticJsModuleImplementation;
  bindingName: string;
}
export default class StaticJsModuleEnvironmentRecord extends StaticJsEnvironmentRecordBase {
  private readonly _moduleBindings = new Map<string, ModuleBinding>();

  constructor(private readonly _realm: StaticJsRealm) {
    super(_realm.globalEnv);
  }

  *hasBindingEvaluator(name: string): EvaluationGenerator<boolean> {
    return this._moduleBindings.has(name);
  }

  *isInitializedEvaluator(name: string): EvaluationGenerator<boolean> {
    const binding = this._moduleBindings.get(name);
    if (!binding) {
      throw Completion.Throw(
        this._realm.types.error(
          "ReferenceError",
          `Binding ${name} does not exist in this module environment`,
        ),
      );
    }

    // Module bindings are always initialized.
    return true;
  }

  *createMutableBindingEvaluator(_name: string, _deletable: boolean) {
    throw Completion.Throw(
      this._realm.types.error(
        "TypeError",
        "Cannot create mutable bindings in a module environment record",
      ),
    );
  }

  *createImmutableBindingEvaluator(_name: string, _strict: boolean) {
    throw Completion.Throw(
      this._realm.types.error(
        "TypeError",
        "Cannot create immutable bindings in a module environment recor",
      ),
    );
  }

  *initializeBindingEvaluator(_name: string, _value: StaticJsValue): EvaluationGenerator<void> {
    throw Completion.Throw(
      this._realm.types.error(
        "TypeError",
        "Cannot initialize bindings in a module environment record",
      ),
    );
  }

  *setMutableBindingEvaluator(
    name: string,
    _value: StaticJsValue,
    _strict: boolean,
  ): EvaluationGenerator<void> {
    if (this._moduleBindings.has(name)) {
      throw Completion.Throw(this._realm.types.error("TypeError", "Assignment to constant"));
    }

    throw Completion.Throw(
      this._realm.types.error(
        "ReferenceError",
        `Binding ${name} does not exist in this module environment`,
      ),
    );
  }

  *getBindingValueEvaluator(name: string, _strict: boolean): EvaluationGenerator<StaticJsValue> {
    const binding = this._moduleBindings.get(name);
    if (!binding) {
      throw Completion.Throw(
        this._realm.types.error(
          "ReferenceError",
          `Binding ${name} does not exist in this module environment`,
        ),
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
    throw Completion.Throw(
      this._realm.types.error(
        "TypeError",
        "Cannot delete bindings in a module environment record.",
      ),
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

  *getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
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
}
