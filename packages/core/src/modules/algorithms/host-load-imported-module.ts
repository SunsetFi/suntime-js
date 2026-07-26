import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsModuleRecord } from "#modules/implementation-v2/modules/StaticJsModuleRecord.js";
import type { StaticJsGraphLoadingState } from "#modules/implementation-v2/StaticJsGraphLoadingState.js";
import type { StaticJsModuleRequestRecord } from "#modules/implementation-v2/StaticJsModuleRequestRecord.js";

export function* hostLoadImportedModule(
  module: StaticJsModuleRecord,
  request: StaticJsModuleRequestRecord,
  state: StaticJsGraphLoadingState,
): EvaluationGenerator<void> {
  // TODO: Call finishLoadingImportedModule when we get a module record.
}
