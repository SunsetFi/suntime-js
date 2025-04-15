import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import StaticJsBaseEnvironmentRecord from "./StaticJsBaseEnvironment.js";
import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import { StaticJsEnvironmentGetBinding } from "./StaticJsEnvironmentBindingProvider.js";

export interface StaticJsModuleEnvironmentImport {
  moduleName: string;
  bindings: Record<string, string>;
}

export default class StaticJsModuleEnvironmentRecord extends StaticJsBaseEnvironmentRecord {
  private readonly _bindings: Record<string, StaticJsEnvironmentBinding> = {};

  constructor(
    realm: StaticJsRealm,
    imports: StaticJsModuleEnvironmentImport[],
  ) {
    super(realm);

    for (const { moduleName, bindings } of imports) {
      const module = realm.modules.get(moduleName);
      if (!module) {
        throw new Error(`Module ${moduleName} not found.`);
      }

      for (const [localName, exportName] of Object.entries(bindings)) {
        if (!module.hasExport(exportName)) {
          throw new Error(
            `Binding ${exportName} not found in module ${moduleName}.`,
          );
        }

        this._bindings[localName] = {
          name: localName,
          // TODO: We link everything before we evaluate modules, so maybe have this reflect the module's evaluation status.
          // Currently, however, modules are only provided statically by the host.
          isInitialized: true,
          isMutable: false,
          isDeletable: false,
          *initialize() {
            throw new Error(
              `Cannot initialize binding ${localName}.  Module imports cannot be initialized.`,
            );
          },
          *get() {
            const value = module.getExport(exportName);
            if (value === undefined) {
              throw new Error(
                `Export ${exportName} not found in module ${moduleName}.`,
              );
            }
            return value;
          },
          *set(value) {
            throw new Error(
              `Cannot set binding ${localName} to ${value}.  Module imports cannot be assigned.`,
            );
          },
          *delete() {
            throw new Error(
              `Cannot delete binding ${localName}.  Module imports cannot be deleted.`,
            );
          },
        };
      }
    }
  }

  *createMutableBindingEvaluator() {
    throw new Error("Cannot create bindings in a module environment record.");
  }

  *createImmutableBindingEvaluator() {
    throw new Error("Cannot create bindings in a module environment record.");
  }

  [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined {
    return this._bindings[name];
  }
}
