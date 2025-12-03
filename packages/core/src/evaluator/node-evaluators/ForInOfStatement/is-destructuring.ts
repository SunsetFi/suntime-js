import type { LVal, VariableDeclaration, VoidPattern } from "@babel/types";

export default function isDestructuring(
  node: VariableDeclaration | LVal | VoidPattern,
): boolean {
  if (node.type === "AssignmentPattern") {
    return isDestructuring(node.left);
  }
  if (node.type === "VariableDeclaration") {
    return isDestructuring(node.declarations[0].id);
  }

  switch (node.type) {
    case "ArrayPattern":
    case "ObjectPattern":
      return true;
  }

  return false;
}
