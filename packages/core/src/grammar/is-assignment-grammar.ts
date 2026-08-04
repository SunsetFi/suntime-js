import type { AssignmentExpression, AwaitExpression, Identifier, Node } from "@babel/types";

export type AssignmentGrammar = AssignmentExpression | Identifier | AwaitExpression;

const AssignmentGrammarTypes = new Set<Node["type"]>([
  "AssignmentExpression",
  "Identifier",
  "AwaitExpression",
]);

export default function isAssignmentGrammar(node: Node): node is AssignmentGrammar {
  // This is weird.  The spec defines AssignmentExpression as a circuitous nest of grammar
  // that eventually includes PrimaryExpression and LeftHandSideExpression in isolation.
  // Because of this, Identifiers count as AssignmentExpressions in the grammar.
  // This is required for things like `export default foo;` to work correctly.
  return AssignmentGrammarTypes.has(node.type);
}
