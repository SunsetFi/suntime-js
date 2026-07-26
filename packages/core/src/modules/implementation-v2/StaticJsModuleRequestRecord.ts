import type { StaticJsImportAttribute } from "./StaticJsImportAttribute.js";

export interface StaticJsModuleRequestRecord {
  readonly specifier: string;
  readonly attributes: readonly StaticJsImportAttribute[];
}
