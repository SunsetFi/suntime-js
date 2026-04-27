import type { Node, Statement } from "@babel/types";

import boundNames from "./bound-names.js";

export default function varDeclaredNames(node: Node): string[] {
  switch (node.type) {
    case "EmptyStatement":
    case "ExpressionStatement":
    case "ContinueStatement":
    case "BreakStatement":
    case "ReturnStatement":
    case "ThrowStatement":
    case "DebuggerStatement":
      return [];
    case "BlockStatement": {
      // I don't see where this is defined in the spec, as only an empty block is defined.
      // Somehow, it specifies that this flows into StatementList
      return statementListVarDeclaredNames(node.body);
    }
    case "VariableDeclaration": {
      if (node.kind === "var") {
        return boundNames(node);
      }
      return [];
    }
    case "IfStatement": {
      const names = varDeclaredNames(node.consequent);
      if (node.alternate) {
        names.push(...varDeclaredNames(node.alternate));
      }
      return names;
    }
    case "DoWhileStatement": {
      return varDeclaredNames(node.body);
    }
    case "WhileStatement": {
      return varDeclaredNames(node.body);
    }
    case "ForStatement": {
      const names: string[] = [];
      if (node.init?.type === "VariableDeclaration" && node.init.kind === "var") {
        names.push(...boundNames(node.init));
      }
      names.push(...varDeclaredNames(node.body));
      return names;
    }
    case "ForInStatement":
    case "ForOfStatement": {
      const names: string[] = [];
      if (node.left.type === "VariableDeclaration" && node.left.kind === "var") {
        names.push(...boundNames(node.left));
      }
      names.push(...varDeclaredNames(node.body));
      return names;
    }
    case "WithStatement": {
      return varDeclaredNames(node.body);
    }
    case "SwitchStatement": {
      return node.cases.flatMap(varDeclaredNames);
    }
    case "SwitchCase": {
      return statementListVarDeclaredNames(node.consequent);
    }
    /* LabelledItem */
    // I have no idea if this should be here or if this is only a sub-state of the
    // syntax directed op...
    case "LabeledStatement": {
      return labelledItemVarDeclaredNames(node.body);
    }
    case "TryStatement": {
      const names: string[] = varDeclaredNames(node.block);
      if (node.handler) {
        names.push(...varDeclaredNames(node.handler.body));
      }
      if (node.finalizer) {
        names.push(...varDeclaredNames(node.finalizer));
      }
      return names;
    }
    case "File":
      return varDeclaredNames(node.program);
    case "Program": {
      if (node.sourceType === "module") {
        return node.body.flatMap(varDeclaredNames);
      } else {
        /* Script */
        return statementListTopLevelVarDeclaredNames(node.body);
      }
    }
    case "ImportDeclaration": {
      return [];
    }
    case "ExportNamedDeclaration": {
      if (node.declaration?.type === "VariableDeclaration" && node.declaration.kind === "var") {
        return boundNames(node.declaration);
      }
      return [];
    }
  }

  return [];
}

function statementListVarDeclaredNames(node: Statement[] | Statement): string[] {
  if (Array.isArray(node)) {
    return node.flatMap(statementListVarDeclaredNames);
  }

  switch (node.type) {
    /* Declaration */
    /*
    FunctionDeclaration
    GeneratorDeclaration
    AsyncFunctionDeclaration
    AsyncGeneratorDeclaration
    */
    case "FunctionDeclaration":
    case "ClassDeclaration":
      return [];
  }

  // Is this what we do?  Fall back to standard?
  return varDeclaredNames(node);
}

function labelledItemVarDeclaredNames(node: Node): string[] {
  switch (node.type) {
    case "FunctionDeclaration": {
      return [];
    }
  }

  // Is this what we do?  Fall back to standard?
  return varDeclaredNames(node);
}

function topLevelVarDeclaredNames(node: Node): string[] {
  switch (node.type) {
    /* BEGIN StatementList */
    // Hacks for the fact that we don't have a top-level StatementList node type.
    // These are passed instead, and we redirect to the statement list selector on
    // the appropriate node.
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod":
      // statement list of function
      return statementListTopLevelVarDeclaredNames(node.body.body);
    case "ArrowFunctionExpression": {
      if (node.body.type === "BlockStatement") {
        return statementListTopLevelVarDeclaredNames(node.body.body);
      }
      return [];
    }
    case "StaticBlock":
      return statementListTopLevelVarDeclaredNames(node.body);
    /* END StatementList */
    case "LabeledStatement":
      return labelledItemTopLevelVarDeclaredNames(node.body);
  }

  return [];
}

