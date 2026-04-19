import type { Node } from "@babel/types";

export default function nameNode(node: Node): string {
  switch (node.type) {
    case "Identifier":
      return node.name;
    case "MemberExpression":
      if (node.computed) {
        return `${nameNode(node.object)}[${nameNode(node.property)}]`;
      } else {
        return `${nameNode(node.object)}.${nameNode(node.property)}`;
      }
    case "Super":
      return "super";
    default:
      return "<expression>";
  }

  return "<expression>";
}
