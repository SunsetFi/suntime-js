import { type Node } from "@babel/types";

import boundNames from "./bound-names.js";

export default function lexicallyDeclaredNames(node: Node, context?: "block"): string[] {
  switch (node.type) {
    case "File":
      return lexicallyDeclaredNames(node.program);
    case "Program":
      return node.body.flatMap((node) => lexicallyDeclaredNames(node));
    case "LabeledStatement":
      return lexicallyDeclaredNames(node.body);
    /* BEGIN Declaration */
    case "FunctionDeclaration":
      if (context === "block") {
        return boundNames(node);
      }
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
    case "SwitchCase":
      return node.consequent.flatMap((node) => lexicallyDeclaredNames(node));
    case "ExportNamedDeclaration": {
      if (node.declaration?.type === "VariableDeclaration" && node.declaration.kind === "var") {
        return [];
      }

      return boundNames(node);
    }
    case "ExportDefaultDeclaration": {
      return boundNames(node.declaration);
    }
  }
  return [];
}

function topLevelLexicallyDeclaredNames(node: Node): string[] {
  switch (node.type) {
    case "File":
      return topLevelLexicallyDeclaredNames(node.program);
    case "Program":
      return lexicallyDeclaredNames(node);
    case "LabeledStatement":
      return topLevelLexicallyDeclaredNames(node.body);
    /* BEGIN Declaration */
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "ObjectMethod":
    case "ClassMethod":
    case "ClassPrivateMethod":
      if (node.body.type === "BlockStatement") {
        return node.body.body.flatMap((node) => lexicallyDeclaredNames(node));
      }
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
    case "BlockStatement":
      return node.body.flatMap((node) => lexicallyDeclaredNames(node, "block"));
    case "SwitchStatement":
      return node.cases.flatMap((node) => lexicallyDeclaredNames(node, "block"));
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
      return lexicallyDeclaredNames(node);
  }

  return [];
}

lexicallyDeclaredNames.topLevel = topLevelLexicallyDeclaredNames;
