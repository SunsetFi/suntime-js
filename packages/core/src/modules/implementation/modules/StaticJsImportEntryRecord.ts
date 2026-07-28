import type { Namespace } from "#modules/implementation/symbols/Namespace.js";
import type { StaticJsModuleRequest } from "#modules/StaticJsModuleRequest.js";

export interface StaticJsImportEntryRecord {
  readonly moduleRequest: StaticJsModuleRequest;
  readonly importName: string | Namespace;
  readonly localName: string;
}
