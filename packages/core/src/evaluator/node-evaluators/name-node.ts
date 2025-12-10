import type { Node } from "@babel/types";

export default function nameNode(node: Node): string {
  if (node.type === "Identifier") {
    return node.name;
  } else if (node.type === "MemberExpression") {
    if (node.computed) {
      return `${nameNode(node.object)}[${nameNode(node.property)}]`;
    } else {
      return `${nameNode(node.object)}.${nameNode(node.property)}`;
    }
  }

  return "<expression>";
}
