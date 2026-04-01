import type {
  ClassDeclaration,
  FunctionDeclaration,
  VariableDeclaration,
  BlockStatement,
  Node,
  Statement,
  SwitchStatement,
  Expression,
  ExportDefaultDeclaration,
  ExportNamedDeclaration,
} from "@babel/types";

export type LexicallyScopedDeclNode =
  | VariableDeclaration
  | FunctionDeclaration
  | ClassDeclaration
  | Expression
  | ExportNamedDeclaration
  | ExportDefaultDeclaration;

export default function lexicallyScopedDeclarations(node: Node): LexicallyScopedDeclNode[] {
  switch (node.type) {
    case "File":
    case "Program":
      return lexicallyScopedDeclarationsForScriptOrFunction(node);
    case "LabeledStatement":
      return blockContextLabelledItemLexicallyScopedDeclarations(node.body);
    case "FunctionDeclaration":
      return [];
    case "ClassDeclaration":
      return [node];
    case "VariableDeclaration":
      return node.kind === "var" ? [] : [node];
    case "SwitchCase":
      return node.consequent.flatMap(blockContextStatementListItemLexicallyScopedDeclarations);
    case "ExportNamedDeclaration": {
      if (node.declaration?.type === "VariableDeclaration" && node.declaration.kind === "var") {
        return [];
      }
      return [node];
    }
    case "ExportDefaultDeclaration": {
      const { declaration } = node;
      if (declaration.type === "TSDeclareFunction") {
        return [];
      }

      return [node];
    }
  }
  return [];
}

// LexicallyScopedDeclarations of StatementListItem in block or module context.
// FunctionDeclarations (including via LabelledStatement) ARE lexically declared here.
function blockContextStatementListItemLexicallyScopedDeclarations(
  node: Statement,
): LexicallyScopedDeclNode[] {
  switch (node.type) {
    case "FunctionDeclaration":
      return [node];
    case "ClassDeclaration":
      return [node];
    case "VariableDeclaration":
      return node.kind === "var" ? [] : [node];
    case "LabeledStatement":
      return blockContextLabelledItemLexicallyScopedDeclarations(node.body);
    case "ExportNamedDeclaration": {
      if (node.declaration?.type === "VariableDeclaration" && node.declaration.kind === "var") {
        return [];
      }
      return [node];
    }
    case "ExportDefaultDeclaration":
      return [node];
  }
  return [];
}

// LexicallyScopedDeclarations of LabelledItem in block context.
// Recurses through label chains; FunctionDeclaration yields its bound names.
function blockContextLabelledItemLexicallyScopedDeclarations(
  node: Node,
): LexicallyScopedDeclNode[] {
  if (node.type === "LabeledStatement") {
    return blockContextLabelledItemLexicallyScopedDeclarations(node.body);
  }
  if (node.type === "FunctionDeclaration") {
    return [node];
  }
  // LabelledItem : Statement → a new empty List
  return [];
}

// TopLevelLexicallyScopedDeclarations of StatementListItem in script or function body context.
// HoistableDeclarations (including via LabelledStatement) are NOT lexically declared here.
function topLevelStatementListItemLexicallyScopedDeclarations(
  node: Statement,
): LexicallyScopedDeclNode[] {
  switch (node.type) {
    case "FunctionDeclaration":
      return []; // Hoistable; handled as var-scoped at top level
    case "ClassDeclaration":
      return [node];
    case "VariableDeclaration":
      return node.kind === "var" ? [] : [node];
    case "LabeledStatement":
      return []; // Statements (including labelled) return [] at top level
  }
  return [];
}

// For File, Program (script or module), or a function body node.
// Scripts and function bodies use TopLevelLexicallyScopedDeclarations per item;
// modules use LexicallyScopedDeclarations (block-like) per item.
function lexicallyScopedDeclarationsForScriptOrFunction(node: Node): LexicallyScopedDeclNode[] {
  switch (node.type) {
    case "File":
      return lexicallyScopedDeclarationsForScriptOrFunction(node.program);
    case "Program":
      if (node.sourceType === "module") {
        return node.body.flatMap(blockContextStatementListItemLexicallyScopedDeclarations);
      }
      return node.body.flatMap(topLevelStatementListItemLexicallyScopedDeclarations);
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "ObjectMethod":
    case "ClassMethod":
    case "ClassPrivateMethod":
      if (node.body.type === "BlockStatement") {
        return node.body.body.flatMap(topLevelStatementListItemLexicallyScopedDeclarations);
      }
      return [];
  }
  return [];
}

// For a BlockStatement or SwitchStatement node (used by BlockDeclarationInstantiation).
// Uses block context: function declarations ARE lexically declared.
function lexicallyScopedDeclarationsForBlock(
  node: BlockStatement | SwitchStatement,
): LexicallyScopedDeclNode[] {
  if (node.type === "BlockStatement") {
    return node.body.flatMap(blockContextStatementListItemLexicallyScopedDeclarations);
  }
  return node.cases.flatMap((c) =>
    c.consequent.flatMap(blockContextStatementListItemLexicallyScopedDeclarations),
  );
}

lexicallyScopedDeclarations.forScriptOrFunction = lexicallyScopedDeclarationsForScriptOrFunction;
lexicallyScopedDeclarations.forBlock = lexicallyScopedDeclarationsForBlock;
