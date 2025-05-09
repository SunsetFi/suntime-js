import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import {
  NormalCompletion,
  ThrowCompletion,
} from "../../../evaluator/internal.js";
import StaticJsModule from "../../realm/interfaces/StaticJsModule.js";
import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";
import { StaticJsDeclarativeEnvironmentRecord } from "./index.js";

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
    module: StaticJsModule,
    exportName: string,
  ): EvaluationGenerator {
    if (!module.hasExport(exportName)) {
      return ThrowCompletion(
        this.realm.types.error(
          "ReferenceError",
          `Export ${exportName} not found in module ${module.name}.`,
        ),
      );
    }

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
        const value = module.resolveExport(exportName);
        if (value === undefined) {
          throw new Error(`Export ${exportName} not found in module ${name}.`);
        }
        return value;
      },
      *set(value) {
        throw new Error(
          `Cannot set binding ${name} to ${value}.  Module imports cannot be assigned.`,
        );
      },
      *delete() {
        throw new Error(
          `Cannot delete binding ${name}.  Module imports cannot be deleted.`,
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
