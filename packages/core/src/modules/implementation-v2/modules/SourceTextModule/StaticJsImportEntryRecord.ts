import type { StaticJsModuleRequestRecord } from "#modules/implementation-v2/StaticJsModuleRequestRecord.js";
import type { Namespace } from "#modules/implementation-v2/symbols/Namespace.js";

export interface StaticJsImportEntryRecord {
  readonly moduleRequest: StaticJsModuleRequestRecord;
  readonly importName: string | Namespace;
  readonly localName: string;
}
