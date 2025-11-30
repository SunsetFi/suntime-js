import type { Identifier, Node, StringLiteral } from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import isAssignmentGrammar from "../../../grammar/is-assignment-grammar.js";

import boundNames from "../../../evaluator/instantiation/algorithms/bound-names.js";

import {
  ImportAllButDefault,
  type StaticJsExportEntry,
} from "./StaticJsExportEntry.js";

export default function exportEntries(node: Node): StaticJsExportEntry[] {
  switch (node.type) {
    case "File":
      return node.program.body.flatMap(exportEntries);
    case "Program": {
      if (node.sourceType === "module") {
        return node.body.flatMap(exportEntries);
      }

      return [];
    }
    case "ExportAllDeclaration": {
      return exportEntriesForModule(node, node.source.value);
    }
    case "ExportNamedDeclaration": {
      if (node.exportKind === "type") {
        return [];
      }

      if (node.source) {
        return exportEntriesForModule(node, node.source.value);
      }

      if (node.declaration) {
        switch (node.declaration.type) {
          case "FunctionDeclaration":
          case "ClassDeclaration":
          case "VariableDeclaration": {
            const names = boundNames(node.declaration);
            return names.map((name) => ({
              localName: name,
              exportName: name,
            }));
          }
        }
      }

      if (node.specifiers.length > 0) {
        return exportEntriesForModule(node, null);
      }

      return [];
    }
    case "ExportDefaultDeclaration": {
      switch (node.declaration.type) {
        case "FunctionDeclaration":
        case "ClassDeclaration": {
          const name = boundNames.soleElementOf(node.declaration);
          return [
            {
              localName: name,
              exportName: "default",
            },
          ];
        }
      }

      if (isAssignmentGrammar(node.declaration)) {
        return [
          {
            localName: "*default*",
            exportName: "default",
          },
        ];
      }

      return [];
    }
  }

  return [];
}

function exportEntriesForModule(
  node: Node,
  moduleRequest: string | null,
): StaticJsExportEntry[] {
  switch (node.type) {
    case "ExportAllDeclaration": {
      // This would be a parse error, but I think babel handles it.
      if (!moduleRequest) {
        throw new StaticJsEngineError(
          "ExportAllDeclaration must have a module specifier.",
        );
      }

      // FIXME: The spec has a "* as foo", but babel doesn't seem to represent that?
      // Maybe the web parser I'm using is out of date, but I don't see it in typings either.
      return [
        {
          moduleRequest,
          importName: ImportAllButDefault,
          exportName: null,
        },
      ];
    }
    case "ExportNamedDeclaration": {
      return node.specifiers.flatMap((specifier) =>
        exportEntriesForModule(specifier, moduleRequest),
      );
    }
    case "ExportSpecifier": {
      if (moduleRequest === null) {
        return [
          {
            localName: resolveName(node.local),
            exportName: resolveName(node.exported),
          },
        ];
      } else {
        return [
          {
            moduleRequest,
            importName: resolveName(node.local),
            exportName: resolveName(node.exported),
          },
        ];
      }
    }
  }

  // Babel has ExportDefaultSpecifier and ExportNamespaceSpecifier,
  // but I can't figure out how to generate them in practice.
  // The spec doesn't seem to cover those cases at all, unless its lost to the
  // grammar again.

  return [];
}

function resolveName(node: Identifier | StringLiteral): string {
  return node.type === "Identifier" ? node.name : node.value;
}
