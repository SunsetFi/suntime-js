import type { ClassDeclaration, FunctionDeclaration, Node } from "@babel/types";

export type Declaration = FunctionDeclaration | ClassDeclaration;

const DeclarationTypes = new Set<Node["type"]>(["FunctionDeclaration", "ClassDeclaration"]);

export function isDeclarationGrammar(node: Node): node is Declaration {
  return DeclarationTypes.has(node.type);
}
