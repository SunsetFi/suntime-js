import type { StaticJsModuleRecord } from "./modules/StaticJsModuleRecord.js";
import type { StaticJsModuleRequestRecord } from "./StaticJsModuleRequestRecord.js";

export interface StaticJsLoadedModuleRequestRecord extends StaticJsModuleRequestRecord {
  readonly module: StaticJsModuleRecord;
}
