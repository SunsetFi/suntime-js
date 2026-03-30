import type { BlockStatement, Node, Statement, SwitchStatement } from "@babel/types";

import boundNames from "./bound-names.js";

export default function lexicallyDeclaredNames(node: Node): string[] {
  switch (node.type) {
    case "File":
    case "Program":
      return lexicallyDeclaredNamesForScriptOrFunction(node);
    case "LabeledStatement":
      return blockContextLabelledItemLexicallyDeclaredNames(node.body);
    case "FunctionDeclaration":
      return [];
    case "ClassDeclaration":
      return boundNames(node);
    case "VariableDeclaration":
      return node.kind === "var" ? [] : boundNames(node);
    case "SwitchCase":
      return node.consequent.flatMap(blockContextStatementListItemLexicallyDeclaredNames);
    case "ExportNamedDeclaration": {
      if (node.declaration?.type === "VariableDeclaration" && node.declaration.kind === "var") {
        return [];
      }
      return boundNames(node);
    }
    case "ExportDefaultDeclaration":
      return boundNames(node.declaration);
  }
  return [];
}

// LexicallyDeclaredNames of StatementListItem in block or module context.
// FunctionDeclarations (including via LabelledStatement) ARE lexically declared here.
function blockContextStatementListItemLexicallyDeclaredNames(node: Statement): string[] {
  switch (node.type) {
    case "FunctionDeclaration":
      return boundNames(node);
    case "ClassDeclaration":
      return boundNames(node);
    case "VariableDeclaration":
      return node.kind === "var" ? [] : boundNames(node);
    case "LabeledStatement":
      return blockContextLabelledItemLexicallyDeclaredNames(node.body);
    case "ExportNamedDeclaration": {
      if (node.declaration?.type === "VariableDeclaration" && node.declaration.kind === "var") {
        return [];
      }
      return boundNames(node);
    }
    case "ExportDefaultDeclaration":
      return boundNames(node.declaration);
  }
  return [];
}

// LexicallyDeclaredNames of LabelledItem in block context.
// Recurses through label chains; FunctionDeclaration yields its bound names.
function blockContextLabelledItemLexicallyDeclaredNames(node: Node): string[] {
  if (node.type === "LabeledStatement") {
    return blockContextLabelledItemLexicallyDeclaredNames(node.body);
  }
  if (node.type === "FunctionDeclaration") {
    return boundNames(node);
  }
  // LabelledItem : Statement → a new empty List
  return [];
}

// TopLevelLexicallyDeclaredNames of StatementListItem in script or function body context.
// HoistableDeclarations (including via LabelledStatement) are NOT lexically declared here.
function topLevelStatementListItemLexicallyDeclaredNames(node: Statement): string[] {
  switch (node.type) {
    case "FunctionDeclaration":
      return []; // Hoistable; handled as var-scoped at top level
    case "ClassDeclaration":
      return boundNames(node);
    case "VariableDeclaration":
      return node.kind === "var" ? [] : boundNames(node);
    case "LabeledStatement":
      return []; // Statements (including labelled) return [] at top level
  }
  return [];
}

// For File, Program (script or module), or a function body node.
// Scripts and function bodies use TopLevelLexicallyDeclaredNames per item;
// modules use LexicallyDeclaredNames (block-like) per item.
function lexicallyDeclaredNamesForScriptOrFunction(node: Node): string[] {
  switch (node.type) {
    case "File":
      return lexicallyDeclaredNamesForScriptOrFunction(node.program);
    case "Program":
      if (node.sourceType === "module") {
        return node.body.flatMap(blockContextStatementListItemLexicallyDeclaredNames);
      }
      return node.body.flatMap(topLevelStatementListItemLexicallyDeclaredNames);
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "ObjectMethod":
    case "ClassMethod":
    case "ClassPrivateMethod":
      if (node.body.type === "BlockStatement") {
        return node.body.body.flatMap(topLevelStatementListItemLexicallyDeclaredNames);
      }
      return [];
  }
  return [];
}

// For a BlockStatement or SwitchStatement node (used by BlockDeclarationInstantiation).
// Uses block context: function declarations ARE lexically declared.
function lexicallyDeclaredNamesForBlock(node: BlockStatement | SwitchStatement): string[] {
  if (node.type === "BlockStatement") {
    return node.body.flatMap(blockContextStatementListItemLexicallyDeclaredNames);
  }
  return node.cases.flatMap((c) =>
    c.consequent.flatMap(blockContextStatementListItemLexicallyDeclaredNames),
  );
}

lexicallyDeclaredNames.forScriptOrFunction = lexicallyDeclaredNamesForScriptOrFunction;
lexicallyDeclaredNames.forBlock = lexicallyDeclaredNamesForBlock;
