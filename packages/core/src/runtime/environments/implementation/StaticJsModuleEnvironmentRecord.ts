import { isThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";
import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import NormalCompletion from "../../../evaluator/completions/NormalCompletion.js";
import StaticJsEngineError from "../../../evaluator/StaticJsEngineError.js";
import StaticJsRuntimeError from "../../../evaluator/StaticJsRuntimeError.js";

import { StaticJsModuleImplementation } from "../../realm/interfaces/StaticJsModuleImplementation.js";
import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";
import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
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
      // TODO: We link everything before we evaluate modules, so maybe have this reflect the module's evaluation status.
      // Currently, however, modules are only provided statically by the host.
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
        if (isThrowCompletion(value)) {
          // FIXME: Make this return throw completions
          throw new StaticJsRuntimeError(value.value);
        }
        if (value == null) {
          throw new StaticJsEngineError(
            `Export ${bindingName} not found in module ${module.name}.`,
          );
        }
        return value;
      },
      *set(value) {
        // FIXME: Make set return throw completions.
        throw new StaticJsRuntimeError(
          realm.types.error(
            "TypeError",
            `Cannot set binding ${name} to ${value}.  Module imports cannot be assigned.`,
          ),
        );
      },
      *delete() {
        throw new StaticJsRuntimeError(
          realm.types.error(
            "TypeError",
            `Cannot delete binding ${name}.  Module imports cannot be deleted.`,
          ),
        );
      },
    });

    return NormalCompletion();
  }

  [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined {
    return (
      this._moduleBindings.get(name) ??
      super[StaticJsEnvironmentGetBinding](name)
    );
  }
}
