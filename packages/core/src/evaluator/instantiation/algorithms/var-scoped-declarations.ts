import type { FunctionDeclaration, Node, VariableDeclaration } from "@babel/types";

export type VarScopedDeclNode = VariableDeclaration | FunctionDeclaration;

export default function varScopedDeclarations(node: Node): VarScopedDeclNode[] {
  switch (node.type) {
    case "File":
      return varScopedDeclarations(node.program);
    case "Program":
      if (node.sourceType === "module") {
        return node.body.flatMap(varScopedDeclarations);
      }
      return node.body.flatMap(topLevelVarScopedDeclarations);
    case "VariableDeclaration": {
      if (node.kind !== "var") {
        return [];
      }
      return [node];
    }
    case "BlockStatement":
      return node.body.flatMap(varScopedDeclarations);
    case "SwitchStatement":
      return node.cases.flatMap(varScopedDeclarations);
    case "SwitchCase":
      return node.consequent.flatMap(varScopedDeclarations);
    case "ForStatement": {
      let decls: VarScopedDeclNode[] = [];
      if (node.init) {
        decls = varScopedDeclarations(node.init);
      }
      decls = decls.concat(varScopedDeclarations(node.body));
      return decls;
    }
    case "ForInStatement":
    case "ForOfStatement": {
      let decls: VarScopedDeclNode[] = [];
      decls = decls.concat(varScopedDeclarations(node.left));
      decls = decls.concat(varScopedDeclarations(node.body));
      return decls;
    }
    case "WhileStatement":
    case "DoWhileStatement": {
      return varScopedDeclarations(node.body);
    }
    case "IfStatement": {
      let decls: VarScopedDeclNode[] = [];
      decls = decls.concat(varScopedDeclarations(node.consequent));
      if (node.alternate) {
        decls = decls.concat(varScopedDeclarations(node.alternate));
      }
      return decls;
    }
    case "TryStatement": {
      let decls: VarScopedDeclNode[] = [];
      decls = decls.concat(varScopedDeclarations(node.block));
      if (node.handler) {
        decls = decls.concat(varScopedDeclarations(node.handler.body));
      }
      if (node.finalizer) {
        decls = decls.concat(varScopedDeclarations(node.finalizer));
      }
      return decls;
    }
    case "WithStatement":
      return varScopedDeclarations(node.body);
    case "LabeledStatement":
      return varScopedDeclarations(node.body);
    case "ImportDeclaration":
      return [];
    case "ExportNamedDeclaration":
    case "ExportDefaultDeclaration": {
      if (node.declaration) {
        return varScopedDeclarations(node.declaration);
      }
      return [];
    }
  }
  return [];
}

function topLevelVarScopedDeclarations(node: Node): VarScopedDeclNode[] {
  switch (node.type) {
    case "File":
      return topLevelVarScopedDeclarations(node.program);
    case "Program":
      return node.body.flatMap(topLevelVarScopedDeclarations);
    case "FunctionDeclaration": {
      return [node];
    }
    case "LabeledStatement":
      return topLevelVarScopedDeclarations(node.body);
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
      return varScopedDeclarations(node);
    /* END Statement */
  }

  return [];
}

varScopedDeclarations.topLevel = topLevelVarScopedDeclarations;
