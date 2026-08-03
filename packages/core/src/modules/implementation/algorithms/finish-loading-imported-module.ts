import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsModuleImpl } from "#modules/implementation/modules/StaticJsModuleImpl.js";
import type { StaticJsModuleRequest } from "#modules/StaticJsModuleRequest.js";
import type { StaticJsScriptRecord } from "#scripts/StaticJsScriptRecord.js";
import type { StaticJsPromiseCapabilityRecord } from "#types/StaticJsPromise.js";

import { Completion } from "#evaluator/completions/Completion.js";
import { StaticJsCyclicModuleImpl } from "#modules/implementation/modules/StaticJsCyclicModuleImpl.js";
import {
  isStaticJsGraphLoadingState,
  type StaticJsGraphLoadingState,
} from "#modules/implementation/StaticJsGraphLoadingState.js";
import { type StaticJsRealm } from "#realm/StaticJsRealm.js";
import { assert } from "#utils/assert.js";

import { continueDynamicImport } from "./continue-dynamic-import.js";
import { continueModuleLoading } from "./continue-module-loading.js";
import { moduleRequestsEqual } from "./module-requests-equal.js";

export function* finishLoadingImportedModule(
  referrer: StaticJsScriptRecord | StaticJsCyclicModuleImpl | StaticJsRealm,
  moduleRequest: StaticJsModuleRequest,
  payload: StaticJsGraphLoadingState | StaticJsPromiseCapabilityRecord,
  result: StaticJsModuleImpl | Completion.Throw,
): EvaluationGenerator<void> {
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
    yield* continueModuleLoading(payload, result);
  } else {
    yield* continueDynamicImport(payload, result);
  }
}
