import type { Node } from "@babel/types";

import { boundNames } from "#grammar/bound-names.js";
import { StringValue } from "#grammar/stirng-value.js";

import type { StaticJsModuleRequest } from "../../StaticJsModuleRequest.js";

import { type StaticJsImportEntryRecord } from "../modules/StaticJsImportEntryRecord.js";
import { Namespace } from "../symbols/Namespace.js";
import { moduleRequests } from "./module-requests.js";

export function importEntries(node: Node): StaticJsImportEntryRecord[] {
  switch (node.type) {
    case "Program":
      if (node.sourceType !== "module") {
        return [];
      }
      return node.body.flatMap(importEntries);
    case "ImportDeclaration":
      if (node.specifiers.length === 0) {
        return [];
      }
      const [module] = moduleRequests(node);
      return importEntriesForModule(node.specifiers, module);
  }

  return [];
}

function importEntriesForModule(
  node: Node | Node[],
  module: StaticJsModuleRequest,
): StaticJsImportEntryRecord[] {
  if (Array.isArray(node)) {
    return node.flatMap((n) => importEntriesForModule(n, module));
  }

  switch (node.type) {
    case "ImportDeclaration":
      return node.specifiers.flatMap((specifier) => importEntriesForModule(specifier, module));
    // In practice, babel is omitting the ImportDeclaration and just emitting this.
    case "ImportNamespaceSpecifier":
      const localName = StringValue(node.local);
      return [
        {
          moduleRequest: module,
          importName: Namespace,
          localName,
        },
      ];
    case "ImportDefaultSpecifier":
      const localNameDefault = StringValue(node.local);
      return [
        {
          moduleRequest: module,
          importName: "default",
          localName: localNameDefault,
        },
      ];
    case "ImportSpecifier":
      const localNameNamed = StringValue(node.local);
      const importName = boundNames.soleElementOf(node);
      return [
        {
          moduleRequest: module,
          importName,
          localName: localNameNamed,
        },
      ];
  }
  return [];
}
