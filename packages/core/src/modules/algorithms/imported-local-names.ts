import type { StaticJsImportEntryRecord } from "#modules/implementation/modules/StaticJsImportEntryRecord.js";

export function importedLocalNames(importEntries: readonly StaticJsImportEntryRecord[]): string[] {
  return importEntries.map((entry) => entry.localName);
}
