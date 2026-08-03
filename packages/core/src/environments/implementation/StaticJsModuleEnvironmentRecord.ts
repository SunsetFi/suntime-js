import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsModuleImpl } from "#modules/implementation/modules/StaticJsModuleImpl.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { allocated } from "#memory/allocated.js";
import { assert } from "#utils/assert.js";

import {
  StaticJsDeclarativeEnvironmentRecord,
  type StaticJsDeclarativeEnvironmentRecordCreateParams,
} from "./StaticJsDeclarativeEnvironmentRecord.js";
import { StaticJsModuleDeclarativeBinding } from "./StaticJsModuleDeclarativeBinding.js";

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

  override *getBindingValueEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<StaticJsValue> {
    assert(
      strict,
      "Strict must always be true for StaticJsModuleEnvironmentRecord.getBindingValueEvaluator",
    );

    assert(
      () => this._bindings.has(name),
      "StaticJsModuleEnvironmentRecord should never have getBindingValueEvaluator called with a non-existent binding",
    );

    // Since we inverted control to DeclarativeBinding, the overrides for ModuleEnvironmentRecord no longer apply.
    // This module system is a mess... Some behavior is in overrides, some is in hand-wavy "The binding shall" spec statements.
    // But since we solved hasBindingEvaluator not being aware of module bindings by adding module bindings to the system,
    // that means this special handling logic is now totally unneeded and kept within ModuleDeclarativeBinding.

    return yield* super.getBindingValueEvaluator(name, strict);
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
      () => !this._bindings.has(name),
      `StaticJsModuleEnvironmentRecord createImportBinding called with duplicate binding ${name}`,
    );

    this._bindings.set(
      name,
      StaticJsModuleDeclarativeBinding.create({
        realm: this._realm,
        name,
        module,
        targetName: bindingName,
      }),
    );
  }
}
