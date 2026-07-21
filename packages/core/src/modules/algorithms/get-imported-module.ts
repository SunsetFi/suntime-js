import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsCyclicModule } from "#modules/implementation-v2/modules/StaticJsCyclicModule.js";
import type { StaticJsModule } from "#modules/implementation-v2/modules/StaticJsModule.js";
import type { StaticJsModuleRequest } from "#modules/implementation-v2/StaticJsModuleRequest.js";

import { assert } from "#utils/assert.js";

import { moduleRequestsEqual } from "./module-requests-equal.js";

export function* getImportedModule(
  referrer: StaticJsCyclicModule,
  request: StaticJsModuleRequest,
): EvaluationGenerator<StaticJsModule> {
  const records = referrer.loadedModules.filter((r) => moduleRequestsEqual(r, request));
  assert(
    records.length === 1,
    `Expected exactly 1 record for getImportedModule, but found ${records.length}`,
  );

  return records[0].module;
}
