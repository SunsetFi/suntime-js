import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";

import StaticJsModule from "../interfaces/StaticJsModule.js";
import StaticJsRealm from "../interfaces/StaticJsRealm.js";

const NoDependencies: readonly string[] = Object.freeze([]);

export default class StaticJsExternalModuleImpl implements StaticJsModule {
  private readonly _exportKeys: readonly string[];

  constructor(
    private _realm: StaticJsRealm,
    private _obj: Record<string, unknown>,
  ) {
    this._exportKeys = Object.freeze([...Object.keys(_obj)]);
  }

  get dependencies(): readonly string[] {
    return NoDependencies;
  }

  *execute(): EvaluationGenerator<void> {}

  hasExport(name: string): boolean {
    return this._exportKeys.includes(name);
  }

  getExport(name: string): StaticJsValue {
    if (!this._exportKeys.includes(name)) {
      throw new Error(`Module <external> has no export "${name}".`);
    }

    return this._realm.types.toStaticJsValue(this._obj[name]);
  }

  getExportNames(): readonly string[] {
    return this._exportKeys;
  }
}
