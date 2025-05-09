export interface StaticJsLocalExportEntry {
  readonly exportName: string;
  readonly localName: string;
}
export function isStaticJsLocalExportEntry(
  x: unknown,
): x is StaticJsLocalExportEntry {
  if (typeof x !== "object" || x === null) {
    return false;
  }

  const entry = x as StaticJsLocalExportEntry;
  return (
    typeof entry.exportName === "string" && typeof entry.localName === "string"
  );
}

export interface StaticJsReexportExportEntry {
  readonly exportName: string | null;
  readonly moduleRequest: string;
  readonly importName: string | null;
}
export function isStaticJsReexportExportEntry(
  x: unknown,
): x is StaticJsReexportExportEntry {
  if (typeof x !== "object" || x === null) {
    return false;
  }

  const entry = x as StaticJsReexportExportEntry;
  return (
    typeof entry.exportName === "string" &&
    typeof entry.moduleRequest === "string" &&
    typeof entry.importName === "string"
  );
}

export type StaticJsExportEntry =
  | StaticJsLocalExportEntry
  | StaticJsReexportExportEntry;
