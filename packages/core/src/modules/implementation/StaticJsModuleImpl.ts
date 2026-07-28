import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsModule } from "#modules/StaticJsModule.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsRunTaskOptions } from "#tasks/StaticJsRunTaskOptions.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { getModuleNamespace } from "#modules/algorithms/get-module-namespace.js";
import { isTaggedSymbol } from "#utils/symbol-for.js";

import type { StaticJsModuleRecord } from "./modules/StaticJsModuleRecord.js";

import { Namespace } from "./symbols/Namespace.js";

export class StaticJsModuleImpl implements StaticJsModule {
  constructor(private readonly _moduleRecord: StaticJsModuleRecord) {}

  get realm(): StaticJsRealm {
    return this._moduleRecord.realm;
  }

  get specifier(): string {
    return this._moduleRecord.specifier;
  }

  getExportedNames(): string[] {
    return Array.from(this._moduleRecord.getExportedNames());
  }

  async getExportAsync(
    exportName: string,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue | null> {
    return this.realm.invokeEvaluatorAsync(this._getExportEvaluator(exportName), opts);
  }

  getExportSync(exportName: string, opts?: StaticJsRunTaskOptions): StaticJsValue | null {
    return this.realm.invokeEvaluatorSync(this._getExportEvaluator(exportName), opts);
  }

  private *_getExportEvaluator(exportName: string): EvaluationGenerator<StaticJsValue> {
    const binding = this._moduleRecord.resolveExport(exportName);
    if (binding === null || binding === "ambiguous") {
      return this.realm.types.null;
    }

    const { bindingName, module } = binding;

    if (isTaggedSymbol(bindingName, Namespace)) {
      return getModuleNamespace(module);
    }

    const moduleEnv = module.environment;
    // FIXME: Check specifically for status.
    if (!moduleEnv) {
      throw new StaticJsEngineError("Module has not yet been initialized");
    }

    return yield* moduleEnv.getBindingValueEvaluator(bindingName, true);
  }

  async getModuleNamespaceAsync(): Promise<StaticJsObject> {
    return getModuleNamespace(this._moduleRecord);
  }

  getModuleNamespaceSync(_opts?: StaticJsRunTaskOptions): StaticJsObject {
    return getModuleNamespace(this._moduleRecord);
  }
}
