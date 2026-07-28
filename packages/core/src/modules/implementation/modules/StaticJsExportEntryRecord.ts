import type { AllButDefault } from "#modules/implementation/symbols/AllButDefault.js";
import type { Namespace } from "#modules/implementation/symbols/Namespace.js";
import type { StaticJsModuleRequest } from "#modules/StaticJsModuleRequest.js";

export interface StaticJsLocalExportEntryRecord {
  readonly exportName: string | null;
  readonly moduleRequest: null;
  readonly importName: null;
  readonly localName: string;
}

export interface StaticJsExternalExportEntryRecord {
  readonly exportName: string | null;
  readonly moduleRequest: StaticJsModuleRequest;
  readonly importName: string | null | Namespace | AllButDefault;
  readonly localName: string | null;
}

export type StaticJsExportEntryRecord =
  | StaticJsLocalExportEntryRecord
  | StaticJsExternalExportEntryRecord;
