import type { ImportDeclaration } from "@babel/types";

export const NamespaceImportName = Symbol("namespace");
export type NamespaceImportName = typeof NamespaceImportName;
export interface StaticJsImportEntry {
  readonly sourceNode: ImportDeclaration;
  readonly moduleRequest: string;
  readonly importName: string | NamespaceImportName;
  readonly localName: string;
}
