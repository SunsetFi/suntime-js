export interface StaticJsLocalExportEntry {
  readonly exportName: string;
  readonly localName: string;
}
export function isStaticJsLocalExportEntry(x: unknown): x is StaticJsLocalExportEntry {
  if (typeof x !== "object" || x === null) {
    return false;
  }

  const entry = x as StaticJsLocalExportEntry;
  return "exportName" in entry && "localName" in entry;
}

export const ImportAllButDefault = Symbol("*");
export type ImportAllButDefault = typeof ImportAllButDefault;

export interface StaticJsIndirectExportEntry {
  readonly exportName: string | null;
  readonly moduleRequest: string;
  readonly importName: string | ImportAllButDefault;
}
export function isStaticJsIndirectExportEntry(x: unknown): x is StaticJsIndirectExportEntry {
  if (typeof x !== "object" || x === null) {
    return false;
  }

  const entry = x as StaticJsIndirectExportEntry;
  return "moduleRequest" in entry && "importName" in entry && "exportName" in entry;
}

export type StaticJsExportEntry = StaticJsLocalExportEntry | StaticJsIndirectExportEntry;
