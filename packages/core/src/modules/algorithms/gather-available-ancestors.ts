import type { StaticJsCyclicModuleRecord } from "#modules/implementation-v2/modules/StaticJsCyclicModuleRecord.js";

import { assert } from "#utils/assert.js";

export function gatherAvailableAncestors(
  module: StaticJsCyclicModuleRecord,
  execList: Set<StaticJsCyclicModuleRecord>,
) {
  for (const ancestorModule of module.asyncParentModules) {
    // Spec weirdness: Shouldn't these all have the same cycleRoot?  And nothing we
    // are doing here can set an evaluationError?
    if (!execList.has(ancestorModule) && ancestorModule.cycleRoot?.evaluationError === null) {
      assert(
        ancestorModule.status === "evaluating-async",
        "gatherAvailableAncestors ancestor module is expected to be in 'evaluating-async' status",
      );
      assert(
        ancestorModule.evaluationError === null,
        "gatherAvailableAncestors ancestor module is expected to have no evaluation error",
      );

      assert.isNumeric(
        ancestorModule.pendingAsyncDependencies,
        "gatherAvailableAncestors ancestor module is expected to have a numeric _pendingAsyncDependencies",
      );
      assert(
        ancestorModule.pendingAsyncDependencies > 0,
        "gatherAvailableAncestors ancestor module is expected to have a positive number of pending async dependencies",
      );

      ancestorModule.pendingAsyncDependencies -= 1;

      if (ancestorModule.pendingAsyncDependencies === 0) {
        execList.add(ancestorModule);
      }

      if (!ancestorModule.hasTLA) {
        gatherAvailableAncestors(ancestorModule, execList);
      }
    }
  }
}
