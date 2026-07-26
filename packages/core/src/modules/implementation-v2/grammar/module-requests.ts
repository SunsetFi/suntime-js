import type { Node } from "@babel/types";

import { StringValue } from "#grammar/stirng-value.js";

import type { StaticJsModuleRequestRecord } from "../StaticJsModuleRequestRecord.js";

export function moduleRequests(node: Node): StaticJsModuleRequestRecord[] {
  switch (node.type) {
    case "Program":
      if (node.sourceType !== "module") {
        return [];
      }
      return node.body.flatMap(moduleRequests);
    case "ImportDeclaration":
      return [
        {
          specifier: node.source.value,
          attributes:
            node.attributes?.map((x) => ({
              key: StringValue(x.key),
              value: StringValue(x.value),
            })) ?? [],
        },
      ];
    case "ExportNamedDeclaration":
    case "ExportAllDeclaration":
      if (node.source) {
        return [
          {
            specifier: node.source.value,
            attributes:
              node.attributes?.map((x) => ({
                key: StringValue(x.key),
                value: StringValue(x.value),
              })) ?? [],
          },
        ];
      }
  }

  return [];
}
