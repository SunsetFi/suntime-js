import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsModuleRecord } from "#modules/implementation/modules/StaticJsModuleRecord.js";
import type { StaticJsGraphLoadingState } from "#modules/implementation/StaticJsGraphLoadingState.js";
import type { StaticJsModuleRequest } from "#modules/StaticJsModuleRequest.js";

export function* hostLoadImportedModule(
  module: StaticJsModuleRecord,
  request: StaticJsModuleRequest,
  state: StaticJsGraphLoadingState,
): EvaluationGenerator<void> {
  // TODO: Call finishLoadingImportedModule when we get a module record.
}
