import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { NormalCompletion } from "../../../evaluator/completions/NormalCompletion.js";
import {
  ThrowCompletion,
  isThrowCompletion,
} from "../../../evaluator/completions/ThrowCompletion.js";

import StaticJsEngineError from "../../../evaluator/StaticJsEngineError.js";

import StaticJsFunctionImpl from "../../types/implementation/StaticJsFunctionImpl.js";
import { StaticJsValue, StaticJsObjectLike } from "../../types/index.js";

import { StaticJsModule } from "../interfaces/StaticJsModule.js";
import {
  StaticJsModuleImplementation,
  StaticJsModuleStatus,
} from "../interfaces/StaticJsModuleImplementation.js";

import StaticJsRealmImplementation from "../../realm/interfaces/StaticJsRealmImplementation.js";
import { StaticJsResolvedBinding } from "../interfaces/StaticJsResolvedBinding.js";
import StaticJsRuntimeError from "../../../evaluator/StaticJsRuntimeError.js";

export abstract class StaticJsModuleBase
  implements StaticJsModule, StaticJsModuleImplementation
{
  private _cachedNamespaceObject: StaticJsObjectLike | null = null;

  constructor(
    protected readonly _name: string,
    protected readonly _realm: StaticJsRealmImplementation
  ) {}

  get name(): string {
    return this._name;
  }

  abstract get status(): StaticJsModuleStatus;

  abstract linkModules(): Promise<void>;

  abstract moduleDeclarationInstantiationEvaluator(): EvaluationGenerator;

  abstract moduleEvaluationEvaluator(): EvaluationGenerator;

  abstract resolveExport(
    name: string,
    resolveSet?: Set<string>
  ): StaticJsResolvedBinding;

  abstract getExportedNames(): string[];

  abstract getOwnBindingValueEvaluator(
    bindingName: string
  ): EvaluationGenerator<StaticJsValue | ThrowCompletion | null>;

  async getExport(exportName: string): Promise<unknown> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    function* getExport() {
      const resolution = self.resolveExport(exportName);
      if (resolution === null) {
        return null;
      }
      if (resolution === "ambiguous") {
        throw new StaticJsRuntimeError(
          self._realm.types.error(
            "ReferenceError",
            `Ambiguous binding ${exportName} in module ${self._name}.`
          )
        );
      }

      return yield* resolution.module.getOwnBindingValueEvaluator(
        resolution.bindingName
      );
    }
    const result = await this._realm.invokeEvaluator(getExport());
    if (isThrowCompletion(result)) {
      throw result.value.toJs();
    }

    if (!result) {
      return null;
    }

    return result.toJs();
  }

  async getModuleNamespace(): Promise<Record<string, unknown>> {
    const result = await this._realm.invokeEvaluator(
      this.getModuleNamespaceEvaluator()
    );
    if (isThrowCompletion(result)) {
      throw result.value.toJs();
    }

    return result.toJs() as Record<string, unknown>;
  }

  *getModuleNamespaceEvaluator(): EvaluationGenerator<
    StaticJsObjectLike | ThrowCompletion
  > {
    if (this._cachedNamespaceObject) {
      return this._cachedNamespaceObject;
    }

    const ns = this._realm.types.object();
    const exportedNames = this.getExportedNames();
    if (isThrowCompletion(exportedNames)) {
      return exportedNames;
    }

    for (const exportName of exportedNames) {
      const resolution = this.resolveExport(exportName);
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
          if (isThrowCompletion(result)) {
            return result;
          }

          if (!result) {
            throw new StaticJsEngineError(
              `Module ${module.name} binding ${bindingName} for export ${exportName} not returned by getOwnBindingValueEvaluator.`
            );
          }

          return NormalCompletion(result);
        }),
      });
    }

    yield* ns.preventExtensionsEvaluator();

    this._cachedNamespaceObject = ns;

    return ns;
  }
}
