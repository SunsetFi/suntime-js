import type { LVal, VariableDeclaration } from "@babel/types";

export default function isDestructuring(
  node: VariableDeclaration | LVal,
): boolean {
  if (node.type !== "VariableDeclaration") {
    // Really?  How can left be LVal directly here?  That can be destructuring patterns too...
    return false;
  }

  const declarator = node.declarations[0];
  switch (declarator.id.type) {
    case "ArrayPattern":
    case "ObjectPattern":
      return true;
  }

  return false;
}
