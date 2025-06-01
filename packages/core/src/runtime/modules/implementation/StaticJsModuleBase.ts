import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";
import StaticJsFunctionImpl from "../../types/implementation/StaticJsFunctionImpl.js";

import type { StaticJsModule } from "../StaticJsModule.js";
import type {
  StaticJsModuleImplementation,
  StaticJsModuleStatus,
} from "../StaticJsModuleImplementation.js";

import type { StaticJsResolvedBinding } from "../StaticJsResolvedBinding.js";
import { AbnormalCompletion } from "../../../evaluator/completions/AbnormalCompletion.js";

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
      AbnormalCompletion.handleToJs(e);
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
      AbnormalCompletion.handleToJs(e);
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
        throw new ThrowCompletion(
          self._realm.types.error(
            "ReferenceError",
            `Ambiguous binding ${exportName} in module ${self._name}.`,
          ),
        );
      }

      return yield* resolution.module.getOwnBindingValueEvaluator(
        resolution.bindingName,
      );
    }

    try {
      const result = this._realm.invokeEvaluatorSync(getExport());
      return result ? result.toJs() : null;
    } catch (e) {
      AbnormalCompletion.handleToJs(e);
    }
  }

  getModuleNamespace(): Record<string, unknown> {
    try {
      const result = this._realm.invokeEvaluatorSync(
        this.getModuleNamespaceEvaluator(),
      );
      return result.toJs() as Record<string, unknown>;
    } catch (e) {
      AbnormalCompletion.handleToJs(e);
    }
  }

  *getModuleNamespaceEvaluator(): EvaluationGenerator<StaticJsObjectLike> {
    if (this._cachedNamespaceObject) {
      return this._cachedNamespaceObject;
    }

    const ns = this._realm.types.object();
    const exportedNames = yield* this.getExportedNamesEvaluator();

    for (const exportName of exportedNames) {
      const resolution = yield* this.resolveExportEvaluator(exportName);
      if (resolution === null || resolution === "ambiguous") {
        continue;
      }

      const { module, bindingName } = resolution;

      const realm = this._realm;
      yield* ns.definePropertyEvaluator(exportName, {
        enumerable: true,
        configurable: false,
        get: new StaticJsFunctionImpl(realm, "get", function* () {
          const result = yield* module.getOwnBindingValueEvaluator(bindingName);

          if (!result) {
            throw new StaticJsEngineError(
              `Module ${module.name} binding ${bindingName} for export ${exportName} not returned by getOwnBindingValueEvaluator.`,
            );
          }

          return result;
        }),
      });
    }

    yield* ns.preventExtensionsEvaluator();

    this._cachedNamespaceObject = ns;

    return ns;
  }
}
