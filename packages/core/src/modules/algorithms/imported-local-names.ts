import type { StaticJsImportEntryRecord } from "#modules/implementation-v2/modules/SourceTextModule/StaticJsImportEntryRecord.js";

export function importedLocalNames(importEntries: readonly StaticJsImportEntryRecord[]): string[] {
  return importEntries.map((entry) => entry.localName);
}
