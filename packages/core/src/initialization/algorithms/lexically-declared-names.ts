import { type Node } from "@babel/types";
import boundNames from "./bound-names.js";

export default function lexicallyDeclaredNames(node: Node): string[] {
  switch (node.type) {
    case "File":
      return lexicallyDeclaredNames(node.program);
    case "Program":
      return node.body.flatMap(topLevelLexicallyDeclaredNames);
    case "VariableDeclaration": {
      if (node.kind === "var") {
        return [];
      }
      return boundNames(node);
    }
    case "SwitchStatement":
      return node.cases.flatMap(lexicallyDeclaredNames);
    case "SwitchCase":
      return node.consequent.flatMap(lexicallyDeclaredNames);
    case "ClassDeclaration":
      return boundNames(node);
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
