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

export interface StaticJsIndirectExportEntry {
  readonly exportName: string | null;
  readonly moduleRequest: string;
  readonly importName: string | null;
}
export function isStaticJsIndirectExportEntry(
  x: unknown,
): x is StaticJsIndirectExportEntry {
  if (typeof x !== "object" || x === null) {
    return false;
  }

  const entry = x as StaticJsIndirectExportEntry;
  return typeof entry.moduleRequest === "string";
}

export type StaticJsExportEntry =
  | StaticJsLocalExportEntry
  | StaticJsIndirectExportEntry;
