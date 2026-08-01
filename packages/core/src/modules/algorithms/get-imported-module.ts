import type { StaticJsCyclicModuleImpl } from "#modules/implementation/modules/StaticJsCyclicModuleImpl.js";
import type { StaticJsModuleImpl } from "#modules/implementation/modules/StaticJsModuleImpl.js";
import type { StaticJsModuleRequest } from "#modules/StaticJsModuleRequest.js";

import { assert } from "#utils/assert.js";

import { moduleRequestsEqual } from "./module-requests-equal.js";

export function getImportedModule(
  referrer: StaticJsCyclicModuleImpl,
  request: StaticJsModuleRequest,
): StaticJsModuleImpl {
  const records = referrer.loadedModules.filter((r) => moduleRequestsEqual(r, request));
  assert(
    records.length === 1,
    `Expected exactly 1 record for getImportedModule, but found ${records.length}`,
  );

  return records[0].module;
}
