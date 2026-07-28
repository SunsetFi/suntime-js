import type { StaticJsModuleRecord } from "./modules/StaticJsModuleRecord.js";
import type { Namespace } from "./symbols/Namespace.js";

export interface StaticJsResolvedBindingRecord {
  module: StaticJsModuleRecord;
  bindingName: string | Namespace;
}

export function isStaticJsResolvedBindingRecord(
  value: any,
): value is StaticJsResolvedBindingRecord {
  return value !== null && typeof value === "object" && "module" in value && "bindingName" in value;
}
