import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsScriptRecord } from "#evaluator/ScriptOrModuleRecord/StaticJsScriptRecord.js";
import type { StaticJsModuleRecord } from "#modules/implementation-v2/modules/StaticJsModuleRecord.js";
import type { StaticJsModuleRequestRecord } from "#modules/implementation-v2/StaticJsModuleRequestRecord.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsPromiseCapabilityRecord } from "#types/StaticJsPromise.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { StaticJsCyclicModuleRecord } from "#modules/implementation-v2/modules/StaticJsCyclicModuleRecord.js";
import {
  isStaticJsGraphLoadingState,
  type StaticJsGraphLoadingState,
} from "#modules/implementation-v2/StaticJsGraphLoadingState.js";
import { assert } from "#utils/assert.js";

import { continueModuleLoading } from "./continue-module-loading.js";
import { moduleRequestsEqual } from "./module-requests-equal.js";

export function* finishLoadingImportedModule(
  referrer: StaticJsScriptRecord | StaticJsCyclicModuleRecord | StaticJsRealm,
  moduleRequest: StaticJsModuleRequestRecord,
  payload: StaticJsGraphLoadingState | StaticJsPromiseCapabilityRecord,
  result: StaticJsModuleRecord | Completion.Throw,
): EvaluationGenerator<void> {
  if (!Completion.Throw.is(result)) {
    const foundRecord = referrer.loadedModules.find((record) =>
      moduleRequestsEqual(record, moduleRequest),
    );
    if (foundRecord) {
      assert(foundRecord.module === result, "Found record's module should match the result");
      referrer.loadedModules.push({
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
