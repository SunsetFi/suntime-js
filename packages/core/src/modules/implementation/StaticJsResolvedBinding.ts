import type { StaticJsModuleImpl } from "./modules/StaticJsModuleImpl.js";
import type { Namespace } from "./symbols/Namespace.js";

export interface StaticJsResolvedBindingRecord {
  module: StaticJsModuleImpl;
  bindingName: string | Namespace;
}

export function isStaticJsResolvedBindingRecord(
  value: any,
): value is StaticJsResolvedBindingRecord {
  return value !== null && typeof value === "object" && "module" in value && "bindingName" in value;
}
