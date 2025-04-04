import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";

import StaticJsModule from "../interfaces/StaticJsModule.js";
import StaticJsRealm from "../interfaces/StaticJsRealm.js";

const NoDependencies: readonly string[] = Object.freeze([]);

export default class StaticJsExternalModuleImpl implements StaticJsModule {
  private readonly _exportKeys: readonly string[];
  private readonly _exportRefs = new Map<string, StaticJsValue>();

  constructor(realm: StaticJsRealm, obj: Record<string, unknown>) {
    for (const [name, value] of Object.entries(obj)) {
      this._exportRefs.set(name, realm.types.toStaticJsValue(value));
    }
    this._exportKeys = Object.freeze([...this._exportRefs.keys()]);
  }

  get dependencies(): readonly string[] {
    return NoDependencies;
  }

  *execute(): EvaluationGenerator<void> {}

  hasExport(name: string): boolean {
    return this._exportRefs.has(name);
  }

  getExport(name: string): StaticJsValue {
    const value = this._exportRefs.get(name);
    if (value) {
      return value;
    } else {
      throw new Error(`Module <external> has no export "${name}".`);
    }
  }

  getExportNames(): readonly string[] {
    return this._exportKeys;
  }
}
