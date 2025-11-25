export const NamespaceImportName = Symbol("namespace");
export type NamespaceImportName = typeof NamespaceImportName;
export interface StaticJsImportEntry {
  moduleRequest: string;
  importName: string | NamespaceImportName;
  localName: string;
}
