import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsModuleImplementation } from "../../modules/StaticJsModuleImplementation.js";

import StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";
import type StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import { StaticJsEnvironmentGetBinding } from "./StaticJsEnvironmentBindingProvider.js";

export default class StaticJsModuleEnvironmentRecord extends StaticJsDeclarativeEnvironmentRecord {
  private readonly _moduleBindings = new Map<
    string,
    StaticJsEnvironmentBinding
  >();

  constructor(realm: StaticJsRealm) {
    super(realm);
  }

  *createImportBindingEvaluator(
    name: string,
    module: StaticJsModuleImplementation,
    bindingName: string,
  ): EvaluationGenerator {
    const realm = this.realm;
    this._moduleBindings.set(name, {
      isInitialized: true,
      isMutable: false,
      isDeletable: false,
      *initialize() {
        throw new Error(
          `Cannot initialize binding ${name}.  Module imports cannot be initialized.`,
        );
      },
      *get() {
        const value = yield* module.getOwnBindingValueEvaluator(bindingName);
        if (value == null) {
          throw new StaticJsEngineError(
            `Export ${bindingName} not found in module ${module.name}.`,
          );
        }
        return value;
      },
      *set(value) {
        throw new ThrowCompletion(
          realm.types.error(
            "TypeError",
            `Cannot set binding ${name} to ${value}.  Module imports cannot be assigned.`,
          ),
        );
      },
      *delete() {
        throw new ThrowCompletion(
          realm.types.error(
            "TypeError",
            `Cannot delete binding ${name}.  Module imports cannot be deleted.`,
          ),
        );
      },
    });

    return null;
  }

  *[StaticJsEnvironmentGetBinding](
    name: string,
  ): EvaluationGenerator<StaticJsEnvironmentBinding | undefined> {
    const moduleBinding = this._moduleBindings.get(name);
    if (moduleBinding) {
      return moduleBinding;
    }

    return yield* super[StaticJsEnvironmentGetBinding](name);
  }
}
