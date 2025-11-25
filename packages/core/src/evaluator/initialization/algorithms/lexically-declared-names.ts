import {
  type VariableDeclaration,
  type FunctionDeclaration,
  type ClassDeclaration,
  type ExportDefaultDeclaration,
  type Node,
  isAssignmentExpression,
} from "@babel/types";

import boundNames from "./bound-names.js";

export type LexicallyScopedDeclNode =
  | VariableDeclaration
  | FunctionDeclaration
  | ClassDeclaration
  | ExportDefaultDeclaration;

function isLexicallyScopedDeclaration(
  node: Node,
): node is LexicallyScopedDeclNode {
  return (
    node.type === "VariableDeclaration" ||
    node.type === "FunctionDeclaration" ||
    node.type === "ClassDeclaration" ||
    node.type === "ExportDefaultDeclaration"
  );
}

export default function lexicallyDeclaredNames(node: Node): string[] {
  switch (node.type) {
    case "File":
      return lexicallyDeclaredNames(node.program);
    case "Program":
      return node.body.flatMap(topLevelLexicallyDeclaredNames);
    case "LabeledStatement":
      return lexicallyDeclaredNames(node.body);
    /* BEGIN Declaration */
    case "FunctionDeclaration":
    case "ClassDeclaration":
      return boundNames(node);
    case "VariableDeclaration": {
      if (node.kind === "var") {
        return [];
      }
      return boundNames(node);
    }
    /* END Declaration */
    case "SwitchStatement":
      return node.cases.flatMap(lexicallyDeclaredNames);
    case "SwitchCase":
      return node.consequent.flatMap(lexicallyDeclaredNames);
    case "ExportNamedDeclaration": {
      if (
        !node.declaration ||
        !isLexicallyScopedDeclaration(node.declaration)
      ) {
        return [];
      }

      return boundNames(node.declaration);
    }
    case "ExportDefaultDeclaration": {
      if (node.declaration.type === "FunctionDeclaration") {
        return boundNames(node.declaration);
      }
      if (node.declaration.type === "ClassDeclaration") {
        return boundNames(node.declaration);
      }

      if (isAssignmentExpression(node.declaration)) {
        return [];
      }
    }
  }
  return [];
}

function topLevelLexicallyDeclaredNames(node: Node): string[] {
  switch (node.type) {
    case "File":
      return topLevelLexicallyDeclaredNames(node.program);
    case "Program":
      return node.body.flatMap(topLevelLexicallyDeclaredNames);
    case "LabeledStatement":
      return topLevelLexicallyDeclaredNames(node.body);
    /* BEGIN Declaration */
    case "FunctionDeclaration":
      return [];
    case "ClassDeclaration":
      return boundNames(node);
    case "VariableDeclaration": {
      if (node.kind === "var") {
        return [];
      }
      return boundNames(node);
    }
    /* END Declaration */
    case "BlockStatement": /* BEGIN Statement */
    case "EmptyStatement":
    case "ExpressionStatement":
    case "IfStatement":
    case "DoWhileStatement": /* BEGIN BreakableStatement */
    case "WhileStatement":
    case "ForStatement":
    case "ForInStatement":
    case "ForOfStatement":
    case "SwitchStatement": /* END BreakableStatement */
    case "ContinueStatement":
    case "BreakStatement":
    case "ReturnStatement":
    case "WithStatement":
    case "ThrowStatement":
    case "TryStatement":
    case "DebuggerStatement" /* END Statement */:
      return lexicallyDeclaredNames(node);
  }

  return [];
}
