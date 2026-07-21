import type { StaticJsImportAttribute } from "./StaticJsImportAttribute.js";

export interface StaticJsModuleRequest {
  readonly specifier: string;
  readonly attributes: readonly StaticJsImportAttribute[];
}
