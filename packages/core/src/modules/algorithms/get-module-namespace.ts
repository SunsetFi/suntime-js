import type { StaticJsModuleRecord } from "#modules/implementation/modules/StaticJsModuleRecord.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";

import { StaticJsCyclicModuleRecord } from "#modules/implementation/modules/StaticJsCyclicModuleRecord.js";
import { StaticJsNamespaceExoticObject } from "#modules/implementation/modules/StaticJsNamespaceExoticObject.js";
import { isStaticJsResolvedBindingRecord } from "#modules/implementation/StaticJsResolvedBinding.js";
import { assert } from "#utils/assert.js";

export function getModuleNamespace(module: StaticJsModuleRecord): StaticJsObject {
  assert(() => {
    if (module instanceof StaticJsCyclicModuleRecord) {
      const { status } = module;
      assert(status !== "new" && status !== "unlinked");
    }
  });

  let namespace = module.namespace;
  if (!namespace) {
    const exportedNames = module.getExportedNames();
    const unambiguousNames: string[] = [];
    for (const name of exportedNames) {
      const resolution = module.resolveExport(name);
      if (isStaticJsResolvedBindingRecord(resolution)) {
        unambiguousNames.push(name);
      }
    }

    // ModuleNamespaceCreate
    namespace = StaticJsNamespaceExoticObject.create(module, unambiguousNames, module.realm);
    module.namespace = namespace;
  }

  return namespace;
}
