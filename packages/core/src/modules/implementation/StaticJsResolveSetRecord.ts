import type { StaticJsModuleImpl } from "./modules/StaticJsModuleImpl.js";

export interface StaticJsResolveSetRecord {
  readonly module: StaticJsModuleImpl;
  readonly exportName: string;
}
