import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { NormalCompletion } from "../../../evaluator/internal.js";
import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";

import StaticJsModule from "../interfaces/StaticJsModule.js";
import StaticJsRealm from "../interfaces/StaticJsRealm.js";

export default class StaticJsExternalModuleImpl implements StaticJsModule {
  private readonly _exportKeys: readonly string[];

  constructor(
    private _name: string,
    private _realm: StaticJsRealm,
    private _obj: Record<string, unknown>,
  ) {
    this._exportKeys = Object.freeze([...Object.keys(_obj)]);
  }

  get name() {
    return this._name;
  }

  get status() {
    return "instantiated" as const;
  }

  *moduleDeclarationInstantiation(): EvaluationGenerator {
    // No-op for external modules.
    return NormalCompletion();
  }

  *moduleEvaluation(): EvaluationGenerator {
    // No-op for external modules.
    return NormalCompletion();
  }

  hasExport(name: string): boolean {
    return this._exportKeys.includes(name);
  }

  resolveExport(name: string): StaticJsValue {
    if (!this._exportKeys.includes(name)) {
      throw new Error(`Module <external> has no export "${name}".`);
    }

    return this._realm.types.toStaticJsValue(this._obj[name]);
  }

  getExportedNames(): readonly string[] {
    return this._exportKeys;
  }
}
