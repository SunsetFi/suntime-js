import {
  isIdentifier,
  isPattern,
  isRestElement,
  type Node,
  type Identifier,
  type Pattern,
  type RestElement,
} from "@babel/types";

export type StaticJsAstFunctionArgument = Identifier | Pattern | RestElement;
export function isStaticJsAstFunctionArgumentDeclaration(
  node: Node,
): node is StaticJsAstFunctionArgument {
  return isIdentifier(node) || isPattern(node) || isRestElement(node);
}
