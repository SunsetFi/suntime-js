import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsObjectLike } from "../../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsResolvedBinding } from "./StaticJsResolvedBinding.js";
import type { StaticJsModule } from "../StaticJsModule.js";

import { StaticJsModuleBase } from "./StaticJsModuleBase.js";
import type { StaticJsPropertyDescriptor } from "../../types/StaticJsPropertyDescriptor.js";
import StaticJsFunctionImpl from "../../types/implementation/StaticJsFunctionImpl.js";

export default class StaticJsExternalModuleImpl
  extends StaticJsModuleBase
  implements StaticJsModule
{
  private readonly _exportKeys: readonly string[];

  constructor(
    name: string,
    private _obj: Record<string, unknown>,
    realm: StaticJsRealm,
  ) {
    super(name, realm);
    this._exportKeys = Object.freeze([...Object.keys(_obj)]);
  }

  get name() {
    return this._name;
  }

  get moduleSpecifier() {
    // TODO: Figure out how to get an absolute value for this if we ever do relative imports.
    return this._name;
  }

  get status() {
    return "instantiated" as const;
  }

  linkModules() {
    return Promise.resolve<void>(undefined);
  }

  *moduleDeclarationInstantiationEvaluator(): EvaluationGenerator {
    // No-op for external modules.
    return null;
  }

  *moduleEvaluationEvaluator(): EvaluationGenerator {
    // No-op for external modules.
    return null;
  }

  *resolveExportEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsResolvedBinding> {
    if (!this._exportKeys.includes(name)) {
      return null;
    }

    return {
      module: this,
      bindingName: name === "default" ? "*default*" : name,
    };
  }

  *getExportedNamesEvaluator(): EvaluationGenerator<string[]> {
    return [...this._exportKeys].filter((x) => x !== "default");
  }

  *getOwnBindingValueEvaluator(
    bindingName: string,
  ): EvaluationGenerator<StaticJsValue | null> {
    if (bindingName === "*default*") {
      bindingName = "default";
    }
    if (!this._exportKeys.includes(bindingName)) {
      return null;
    }

    return this._realm.types.toStaticJsValue(this._obj[bindingName]);
  }

  *getModuleNamespaceEvaluator(): EvaluationGenerator<StaticJsObjectLike> {
    const types = this._realm.types;
    const obj = this._obj;

    const properties: Record<string, StaticJsPropertyDescriptor> = {};
    for (const key of this._exportKeys) {
      properties[key] = {
        get: new StaticJsFunctionImpl(this._realm, key, function* () {
          return types.toStaticJsValue(obj[key]);
        }),
        writable: false,
        enumerable: true,
        configurable: false,
      };
    }

    return this._realm.types.object(properties);
  }
}
