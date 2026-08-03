import type { StaticJsEnvironmentRecord } from "#environments/StaticJsEnvironmentRecord.js";
import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsAllocation } from "#memory/StaticJsAllocation.js";
import type { StaticJsModuleRecord } from "#modules/StaticJsModuleRecord.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsRunTaskOptions } from "#tasks/StaticJsRunTaskOptions.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsPromise } from "#types/StaticJsPromise.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { getModuleNamespace } from "#modules/implementation/algorithms/get-module-namespace.js";
import { isTaggedSymbol } from "#utils/symbol-for.js";

import type { StaticJsResolvedBindingRecord } from "../StaticJsResolvedBinding.js";
import type { StaticJsResolveSetRecord } from "../StaticJsResolveSetRecord.js";

import { Namespace } from "../symbols/Namespace.js";

export interface StaticJsModuleImplCreateParams {
  realm: StaticJsRealm;
  specifier: string;
}

export abstract class StaticJsModuleImpl implements StaticJsModuleRecord {
  protected constructor({ specifier, realm }: StaticJsModuleImplCreateParams) {
    this.specifier = specifier;
    this.realm = realm;
  }

  readonly realm: StaticJsRealm;

  /**
   * NOT in the spec.
   */
  readonly specifier: string;

  environment: StaticJsEnvironmentRecord | null = null;
  namespace: StaticJsObject | null = null;

  abstract loadRequestedModulesEvaluator(): EvaluationGenerator<StaticJsPromise>;

  abstract getExportedNames(exportedStarSet?: Set<StaticJsModuleImpl>): readonly string[];

  abstract resolveExport(
    exportName: string,
    resolveSet?: readonly StaticJsResolveSetRecord[],
  ): StaticJsResolvedBindingRecord | null | "ambiguous";

  abstract linkEvaluator(): EvaluationGenerator<null | Completion.Throw>;

  abstract evaluateEvaluator(): EvaluationGenerator<StaticJsPromise>;

  async getExportAsync(
    exportName: string,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue | null> {
    return this.realm.invokeEvaluatorAsync(this._getExportEvaluator(exportName), opts);
  }

  getExportSync(exportName: string, opts?: StaticJsRunTaskOptions): StaticJsValue | null {
    return this.realm.invokeEvaluatorSync(this._getExportEvaluator(exportName), opts);
  }

  private *_getExportEvaluator(exportName: string): EvaluationGenerator<StaticJsValue> {
    const binding = this.resolveExport(exportName);
    if (binding === null || binding === "ambiguous") {
      return this.realm.types.null;
    }

    const { bindingName, module } = binding;

    if (isTaggedSymbol(bindingName, Namespace)) {
      return getModuleNamespace(module);
    }

    const moduleEnv = module.environment;
    // FIXME: Check specifically for status.
    if (!moduleEnv) {
      throw new StaticJsEngineError("Module has not yet been initialized");
    }

    try {
      return yield* moduleEnv.getBindingValueEvaluator(bindingName, true);
    } catch (e) {
      Completion.handleRuntime(e);
      throw e;
    }
  }

  async getModuleNamespaceAsync(): Promise<StaticJsObject> {
    return getModuleNamespace(this);
  }

  getModuleNamespaceSync(_opts?: StaticJsRunTaskOptions): StaticJsObject {
    return getModuleNamespace(this);
  }

  mark(marks: Set<StaticJsAllocation>): void {
    if (marks.has(this)) {
      return;
    }

    marks.add(this);

    if (this.environment) {
      this.environment.mark(marks);
    }
    if (this.namespace) {
      this.namespace.mark(marks);
    }
  }

  allocateSelf() {}
}
