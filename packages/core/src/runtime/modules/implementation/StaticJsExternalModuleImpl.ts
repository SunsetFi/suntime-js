import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { NormalCompletion } from "../../../evaluator/completions/NormalCompletion.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import { StaticJsObjectLike } from "../../types/interfaces/StaticJsObject.js";
import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";

import { StaticJsRealm } from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsResolvedBinding } from "../interfaces/StaticJsResolvedBinding.js";
import { StaticJsModule } from "../interfaces/StaticJsModule.js";

import { StaticJsModuleBase } from "./StaticJsModuleBase.js";

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
    return NormalCompletion();
  }

  *moduleEvaluationEvaluator(): EvaluationGenerator {
    // No-op for external modules.
    return NormalCompletion();
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
  ): EvaluationGenerator<StaticJsValue | ThrowCompletion | null> {
    if (bindingName === "*default*") {
      bindingName = "default";
    }
    if (!this._exportKeys.includes(bindingName)) {
      return null;
    }

    return this._realm.types.toStaticJsValue(this._obj[bindingName]);
  }

  getModuleNamespaceEvaluator(): EvaluationGenerator<
    StaticJsObjectLike | ThrowCompletion
  > {
    throw new Error("Method not implemented.");
  }
}
