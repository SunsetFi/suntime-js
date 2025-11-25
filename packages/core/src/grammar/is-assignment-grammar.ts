import type { AssignmentExpression, Identifier, Node } from "@babel/types";

export type AssignmentGrammar = AssignmentExpression | Identifier;
export default function isAssignmentGrammar(
  node: Node,
): node is AssignmentGrammar {
  // This is weird.  The spec defines AssignmentExpression as a circuitous nest of grammar
  // that eventually includes PrimaryExpression and LeftHandSideExpression in isolation.
  // Because of this, Identifiers count as AssignmentExpressions in the grammar.
  // This is required for things like `export default foo;` to work correctly.
  return node.type === "AssignmentExpression" || node.type === "Identifier";
}
