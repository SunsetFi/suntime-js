import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

import type { StaticJsModule } from "../StaticJsModule.js";
import type {
  StaticJsModuleImplementation,
  StaticJsModuleStatus,
} from "../StaticJsModuleImplementation.js";

import {
  BindingNameNamespace,
  type StaticJsResolvedBinding,
} from "./StaticJsResolvedBinding.js";
import StaticJsNamespaceExoticObject from "../../types/implementation/StaticJsNamespaceExoticObject.js";

export abstract class StaticJsModuleBase
  implements StaticJsModule, StaticJsModuleImplementation
{
  private _cachedNamespaceObject: StaticJsObjectLike | null = null;

  constructor(
    protected readonly _name: string,
    protected readonly _realm: StaticJsRealm,
  ) {}

  get name(): string {
    return this._name;
  }

  abstract get status(): StaticJsModuleStatus;

  abstract linkModules(): Promise<void>;

  abstract moduleDeclarationInstantiationEvaluator(): EvaluationGenerator;

  abstract moduleEvaluationEvaluator(): EvaluationGenerator;

  resolveExport(exportName: string): StaticJsResolvedBinding {
    try {
      return this._realm.invokeEvaluatorSync(
        this.resolveExportEvaluator(exportName),
      );
    } catch (e) {
      Completion.handleRuntime(e);
      throw e;
    }
  }

  abstract resolveExportEvaluator(
    name: string,
    resolveSet?: Set<string>,
  ): EvaluationGenerator<StaticJsResolvedBinding>;

  getExportedNames() {
    try {
      return this._realm.invokeEvaluatorSync(this.getExportedNamesEvaluator());
    } catch (e) {
      Completion.handleRuntime(e);

      throw e;
    }
  }

  abstract getExportedNamesEvaluator(): EvaluationGenerator<string[]>;

  abstract getOwnBindingValueEvaluator(
    bindingName: string,
  ): EvaluationGenerator<StaticJsValue | null>;

  getExport(exportName: string): unknown {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    function* getExport() {
      const resolution = yield* self.resolveExportEvaluator(exportName);
      if (resolution === null) {
        return null;
      }
      if (resolution === "ambiguous") {
        throw Completion.Throw(
          self._realm.types.error(
            "ReferenceError",
            `Ambiguous binding ${exportName} in module ${self._name}.`,
          ),
        );
      }

      const { bindingName, module } = resolution;

      if (bindingName === BindingNameNamespace) {
        return yield* module.getModuleNamespaceEvaluator();
      }

      return yield* module.getOwnBindingValueEvaluator(bindingName);
    }

    try {
      const result = this._realm.invokeEvaluatorSync(getExport());
      return result ? result.toJsSync() : null;
    } catch (e) {
      Completion.handleRuntime(e);

      throw e;
    }
  }

  getModuleNamespace(): Record<string, unknown> {
    try {
      const result = this._realm.invokeEvaluatorSync(
        this.getModuleNamespaceEvaluator(),
      );
      return result.toJsSync() as Record<string, unknown>;
    } catch (e) {
      Completion.handleRuntime(e);
      throw e;
    }
  }

  *getModuleNamespaceEvaluator(): EvaluationGenerator<StaticJsObjectLike> {
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

    const ns = new StaticJsNamespaceExoticObject(
      this,
      unambiguousNames,
      this._realm,
    );
    this._cachedNamespaceObject = ns;
    return ns;
  }
}
