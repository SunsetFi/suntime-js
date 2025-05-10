import { StaticJsModuleImplementation } from "./StaticJsModuleImplementation.js";

export interface StaticJsModuleResolvedBinding {
  module: StaticJsModuleImplementation;
  bindingName: string;
}
export function isStaticJsModuleResolvedBinding(
  x: unknown,
): x is StaticJsModuleResolvedBinding {
  if (typeof x !== "object" || x === null) {
    return false;
  }

  const binding = x as StaticJsModuleResolvedBinding;
  return (
    binding.module != null &&
    typeof binding.module === "object" &&
    typeof binding.bindingName === "string"
  );
}

export type StaticJsResolvedBinding =
  | StaticJsModuleResolvedBinding
  | "ambiguous"
  | null;
