import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsGraphLoadingState } from "#modules/implementation/StaticJsGraphLoadingState.js";
import type { StaticJsModuleReferrer } from "#modules/StaticJsModuleReferrer.js";
import type { StaticJsModuleRequest } from "#modules/StaticJsModuleRequest.js";

import { EvaluationContext } from "#evaluator/EvaluationContext.js";

export function* hostLoadImportedModule(
  referrer: StaticJsModuleReferrer,
  request: StaticJsModuleRequest,
  state: StaticJsGraphLoadingState,
): EvaluationGenerator<void> {
  EvaluationContext.current.realm.loadImportedModule(referrer, request, state);
}
