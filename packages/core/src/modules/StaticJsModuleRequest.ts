import type { StaticJsImportAttribute } from "./implementation/StaticJsImportAttribute.js";

export interface StaticJsModuleRequest {
  readonly specifier: string;
  readonly attributes: readonly StaticJsImportAttribute[];
}
