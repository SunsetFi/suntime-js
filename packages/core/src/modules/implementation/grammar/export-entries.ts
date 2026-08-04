import type { Node } from "@babel/types";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { boundNames } from "#grammar/bound-names.js";
import { isDeclarationGrammar } from "#grammar/is-declaration-gramar.js";
import { StringValue } from "#grammar/stirng-value.js";
import { assert } from "#utils/assert.js";

import type { StaticJsModuleRequest } from "../../StaticJsModuleRequest.js";

import { type StaticJsExportEntryRecord } from "../modules/StaticJsExportEntryRecord.js";
import { AllButDefault } from "../symbols/AllButDefault.js";
import { Namespace } from "../symbols/Namespace.js";
import { moduleRequests } from "./module-requests.js";

export function exportEntries(node: Node): StaticJsExportEntryRecord[] {
  switch (node.type) {
    case "Program":
      if (node.sourceType !== "module") {
        return [];
      }
      return node.body.flatMap(exportEntries);
    case "ExportAllDeclaration":
      const [module] = moduleRequests(node);
      return exportEntriesForModule(node, module);
    case "ExportNamedDeclaration":
      if (node.declaration) {
        const entries: StaticJsExportEntryRecord[] = [];
        const names = boundNames(node.declaration);
        for (const name of names) {
          entries.push({
            moduleRequest: null,
            importName: null,
            localName: name,
            exportName: name,
          });
        }
        return entries;
      }
      if (node.specifiers.length > 0) {
        const [module] = moduleRequests(node);
        return node.specifiers.flatMap((specifier) =>
          exportEntriesForModule(specifier, module ?? null),
        );
      }
      return [];
    case "ExportDefaultDeclaration": {
      // Note: isAssignmentGrammar is a pain to fully model with babel, so let's flip it
      // if (isAssignmentGrammar(node.declaration)) {
      if (!isDeclarationGrammar(node.declaration)) {
        return [
          {
            moduleRequest: null,
            importName: null,
            localName: "*default*",
            exportName: "default",
          },
        ];
      } else {
        const localName = boundNames.soleElementOf(node.declaration);
        return [
          {
            moduleRequest: null,
            importName: null,
            localName,
            exportName: "default",
          },
        ];
      }
    }
  }
  return [];
}

function exportEntriesForModule(
  node: Node,
  module: StaticJsModuleRequest | null,
): StaticJsExportEntryRecord[] {
  switch (node.type) {
    case "ExportDefaultSpecifier":
      throw new StaticJsEngineError(
        "What on earth are ExportDefaultSpecifiers and how can babel create these nodes?",
      );
    case "ExportAllDeclaration": {
      assert.notNull(module, "ExportAllDeclaration requires a module");
      return [
        {
          moduleRequest: module,
          importName: AllButDefault,
          localName: null,
          exportName: null,
        },
      ];
    }
    case "ExportNamespaceSpecifier": {
      const exportName = StringValue(node.exported);
      assert.notNull(module, "ExportAllDeclaration requires a module");
      return [
        {
          moduleRequest: module,
          importName: Namespace,
          localName: null,
          exportName: exportName,
        },
      ];
    }
    case "ExportSpecifier": {
      const sourceName = StringValue(node.local);
      const exportName = StringValue(node.exported);
      if (module == null) {
        return [
          {
            moduleRequest: module,
            localName: sourceName,
            importName: null,
            exportName,
          },
        ];
      } else {
        return [
          {
            moduleRequest: module,
            localName: null,
            importName: sourceName,
            exportName,
          },
        ];
      }
    }
  }

  return [];
}
