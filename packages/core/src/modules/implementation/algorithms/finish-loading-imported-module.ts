import type { StaticJsModuleImpl } from "#modules/implementation/modules/StaticJsModuleImpl.js";
import type { StaticJsCyclicModuleRecord } from "#modules/StaticJsCyclicModuleRecord.js";
import type { StaticJsModuleRequest } from "#modules/StaticJsModuleRequest.js";
import type { StaticJsScriptRecord } from "#scripts/StaticJsScriptRecord.js";
import type { StaticJsTaskRunner } from "#tasks/StaticJsTaskRunner.js";
import type { StaticJsPromiseCapabilityRecord } from "#types/StaticJsPromise.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import {
  isStaticJsGraphLoadingState,
  type StaticJsGraphLoadingState,
} from "#modules/implementation/StaticJsGraphLoadingState.js";
import { type StaticJsRealm } from "#realm/StaticJsRealm.js";
import { assert } from "#utils/assert.js";

import { continueDynamicImport } from "./continue-dynamic-import.js";
import { continueModuleLoading } from "./continue-module-loading.js";
import { moduleRequestsEqual } from "./module-requests-equal.js";

export function finishLoadingImportedModule(
  referrer: StaticJsScriptRecord | StaticJsCyclicModuleRecord | StaticJsRealm,
  moduleRequest: StaticJsModuleRequest,
  payload: StaticJsGraphLoadingState | StaticJsPromiseCapabilityRecord,
  result: StaticJsModuleImpl | Completion.Throw,
  runTask?: StaticJsTaskRunner | undefined,
): void {
  if (!Completion.Throw.is(result)) {
    const foundRecord = referrer.loadedModules.find((record) =>
      moduleRequestsEqual(record, moduleRequest),
    );
    if (foundRecord) {
      assert(foundRecord.module === result, "Found record's module should match the result");
    } else {
      referrer._pushLoadedModule({
        specifier: moduleRequest.specifier,
        attributes: moduleRequest.attributes,
        module: result,
      });
    }
  }
  if (isStaticJsGraphLoadingState(payload)) {
    continueModuleLoading(payload, result);
  } else {
    if (!runTask) {
      throw new StaticJsEngineError(
        "Tried to finish loading an imported module for import(), but no runTask was specified to resume.",
      );
    }
    continueDynamicImport(payload, result, runTask);
  }
}
