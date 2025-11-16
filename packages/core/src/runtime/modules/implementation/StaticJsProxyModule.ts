import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsObjectLike } from "../../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

import type { StaticJsModule } from "../StaticJsModule.js";

import type {
  StaticJsModuleImplementation,
  StaticJsModuleStatus,
} from "../StaticJsModuleImplementation.js";

import type { StaticJsResolvedBinding } from "../StaticJsResolvedBinding.js";

export default class StaticJsProxyModule
  implements StaticJsModuleImplementation
{
  private _proxied: StaticJsModuleImplementation | null = null;

  constructor(
    private readonly _requestingModule: StaticJsModule | null,
    private readonly _requestingSpecifier: string,
  ) {}

  resolve(module: StaticJsModuleImplementation) {
    if (this._proxied !== null) {
      throw new Error("Module already resolved");
    }
    this._proxied = module;
  }

  get requestingModule(): StaticJsModule | null {
    return this._requestingModule;
  }

  get requestingSpecifier(): string {
    return this._requestingSpecifier;
  }

  get name(): string {
    const proxied = this._verifyProxyResolved();
    return proxied.name;
  }

  get status(): StaticJsModuleStatus {
    if (this._proxied === null) {
      return "instantiated";
    }
    return this._proxied.status;
  }

  linkModules(): Promise<void> {
    const proxied = this._verifyProxyResolved();
    return proxied.linkModules();
  }

  moduleDeclarationInstantiationEvaluator(): EvaluationGenerator {
    const proxied = this._verifyProxyResolved();
    return proxied.moduleDeclarationInstantiationEvaluator();
  }

  moduleEvaluationEvaluator(): EvaluationGenerator {
    const proxied = this._verifyProxyResolved();
    return proxied.moduleEvaluationEvaluator();
  }

  resolveExportEvaluator(
    exportName: string,
    resolveSet?: Set<string>,
  ): EvaluationGenerator<StaticJsResolvedBinding> {
    const proxied = this._verifyProxyResolved();
    return proxied.resolveExportEvaluator(exportName, resolveSet);
  }

  getExportedNamesEvaluator(
    exportStarSet?: Set<string>,
  ): EvaluationGenerator<string[]> {
    const proxied = this._verifyProxyResolved();
    return proxied.getExportedNamesEvaluator(exportStarSet);
  }

  getOwnBindingValueEvaluator(
    bindingName: string,
  ): EvaluationGenerator<StaticJsValue | null> {
    const proxied = this._verifyProxyResolved();
    return proxied.getOwnBindingValueEvaluator(bindingName);
  }

  getModuleNamespaceEvaluator(): EvaluationGenerator<StaticJsObjectLike> {
    const proxied = this._verifyProxyResolved();
    return proxied.getModuleNamespaceEvaluator();
  }

  getExportedNames(): string[] {
    const proxied = this._verifyProxyResolved();
    return proxied.getExportedNames();
  }

  getExport(exportName: string): unknown {
    const proxied = this._verifyProxyResolved();
    return proxied.getExport(exportName);
  }

  getModuleNamespace(): Record<string, unknown> {
    const proxied = this._verifyProxyResolved();
    return proxied.getModuleNamespace();
  }

  // Can't get the asserts this is ... to work with private fields
  private _verifyProxyResolved(): StaticJsModuleImplementation {
    if (this._proxied === null) {
      throw new Error(
        `Module ${this._requestingSpecifier} is not yet resolved`,
      );
    }

    return this._proxied;
  }
}
