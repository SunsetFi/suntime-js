import type { Node } from "@babel/types";

import isFunctionDefinition from "./is-function-definition.js";

export default function hasName(node: Node): boolean {
  if (node.type === "ParenthesizedExpression") {
    if (!isFunctionDefinition(node.expression)) {
      return false;
    }

    return hasName(node.expression);
  }

  if (
    node.type === "FunctionExpression" ||
    node.type === "FunctionDeclaration" ||
    node.type === "ClassExpression" ||
    node.type === "ClassDeclaration"
  ) {
    return !!node.id;
  }

  return false;
}
