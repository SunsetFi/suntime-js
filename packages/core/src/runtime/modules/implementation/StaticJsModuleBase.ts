import { Completion } from "../../../evaluator/completions/Completion.js";
import { EvaluationContext } from "../../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { StaticJsRunTaskOptions } from "../../tasks/StaticJsRunTaskOptions.js";
import { StaticJsNamespaceExoticObject } from "../../types/implementation/StaticJsNamespaceExoticObject.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";
import type { StaticJsModule } from "../StaticJsModule.js";
import type {
  StaticJsModuleImplementation,
  StaticJsModuleStatus,
} from "../StaticJsModuleImplementation.js";

import { BindingNameNamespace, type StaticJsResolvedBinding } from "./StaticJsResolvedBinding.js";

export abstract class StaticJsModuleBase implements StaticJsModule, StaticJsModuleImplementation {
  private _cachedNamespaceObject: StaticJsObject | null = null;

  constructor(
    protected readonly _name: string,
    protected readonly _realm: StaticJsRealm,
  ) {}

  get name(): string {
    return this._name;
  }

  abstract get status(): StaticJsModuleStatus;

  abstract linkModules(): Promise<void>;

  abstract moduleDeclarationInstantiationEvaluator(): EvaluationGenerator<void>;

  abstract moduleEvaluationEvaluator(): EvaluationGenerator<void | Promise<void>>;

  resolveExport(exportName: string, opts?: StaticJsRunTaskOptions): StaticJsResolvedBinding {
    try {
      return this._realm.invokeEvaluatorSync(this.resolveExportEvaluator(exportName), opts);
    } catch (e) {
      Completion.handleRuntime(e);
      throw e;
    }
  }

  abstract resolveExportEvaluator(
    name: string,
    resolveSet?: Set<string>,
  ): EvaluationGenerator<StaticJsResolvedBinding>;

  getExportedNames(opts?: StaticJsRunTaskOptions) {
    try {
      return this._realm.invokeEvaluatorSync(
        EvaluationContext.external(this.getExportedNamesEvaluator(), this._realm),
        opts,
      );
    } catch (e) {
      Completion.handleRuntime(e);

      throw e;
    }
  }

  abstract getExportedNamesEvaluator(): EvaluationGenerator<string[]>;

  abstract getOwnBindingValueEvaluator(
    bindingName: string,
  ): EvaluationGenerator<StaticJsValue | null>;

  async getExportAsync(
    exportName: string,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue | null> {
    return await this._realm.invokeEvaluatorAsync(
      EvaluationContext.external(this._getExportEvaluator(exportName), this._realm),
      opts,
    );
  }

  getExportJsSync(exportName: string, opts?: StaticJsRunTaskOptions): unknown {
    try {
      const result = this._realm.invokeEvaluatorSync(
        EvaluationContext.external(this._getExportEvaluator(exportName), this._realm),
        opts,
      );
      return result ? result.toNative() : null;
    } catch (e) {
      Completion.handleRuntime(e);

      throw e;
    }
  }

  getModuleNamespaceAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsObject> {
    return this._realm.invokeEvaluatorAsync(
      EvaluationContext.external(this.getModuleNamespaceEvaluator(), this._realm),
      opts,
    );
  }

  getModuleNamespaceJsSync(opts?: StaticJsRunTaskOptions): Record<string, unknown> {
    try {
      const result = this._realm.invokeEvaluatorSync(this.getModuleNamespaceEvaluator(), opts);
      return result.toNative() as Record<string, unknown>;
    } catch (e) {
      Completion.handleRuntime(e);
      throw e;
    }
  }

  *getModuleNamespaceEvaluator(): EvaluationGenerator<StaticJsObject> {
    if (this._cachedNamespaceObject) {
      return this._cachedNamespaceObject;
    }

    const exportedNames = yield* this.getExportedNamesEvaluator();
    const unambiguousNames: string[] = [];
    for (const name of exportedNames) {
      const resolution = yield* this.resolveExportEvaluator(name);
      if (resolution && resolution !== "ambiguous") {
        unambiguousNames.push(name);
      }
    }

    // TODO: Apparently we need to sort the names here according to their code unit order.
    // As that potentially spans across multiple modules, I have no idea what that means for us.

    const ns = new StaticJsNamespaceExoticObject(this, unambiguousNames, this._realm);
    this._cachedNamespaceObject = ns;
    return ns;
  }

  private *_getExportEvaluator(exportName: string): EvaluationGenerator<StaticJsValue | null> {
    const resolution = yield* this.resolveExportEvaluator(exportName);
    if (resolution === null) {
      return null;
    }
    if (resolution === "ambiguous") {
      throw Completion.Throw(
        "ReferenceError",
        `Ambiguous binding ${exportName} in module ${this._name}.`,
      );
    }

    const { bindingName, module } = resolution;

    if (bindingName === BindingNameNamespace) {
      return yield* module.getModuleNamespaceEvaluator();
    }

    return yield* module.getOwnBindingValueEvaluator(bindingName);
  }
}
