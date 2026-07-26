import type { StaticJsModuleRequestRecord } from "#modules/implementation-v2/StaticJsModuleRequestRecord.js";
import type { AllButDefault } from "#modules/implementation-v2/symbols/AllButDefault.js";
import type { Namespace } from "#modules/implementation-v2/symbols/Namespace.js";

export interface StaticJsLocalExportEntryRecord {
  readonly exportName: string | null;
  readonly moduleRequest: null;
  readonly importName: null;
  readonly localName: string;
}

export interface StaticJsExternalExportEntryRecord {
  readonly exportName: string | null;
  readonly moduleRequest: StaticJsModuleRequestRecord;
  readonly importName: string | null | Namespace | AllButDefault;
  readonly localName: string | null;
}

export type StaticJsExportEntryRecord =
  | StaticJsLocalExportEntryRecord
  | StaticJsExternalExportEntryRecord;
