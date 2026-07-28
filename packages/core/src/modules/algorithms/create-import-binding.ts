import type { StaticJsModuleEnvironmentRecord } from "#environments/implementation/StaticJsModuleEnvironmentRecord.js";
import type { StaticJsModuleRecord } from "#modules/implementation/modules/StaticJsModuleRecord.js";

export function createImportBinding(
  envRecord: StaticJsModuleEnvironmentRecord,
  name: string,
  targetModule: StaticJsModuleRecord,
  targetName: string,
) {
  envRecord.createImportBinding(name, targetModule, targetName);
}
