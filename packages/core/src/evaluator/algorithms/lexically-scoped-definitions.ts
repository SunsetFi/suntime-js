import type {
  VariableDeclaration,
  FunctionDeclaration,
  ClassDeclaration,
  Node,
} from "@babel/types";

export type LexicallyScopedDeclNode =
  | VariableDeclaration
  | FunctionDeclaration
  | ClassDeclaration;
export default function lexicallyScopedDefinitions(
  _node: Node,
): LexicallyScopedDeclNode[] {
  // TODO
  return [];
}
