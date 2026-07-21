import type { StaticJsEnvironmentRecord } from "#environments/StaticJsEnvironmentRecord.js";
import type { Completion } from "#evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsAllocation } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsPromise } from "#types/StaticJsPromise.js";

import type { StaticJsResolvedBinding } from "../StaticJsResolvedBinding.js";
import type { StaticJsResolveSetRecord } from "../StaticJsResolveSetRecord.js";
import type { StaticJsSourceTextModule } from "./StaticJsSourceTextModule.js";

export interface StaticJsModuleCreateOptions {
  realm: StaticJsRealm;
}

export abstract class StaticJsModule implements StaticJsAllocation {
  readonly realm: StaticJsRealm;
  readonly environment: StaticJsEnvironmentRecord | null;
  readonly namespace: StaticJsObject | null;

  protected constructor({ realm }: StaticJsModuleCreateOptions) {
    this.realm = realm;
    this.environment = null;
    this.namespace = null;
  }

  abstract loadRequestedModules(): EvaluationGenerator<StaticJsPromise>;

  abstract getExportedNames(exportedStarSet?: StaticJsSourceTextModule[]): string[];

  abstract resolveExport(
    exportName: string,
    resolveSet?: StaticJsResolveSetRecord[],
  ): StaticJsResolvedBinding | null | "ambiguous";

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
