import type { StaticJsModuleEnvironmentRecord } from "#environments/implementation/StaticJsModuleEnvironmentRecord.js";
import type { StaticJsModuleImpl } from "#modules/implementation/modules/StaticJsModuleImpl.js";

export function createImportBinding(
  envRecord: StaticJsModuleEnvironmentRecord,
  name: string,
  targetModule: StaticJsModuleImpl,
  targetName: string,
) {
  envRecord.createImportBinding(name, targetModule, targetName);
}
