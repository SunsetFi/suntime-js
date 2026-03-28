import {
  type VariableDeclaration,
  type FunctionDeclaration,
  type ClassDeclaration,
  type ExportDefaultDeclaration,
  type Node,
} from "@babel/types";

import isAssignmentGrammar from "../../../grammar/is-assignment-grammar.js";

export type LexicallyScopedDeclNode =
  | VariableDeclaration
  | FunctionDeclaration
  | ClassDeclaration
  | ExportDefaultDeclaration;

function isLexicallyScopedDeclaration(node: Node): node is LexicallyScopedDeclNode {
  return (
    node.type === "VariableDeclaration" ||
    node.type === "FunctionDeclaration" ||
    node.type === "ClassDeclaration" ||
    node.type === "ExportDefaultDeclaration"
  );
}

export default function lexicallyScopedDeclarations(
  node: Node,
  context?: "block" | "module",
): LexicallyScopedDeclNode[] {
  switch (node.type) {
    case "File":
      return lexicallyScopedDeclarations(node.program);
    case "Program": {
      if (node.sourceType === "module") {
        // Really?  varScopedDeclarations?
        // Spec says it is...
        return node.body.flatMap((node) => lexicallyScopedDeclarations(node, "module"));
      }
      return node.body.flatMap((node) => lexicallyScopedDeclarations(node));
    }
    case "LabeledStatement":
      return lexicallyScopedDeclarations(node.body);
    /* BEGIN Declaration */
    case "FunctionDeclaration":
      if (context === "block" || context === "module") {
        return [node];
      }
      return [];
    case "ClassDeclaration":
      return [node];
    case "VariableDeclaration": {
      if (node.kind === "var") {
        return [];
      }
      return [node];
    }
    /* END Declaration */
    case "SwitchCase":
      return node.consequent.flatMap((node) => lexicallyScopedDeclarations(node));
    case "ExportNamedDeclaration": {
      if (
        !node.declaration ||
        // Mostly to filter out other babel garbage that isn't 'real' ecmascript syntax.
        !isLexicallyScopedDeclaration(node.declaration)
      ) {
        return [];
      }

      return [node.declaration];
    }
    case "ExportDefaultDeclaration": {
      if (node.declaration.type === "FunctionDeclaration") {
        return [node.declaration];
      }
      if (node.declaration.type === "ClassDeclaration") {
        return [node.declaration];
      }

      if (isAssignmentGrammar(node.declaration)) {
        return [node];
      }

      return [];
    }
  }
  return [];
}

function topLevelLexicallyScopedDeclarations(node: Node): LexicallyScopedDeclNode[] {
  switch (node.type) {
    case "File":
      return topLevelLexicallyScopedDeclarations(node.program);
    case "Program":
      return lexicallyScopedDeclarations(node);
    case "LabeledStatement":
      return topLevelLexicallyScopedDeclarations(node.body);
    /* BEGIN Declaration */
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "ObjectMethod":
    case "ClassMethod":
    case "ClassPrivateMethod":
      if (node.body.type === "BlockStatement") {
        return node.body.body.flatMap((node) => lexicallyScopedDeclarations(node));
      }
      return [];
    case "ClassDeclaration":
      return [node];
    case "VariableDeclaration": {
      if (node.kind === "var") {
        return [];
      }
      return [node];
    }
    /* END Declaration */
    case "BlockStatement":
      return node.body.flatMap((node) => lexicallyScopedDeclarations(node, "block"));
    case "SwitchStatement":
      return node.cases.flatMap((node) => lexicallyScopedDeclarations(node, "block"));
    case "EmptyStatement":
    case "ExpressionStatement":
    case "IfStatement":
    case "DoWhileStatement":
    case "WhileStatement":
    case "ForStatement":
    case "ForInStatement":
    case "ForOfStatement":
    case "ContinueStatement":
    case "BreakStatement":
    case "ReturnStatement":
    case "WithStatement":
    case "ThrowStatement":
    case "TryStatement":
    case "DebuggerStatement":
      return lexicallyScopedDeclarations(node);
  }

  return [];
}

lexicallyScopedDeclarations.topLevel = topLevelLexicallyScopedDeclarations;
