import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsModule } from "#modules/implementation-v2/modules/StaticJsModule.js";
import type { StaticJsGraphLoadingState } from "#modules/implementation-v2/StaticJsGraphLoadingState.js";

import { call } from "#algorithms/call.js";
import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { X } from "#evaluator/completions/X.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { StaticJsCyclicModule } from "#modules/implementation-v2/modules/StaticJsCyclicModule.js";
import { assert } from "#utils/assert.js";

import { allImportAttributesSupported } from "./all-import-attributes-supported.js";
import { continueModuleLoading } from "./continue-module-loading.js";
import { hostLoadImportedModule } from "./host-load-imported-module.js";
import { moduleRequestsEqual } from "./module-requests-equal.js";

export const innerModuleLoading = Q.makeReceiver(function* innerModuleLoading(
  state: StaticJsGraphLoadingState,
  module: StaticJsModule,
): EvaluationGenerator<void> {
  if (!state.isLoading) {
    throw new StaticJsEngineError("Module loading is not in progress");
  }

  if (
    module instanceof StaticJsCyclicModule &&
    module.status === "new" &&
    !state.visited.has(module)
  ) {
    state.visited.add(module);
    const requestedModulesCount = module.requestedModules.length;
    state.pendingModulesCount += requestedModulesCount;

    for (const request of module.requestedModules) {
      if (!allImportAttributesSupported(request.attributes)) {
        const error = yield* Completion.Throw.create(
          "SyntaxError",
          "Module import contains unsupported import attributes",
        );
        yield* continueModuleLoading(state, error);
      } else {
        const record = module.loadedModules.find((loaded) => moduleRequestsEqual(loaded, request));
        if (record) {
          yield* innerModuleLoading(state, record.module);
        } else {
          yield* hostLoadImportedModule(module, request, state);
        }
      }

      if (!state.isLoading) {
        return;
      }
    }
  }

  assert(
    state.pendingModulesCount > 0,
    "Pending modules count should be greater than 0 before decrementing",
  );
  state.pendingModulesCount -= 1;

  if (state.pendingModulesCount === 0) {
    state.isLoading = false;
    for (const loaded of state.visited) {
      if (loaded instanceof StaticJsCyclicModule && loaded.status === "new") {
        loaded.status = "unlinked";
      }
    }
    const realm = EvaluationContext.current.realm;
    yield* X(call(state.promiseCapability.resolve, realm.types.undefined, [realm.types.undefined]));
  }
});
