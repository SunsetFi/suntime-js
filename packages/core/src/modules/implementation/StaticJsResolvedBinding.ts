import type { StaticJsModuleImplementation } from "../StaticJsModuleImplementation.js";

export const BindingNameNamespace = Symbol("namespace");
export type BindingNameNamespace = typeof BindingNameNamespace;
export interface StaticJsModuleResolvedBinding {
  module: StaticJsModuleImplementation;
  bindingName: string | BindingNameNamespace;
}
export function isStaticJsModuleResolvedBinding(x: unknown): x is StaticJsModuleResolvedBinding {
  if (typeof x !== "object" || x === null) {
    return false;
  }

  const binding = x as StaticJsModuleResolvedBinding;
  return binding.module != null && typeof binding.module === "object" && "bindingName" in binding;
}

export type StaticJsResolvedBinding = StaticJsModuleResolvedBinding | "ambiguous" | null;
