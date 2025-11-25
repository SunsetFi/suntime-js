import {
  isExportSpecifier,
  isFunctionDeclaration,
  isIdentifier,
  isVariableDeclaration,
  type Program,
} from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type { StaticJsExportEntry } from "./StaticJsExportEntry.js";

export default function parseExportEntries(
  moduleName: string,
  ast: Program,
): StaticJsExportEntry[] {
  const exportEntries: StaticJsExportEntry[] = [];
  const seenExports = new Set<string>();
  function throwIfExportSeen(exportName: string) {
    if (seenExports.has(exportName)) {
      throw new Error(
        `Duplicate export name "${exportName}" in module ${moduleName}.`,
      );
    }
    seenExports.add(exportName);
  }

  for (const node of ast.body) {
    switch (node.type) {
      case "ExportAllDeclaration":
        exportEntries.push({
          moduleRequest: node.source.value,
          exportName: null,
          importName: null,
        });
        break;
      case "ExportNamedDeclaration":
        // FIXME: THis can be a LOT of weird things!w
        if (isVariableDeclaration(node.declaration)) {
          for (const decl of node.declaration.declarations) {
            if (!isIdentifier(decl.id)) {
              throw new Error(
                `Exported variable ${node.declaration.type} does not have an identifier.`,
              );
            }
            const { name } = decl.id;
            throwIfExportSeen(name);
            exportEntries.push({
              localName: name,
              exportName: name,
            });
          }
        } else if (isFunctionDeclaration(node.declaration)) {
          if (!isIdentifier(node.declaration.id)) {
            throw new Error(
              `Exported variable ${node.declaration.type} does not have an identifier.`,
            );
          }
          const { name } = node.declaration.id;
          throwIfExportSeen(name);
          exportEntries.push({
            localName: name,
            exportName: name,
          });
        } else if (node.declaration) {
          throw new StaticJsEngineError(
            `Not implemented: Module export of type ${node.declaration.type}`,
          );
        }

        for (const specifier of node.specifiers) {
          if (isExportSpecifier(specifier)) {
            if (
              !isIdentifier(specifier.local) ||
              !isIdentifier(specifier.exported)
            ) {
              throw new Error(
                `Exported variable ${specifier.type} is not an identifier.`,
              );
            }

            const localName = specifier.local.name;
            const exportName = specifier.exported.name;

            throwIfExportSeen(exportName);
            exportEntries.push({
              localName,
              exportName,
            });
            continue;
          }
        }
        break;
      case "ExportDefaultDeclaration":
        throwIfExportSeen("default");
        exportEntries.push({
          exportName: "default",
          localName: "*default*",
        });
        break;
    }
  }

  return exportEntries;
}
