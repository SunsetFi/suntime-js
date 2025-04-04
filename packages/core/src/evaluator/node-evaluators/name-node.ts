import { Node } from "@babel/types";

export default function nameNode(node: Node): string {
  if (node.type === "Identifier") {
    return node.name;
  } else if (node.type === "MemberExpression") {
    return `${nameNode(node.object)}.${nameNode(node.property)}`;
  }

  return "<expression>";
}
