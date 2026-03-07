import type {
  ArrowFunctionExpression,
  ClassDeclaration,
  ClassExpression,
  FunctionDeclaration,
  FunctionExpression,
  Node,
} from "@babel/types";

export type FunctionDefinition =
  | ArrowFunctionExpression
  | FunctionExpression
  | FunctionDeclaration
  | ClassDeclaration
  | ClassExpression;
export default function isFunctionDefinition(node: Node): node is FunctionDefinition {
  switch (node.type) {
    case "ArrowFunctionExpression":
    case "FunctionExpression":
    case "FunctionDeclaration":
    case "ClassDeclaration":
    case "ClassExpression":
      return true;
  }

  return false;
}
