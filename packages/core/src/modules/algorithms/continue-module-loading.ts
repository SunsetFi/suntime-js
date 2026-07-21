import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsModule } from "#modules/implementation-v2/modules/StaticJsModule.js";
import type { StaticJsGraphLoadingState } from "#modules/implementation-v2/StaticJsGraphLoadingState.js";

import { call } from "#algorithms/call.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";

import { innerModuleLoading } from "./inner-module-loading.js";

export function* continueModuleLoading(
  state: StaticJsGraphLoadingState,
  moduleCompletion: StaticJsModule | Completion.Throw,
): EvaluationGenerator<void> {
  const realm = EvaluationContext.current.realm;

  if (!state.isLoading) {
    return;
  }

  if (!Completion.Throw.is(moduleCompletion)) {
    yield* innerModuleLoading(state, moduleCompletion);
  } else {
    state.isLoading = false;
    yield* Q(
      call(state.promiseCapability.reject, realm.types.undefined, [
        Completion.value(moduleCompletion),
      ]),
    );
  }
}
