import type { StaticJsModuleImpl } from "#modules/implementation/modules/StaticJsModuleImpl.js";
import type { StaticJsGraphLoadingState } from "#modules/implementation/StaticJsGraphLoadingState.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { StaticJsCyclicModuleImpl } from "#modules/implementation/modules/StaticJsCyclicModuleImpl.js";
import { assert } from "#utils/assert.js";
import { withErrorHandler } from "#utils/with-error-handler.js";

import { allImportAttributesSupported } from "./all-import-attributes-supported.js";
import { continueModuleLoading } from "./continue-module-loading.js";
import { hostLoadImportedModule } from "./host-load-imported-module.js";
import { moduleRequestsEqual } from "./module-requests-equal.js";

export const innerModuleLoading = withErrorHandler(
  function innerModuleLoadingBody(
    state: StaticJsGraphLoadingState,
    module: StaticJsModuleImpl,
  ): void {
    if (!state.isLoading) {
      throw new StaticJsEngineError("Module loading is not in progress");
    }

    if (
      module instanceof StaticJsCyclicModuleImpl &&
      module.status === "new" &&
      !state.visited.has(module)
    ) {
      state.visited.add(module);
      const requestedModulesCount = module.requestedModules.length;
      state.pendingModulesCount += requestedModulesCount;

      for (const request of module.requestedModules) {
        if (!allImportAttributesSupported(request.attributes)) {
          const error = module.realm.types.error(
            "SyntaxError",
            "Module import contains unsupported import attributes",
          );
          continueModuleLoading(state, Completion.Throw(error));
        } else {
          const record = module.loadedModules.find((loaded) =>
            moduleRequestsEqual(loaded, request),
          );
          if (record) {
            innerModuleLoading(state, record.module);
          } else {
            hostLoadImportedModule(
              module,
              request,
              {
                onError: (err) => state.promiseCapability.reject(err),
              },
              state,
            );
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
        if (loaded instanceof StaticJsCyclicModuleImpl && loaded.status === "new") {
          loaded.status = "unlinked";
        }
      }
      state.promiseCapability.resolve();
      return;
    }
  },
  (err, state) => state.promiseCapability.reject(err),
);
