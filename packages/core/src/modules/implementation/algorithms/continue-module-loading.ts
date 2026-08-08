import type { StaticJsModuleImpl } from "#modules/implementation/modules/StaticJsModuleImpl.js";
import type { StaticJsGraphLoadingState } from "#modules/implementation/StaticJsGraphLoadingState.js";

import { StaticJsRuntimeError } from "#errors/StaticJsRuntimeError.js";
import { Completion } from "#evaluator/completions/Completion.js";

import { innerModuleLoading } from "./inner-module-loading.js";

export function continueModuleLoading(
  state: StaticJsGraphLoadingState,
  moduleCompletion: StaticJsModuleImpl | Completion.Throw,
): void {
  if (!state.isLoading) {
    return;
  }

  if (!Completion.Throw.is(moduleCompletion)) {
    innerModuleLoading(state, moduleCompletion);
  } else {
    state.isLoading = false;
    state.promiseCapability.reject(new StaticJsRuntimeError(Completion.value(moduleCompletion)));
  }
}
