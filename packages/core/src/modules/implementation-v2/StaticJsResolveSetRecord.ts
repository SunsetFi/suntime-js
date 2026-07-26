import type { StaticJsModuleRecord } from "./modules/StaticJsModuleRecord.js";

export interface StaticJsResolveSetRecord {
  readonly module: StaticJsModuleRecord;
  readonly exportName: string;
}