function labelledItemTopLevelVarDeclaredNames(node: Node): string[] {
  switch (node.type) {
    case "LabeledStatement":
      return labelledItemTopLevelVarDeclaredNames(node.body);
    /* BEGIN Statement */
    case "VariableDeclaration": {
      if (node.kind === "var") {
        // VariableStatement
        return varDeclaredNames(node);
      }
      return [];
    }
    case "BlockStatement":
    case "EmptyStatement":
    case "ExpressionStatement":
    case "IfStatement":
    /* BEGIN BreakableStatement */
    /* BEGIN IterationStatement */
    case "DoWhileStatement":
    case "WhileStatement":
    case "ForStatement":
    case "ForInStatement":
    case "ForOfStatement":
    /* END IterationStatement */
    case "SwitchStatement":
    /* END BreakableStatement */
    case "ContinueStatement":
    case "BreakStatement":
    case "ReturnStatement":
    case "WithStatement":
    case "ThrowStatement":
    case "TryStatement":
    case "DebuggerStatement":
      /* END Statement */
      return varDeclaredNames(node);
    case "FunctionDeclaration":
      return boundNames(node);
  }

  return [];
}

function statementListTopLevelVarDeclaredNames(node: Statement[] | Statement): string[] {
  if (Array.isArray(node)) {
    return node.flatMap(statementListTopLevelVarDeclaredNames);
  }

  switch (node.type) {
    /* BEGIN Declaration */
    case "FunctionDeclaration":
      // Includes: GeneratorDeclaration, AsyncFunctionDeclaration, AsyncGeneratorDeclaration
      return boundNames(node);
    case "ClassDeclaration":
    /* END Declaration */
    case "LabeledStatement": {
      return labelledStatementTopLevelVarDeclaredNames(node.body);
    }
    /* BEGIN Statement */
    case "VariableDeclaration": {
      if (node.kind === "var") {
        // VariableStatement
        return varDeclaredNames(node);
      }

      // LexicalDeclaration
      return [];
    }
    case "BlockStatement":
    case "EmptyStatement":
    case "ExpressionStatement":
    case "IfStatement":
    /* BEGIN BreakableStatement */
    /* BEGIN IterationStatement */
    case "DoWhileStatement":
    case "WhileStatement":
    case "ForStatement":
    case "ForInStatement":
    case "ForOfStatement":
    /* END IterationStatement */
    case "SwitchStatement":
    /* END BreakableStatement */
    case "ContinueStatement":
    case "BreakStatement":
    case "ReturnStatement":
    case "WithStatement":
    case "ThrowStatement":
    case "TryStatement":
    case "DebuggerStatement":
      /* END Statement */
      return varDeclaredNames(node);
  }

  return [];
}

function labelledStatementTopLevelVarDeclaredNames(node: Node): string[] {
  switch (node.type) {
    case "LabeledStatement":
      return labelledStatementTopLevelVarDeclaredNames(node.body);
    /* BEGIN Statement */
    case "VariableDeclaration": {
      if (node.kind === "var") {
        // VariableStatement
        return varDeclaredNames(node);
      }

      // LexicalDeclaration
      return [];
    }
    case "BlockStatement":
    case "EmptyStatement":
    case "ExpressionStatement":
    case "IfStatement":
    /* BEGIN BreakableStatement */
    /* BEGIN IterationStatement */
    case "DoWhileStatement":
    case "WhileStatement":
    case "ForStatement":
    case "ForInStatement":
    case "ForOfStatement":
    /* END IterationStatement */
    case "SwitchStatement":
    /* END BreakableStatement */
    case "ContinueStatement":
    case "BreakStatement":
    case "ReturnStatement":
    case "WithStatement":
    case "ThrowStatement":
    case "TryStatement":
    case "DebuggerStatement":
      /* END Statement */
      return varDeclaredNames(node);
    case "FunctionDeclaration":
      return boundNames(node);
  }

  return [];
}

varDeclaredNames.topLevel = topLevelVarDeclaredNames;
