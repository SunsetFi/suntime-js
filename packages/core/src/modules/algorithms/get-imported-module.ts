import type { StaticJsCyclicModuleRecord } from "#modules/implementation/modules/StaticJsCyclicModuleRecord.js";
import type { StaticJsModuleRecord } from "#modules/implementation/modules/StaticJsModuleRecord.js";
import type { StaticJsModuleRequest } from "#modules/StaticJsModuleRequest.js";

import { assert } from "#utils/assert.js";

import { moduleRequestsEqual } from "./module-requests-equal.js";

export function getImportedModule(
  referrer: StaticJsCyclicModuleRecord,
  request: StaticJsModuleRequest,
): StaticJsModuleRecord {
  const records = referrer.loadedModules.filter((r) => moduleRequestsEqual(r, request));
  assert(
    records.length === 1,
    `Expected exactly 1 record for getImportedModule, but found ${records.length}`,
  );

  return records[0].module;
}
