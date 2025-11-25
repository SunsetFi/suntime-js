import { isIdentifier, isImportDeclaration, type Program } from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type { StaticJsImportEntry } from "./StaticJsImportEntry.js";

export default function parseImportEntries(
  moduleName: string,
  ast: Program,
): StaticJsImportEntry[] {
  const importEntries: StaticJsImportEntry[] = [];
  const seenImports = new Set<string>();
  function throwIfImportSeen(importName: string) {
    if (seenImports.has(importName)) {
      // It seems babel/parser gates this for us
      throw new StaticJsEngineError(
        `Duplicate import name "${importName}" in module ${moduleName}.`,
      );
    }
    seenImports.add(importName);
  }

  for (const node of ast.body) {
    if (!isImportDeclaration(node)) {
      continue;
    }

    for (const specifier of node.specifiers) {
      switch (specifier.type) {
        case "ImportDefaultSpecifier":
          {
            const localName = specifier.local.name;
            throwIfImportSeen(localName);
            importEntries.push({
              moduleRequest: node.source.value,
              localName,
              importName: "default",
            });
          }
          break;
        case "ImportNamespaceSpecifier":
          {
            const localName = specifier.local.name;
            throwIfImportSeen(localName);
            importEntries.push({
              moduleRequest: node.source.value,
              localName,
              importName: "namespace",
            });
          }
          break;
        case "ImportSpecifier":
          {
            if (!isIdentifier(specifier.imported)) {
              // Not sure when this happens but might have something to do with specifier.importKind
              // I was unable to get this to be anything using a sandbox of babel/parser.
              throw new StaticJsEngineError(
                `Import specifier is importing unknown node type ${specifier.imported.type}`,
              );
            }

            const localName = specifier.local.name;
            const importName = specifier.imported.name;
            throwIfImportSeen(importName);
            importEntries.push({
              moduleRequest: node.source.value,
              localName,
              importName,
            });
          }
          break;
      }
    }
  }

  return importEntries;
}
