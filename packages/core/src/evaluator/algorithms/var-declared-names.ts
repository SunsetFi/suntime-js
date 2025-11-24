import type { Node } from "@babel/types";

import boundNames from "./bound-names.js";

export default function varDeclaredNames(node: Node): string[] {
  switch (node.type) {
    case "File":
      return varDeclaredNames(node.program);
    case "Program":
      return node.body.flatMap(topLevelVarDeclaredNames);
    case "VariableDeclaration": {
      if (node.kind !== "var") {
        return [];
      }
      return boundNames(node);
    }
    case "BlockStatement":
      return node.body.flatMap(varDeclaredNames);
    case "SwitchStatement":
      return node.cases.flatMap(varDeclaredNames);
    case "SwitchCase":
      return node.consequent.flatMap(varDeclaredNames);
    case "ForStatement": {
      let names: string[] = [];
      if (node.init) {
        names = varDeclaredNames(node.init);
      }
      names = names.concat(varDeclaredNames(node.body));
      return names;
    }
    case "ForInStatement":
    case "ForOfStatement": {
      let names: string[] = [];
      names = names.concat(varDeclaredNames(node.left));
      names = names.concat(varDeclaredNames(node.body));
      return names;
    }
    case "WhileStatement":
    case "DoWhileStatement": {
      return varDeclaredNames(node.body);
    }
    case "IfStatement": {
      let names: string[] = [];
      names = names.concat(varDeclaredNames(node.consequent));
      if (node.alternate) {
        names = names.concat(varDeclaredNames(node.alternate));
      }
      return names;
    }
    case "TryStatement": {
      let names: string[] = [];
      names = names.concat(varDeclaredNames(node.block));
      if (node.handler) {
        names = names.concat(varDeclaredNames(node.handler.body));
      }
      if (node.finalizer) {
        names = names.concat(varDeclaredNames(node.finalizer));
      }
      return names;
    }
    case "WithStatement":
      return varDeclaredNames(node.body);
    case "LabeledStatement":
      return varDeclaredNames(node.body);
    case "ImportDeclaration":
      return [];
    case "ExportNamedDeclaration":
    case "ExportDefaultDeclaration": {
      if (node.declaration) {
        return varDeclaredNames(node.declaration);
      }
      return [];
    }
  }
  return [];
}

function topLevelVarDeclaredNames(node: Node): string[] {
  switch (node.type) {
    case "File":
      return topLevelVarDeclaredNames(node.program);
    case "Program":
      return node.body.flatMap(topLevelVarDeclaredNames);
    case "FunctionDeclaration": {
      return boundNames(node);
    }
    case "LabeledStatement":
      return topLevelVarDeclaredNames(node.body);
    /* BEGIN Statement */
    case "BlockStatement":
    case "VariableDeclaration":
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
    case "DebuggerStatement":
      return varDeclaredNames(node);
    /* END Statement */
  }

  return [];
}
