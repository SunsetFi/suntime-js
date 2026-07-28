import type { StaticJsEnvironmentRecord } from "#environments/StaticJsEnvironmentRecord.js";
import type { Completion } from "#evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsAllocation } from "#memory/StaticJsAllocation.js";
import type { StaticJsModule } from "#modules/StaticJsModule.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsPromise } from "#types/StaticJsPromise.js";

import type { StaticJsResolvedBindingRecord } from "../StaticJsResolvedBinding.js";
import type { StaticJsResolveSetRecord } from "../StaticJsResolveSetRecord.js";

import { StaticJsModuleImpl } from "../StaticJsModuleImpl.js";

export interface StaticJsModuleRecordCreateParams {
  realm: StaticJsRealm;
  specifier: string;
}

export abstract class StaticJsModuleRecord implements StaticJsAllocation {
  readonly realm: StaticJsRealm;

  protected constructor({ realm, specifier }: StaticJsModuleRecordCreateParams) {
    this.realm = realm;
    this.specifier = specifier;
  }

  private _module: StaticJsModule | null = null;
  get module(): StaticJsModule {
    if (!this._module) {
      this._module = new StaticJsModuleImpl(this);
    }
    return this._module;
  }

  /**
   * NOT in the spec.
   */
  readonly specifier: string;

  environment: StaticJsEnvironmentRecord | null = null;
  namespace: StaticJsObject | null = null;

  abstract loadRequestedModules(): EvaluationGenerator<StaticJsPromise>;

  abstract getExportedNames(exportedStarSet?: Set<StaticJsModuleRecord>): readonly string[];

  abstract resolveExport(
    exportName: string,
    resolveSet?: readonly StaticJsResolveSetRecord[],
  ): StaticJsResolvedBindingRecord | null | "ambiguous";

  abstract link(): EvaluationGenerator<null | Completion.Throw>;

  abstract evaluate(): EvaluationGenerator<StaticJsPromise>;

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
