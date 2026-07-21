import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsModule } from "#modules/implementation-v2/modules/StaticJsModule.js";
import type { StaticJsGraphLoadingState } from "#modules/implementation-v2/StaticJsGraphLoadingState.js";
import type { StaticJsModuleRequest } from "#modules/implementation-v2/StaticJsModuleRequest.js";

export function* hostLoadImportedModule(
  module: StaticJsModule,
  request: StaticJsModuleRequest,
  state: StaticJsGraphLoadingState,
): EvaluationGenerator<void> {
  // TODO: Call finishLoadingImportedModule when we get a module record.
}
