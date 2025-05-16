import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { runEvaluatorUntilCompletion } from "../../../evaluator/evaluator-runtime.js";
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

import StaticJsRealm from "../interfaces/StaticJsRealm.js";
import { StaticJsResolvedBinding } from "../interfaces/StaticJsResolvedBinding.js";

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
    const result = runEvaluatorUntilCompletion(
      this.resolveExportEvaluator(exportName),
    );
    if (isThrowCompletion(result)) {
      throw result.value.toJs();
    }

    return result;
  }

  abstract resolveExportEvaluator(
    name: string,
    resolveSet?: Set<string>,
  ): EvaluationGenerator<StaticJsResolvedBinding | ThrowCompletion>;

  getExportedNames() {
    const result = runEvaluatorUntilCompletion(
      this.getExportedNamesEvaluator(),
    );
    if (isThrowCompletion(result)) {
      throw result.value.toJs();
    }

    return result;
  }

  abstract getExportedNamesEvaluator(): EvaluationGenerator<
    string[] | ThrowCompletion
  >;

  abstract getOwnBindingValueEvaluator(
    bindingName: string,
  ): EvaluationGenerator<StaticJsValue | ThrowCompletion | null>;

  getExport(exportName: string): unknown {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    function* getExport() {
      const resolution = yield* self.resolveExportEvaluator(exportName);
      if (isThrowCompletion(resolution)) {
        return resolution;
      }
      if (resolution === null) {
        return null;
      }
      if (resolution === "ambiguous") {
        return ThrowCompletion(
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
    const result = runEvaluatorUntilCompletion(getExport());
    if (isThrowCompletion(result)) {
      throw result.value.toJs();
    }

    if (!result) {
      return null;
    }

    return result.toJs();
  }

  getModuleNamespace(): Record<string, unknown> {
    const result = runEvaluatorUntilCompletion(
      this.getModuleNamespaceEvaluator(),
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
    const exportedNames = yield* this.getExportedNamesEvaluator();
    if (isThrowCompletion(exportedNames)) {
      return exportedNames;
    }

    for (const exportName of exportedNames) {
      const resolution = yield* this.resolveExportEvaluator(exportName);
      if (isThrowCompletion(resolution)) {
        return resolution;
      }
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
              `Module ${module.name} binding ${bindingName} for export ${exportName} not returned by getOwnBindingValueEvaluator.`,
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
