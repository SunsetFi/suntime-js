import type {
  FunctionDeclaration,
  Node,
  Statement,
  SwitchCase,
  SwitchStatement,
  VariableDeclaration,
} from "@babel/types";

// TODO: Looks like we should return VariableDeclarator,
// as our VariableDeclaration is actually VariableDeclarationList
export type VarScopedDeclNode = VariableDeclaration | FunctionDeclaration;

export default function varScopedDeclarations(node: Node): VarScopedDeclNode[] {
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
      return statementListVarScopedDeclarations(node.body);
    }
    // VariableDeclarationList
    // Just supposed to know to do this without the spec mentioning
    // VariableDeclaration?
    case "VariableDeclaration": {
      if (node.kind === "var") {
        // VariableStatement
        // FIXME: Should be node.declarations?
        return [node];
      }
      // LexicalDeclaration
      return [];
    }
    case "IfStatement": {
      const decls: VarScopedDeclNode[] = varScopedDeclarations(node.consequent);
      if (node.alternate) {
        decls.push(...varScopedDeclarations(node.alternate));
      }
      return decls;
    }
    case "DoWhileStatement":
      return varScopedDeclarations(node.body);
    case "WhileStatement":
      return varScopedDeclarations(node.body);
    case "ForStatement": {
      const decls: VarScopedDeclNode[] = [];
      if (node.init) {
        decls.push(...varScopedDeclarations(node.init));
      }
      decls.push(...varScopedDeclarations(node.body));
      return decls;
    }
    case "ForInStatement":
    case "ForOfStatement": {
      const decls: VarScopedDeclNode[] = [];
      if (node.left.type === "VariableDeclaration" && node.left.kind === "var") {
        decls.push(...varScopedDeclarations(node.left));
      }
      decls.push(...varScopedDeclarations(node.body));
      return decls;
    }
    case "WithStatement":
      return varScopedDeclarations(node.body);
    case "SwitchStatement":
      return switchCaseVarScopedDeclarations(node);
    case "LabeledStatement":
      return labelledItemVarScopedDeclarations(node.body);
    case "TryStatement": {
      const decls: VarScopedDeclNode[] = varScopedDeclarations(node.block);
      if (node.handler) {
        decls.push(...varScopedDeclarations(node.handler.body));
      }
      if (node.finalizer) {
        decls.push(...varScopedDeclarations(node.finalizer));
      }
      return decls;
    }
    case "File":
      return varScopedDeclarations(node.program);
    case "Program": {
      if (node.sourceType === "module") {
        return node.body.flatMap(varScopedDeclarations);
      } else {
        // Script
        // Script says none, but ScriptBody : StatementList??
        return statementListTopLevelVarScopedDeclarations(node.body);
      }
    }
    case "ImportDeclaration":
      return [];
    case "ExportNamedDeclaration": {
      if (node.declaration?.type === "VariableDeclaration" && node.declaration.kind === "var") {
        return [node.declaration];
      }
      return [];
    }
  }

  return [];
}

function statementListVarScopedDeclarations(node: Statement | Statement[]): VarScopedDeclNode[] {
  if (Array.isArray(node)) {
    return node.flatMap(statementListVarScopedDeclarations);
  }

  switch (node.type) {
    /* BEGIN HoistableDeclaration */
    // FunctionDeclaration
    // GeneratorDeclaration
    // AsyncFunctionDeclaration
    // AsyncGeneratorDeclaration
    case "FunctionDeclaration":
    /* END HoistableDeclaration */
    case "ClassDeclaration":
      return [];

    case "VariableDeclaration": {
      if (node.kind !== "var") {
        // LexicalDeclaration
        return [];
      }

      // VariableDeclaration

      return [node];
    }
  }

  // ???
  return varScopedDeclarations(node);
}

function labelledItemVarScopedDeclarations(node: Node): VarScopedDeclNode[] {
  switch (node.type) {
    case "FunctionDeclaration":
      return [];
  }

  // ???
  return varScopedDeclarations(node);
}

function switchCaseVarScopedDeclarations(node: SwitchStatement | SwitchCase): VarScopedDeclNode[] {
  switch (node.type) {
    case "SwitchStatement":
      return node.cases.flatMap(switchCaseVarScopedDeclarations);
    case "SwitchCase":
      return statementListVarScopedDeclarations(node.consequent);
  }
}

// export default function varScopedDeclarations(
//   node: Node,
//   context?: "block" | "module",
// ): VarScopedDeclNode[] {
//   switch (node.type) {
//     case "File":
//       return varScopedDeclarations(node.program);
//     case "Program":
//       if (node.sourceType === "module") {
//         return node.body.flatMap((node) => varScopedDeclarations(node, "module"));
//       }
//       return node.body.flatMap((node) => varScopedDeclarations(node));
//     case "VariableDeclaration": {
//       if (node.kind !== "var") {
//         return [];
//       }
//       return [node];
//     }
//     case "FunctionDeclaration": {
//       if (context === "block" || context === "module") {
//         return [];
//       }
//       return [node];
//     }
//     case "BlockStatement":
//       return node.body.flatMap((node) => varScopedDeclarations(node, "block"));
//     case "SwitchStatement":
//       return node.cases.flatMap((node) => varScopedDeclarations(node, "block"));
//     case "SwitchCase":
//       return node.consequent.flatMap((node) => varScopedDeclarations(node, context));
//     case "ForStatement": {
//       let decls: VarScopedDeclNode[] = [];
//       if (node.init) {
//         decls = varScopedDeclarations(node.init);
//       }
//       decls = decls.concat(varScopedDeclarations(node.body));
//       return decls;
//     }
//     case "ForInStatement":
//     case "ForOfStatement": {
//       let decls: VarScopedDeclNode[] = [];
//       decls = decls.concat(varScopedDeclarations(node.left));
//       decls = decls.concat(varScopedDeclarations(node.body));
//       return decls;
//     }
//     case "WhileStatement":
//     case "DoWhileStatement": {
//       return varScopedDeclarations(node.body);
//     }
//     case "IfStatement": {
//       let decls: VarScopedDeclNode[] = [];
//       decls = decls.concat(varScopedDeclarations(node.consequent));
//       if (node.alternate) {
//         decls = decls.concat(varScopedDeclarations(node.alternate));
//       }
//       return decls;
//     }
//     case "TryStatement": {
//       let decls: VarScopedDeclNode[] = [];
//       decls = decls.concat(varScopedDeclarations(node.block));
//       if (node.handler) {
//         decls = decls.concat(varScopedDeclarations(node.handler.body));
//       }
//       if (node.finalizer) {
//         decls = decls.concat(varScopedDeclarations(node.finalizer));
//       }
//       return decls;
//     }
//     case "WithStatement":
//       return varScopedDeclarations(node.body);
//     case "LabeledStatement":
//       return varScopedDeclarations(node.body);
//     case "ImportDeclaration":
//       return [];
//     // case "ExportNamedDeclaration": {
//     //   if (node.declaration) {
//     //     return varScopedDeclarations(node.declaration);
//     //   }
//     //   return [];
//     // }
//   }
//   return [];
// }

function topLevelVarScopedDeclarations(node: Node): VarScopedDeclNode[] {
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
      return statementListTopLevelVarScopedDeclarations(node.body.body);
    case "ArrowFunctionExpression": {
      if (node.body.type === "BlockStatement") {
        return statementListTopLevelVarScopedDeclarations(node.body.body);
      }
      return [];
    }
    case "StaticBlock":
      return statementListTopLevelVarScopedDeclarations(node.body);
    case "File":
      return topLevelVarScopedDeclarations(node.program);
    case "Program":
      return node.body.flatMap(statementListTopLevelVarScopedDeclarations);
    /* END StatementList */
    case "LabeledStatement":
      return labelledItemTopLevelVarScopedDeclarations(node.body);
  }

  return [];
}

function labelledItemTopLevelVarScopedDeclarations(node: Node): VarScopedDeclNode[] {
  switch (node.type) {
    case "LabeledStatement": {
      return topLevelVarScopedDeclarations(node.body);
    }
    case "FunctionDeclaration": {
      return [node];
    }
    /* BEGIN Statement */
    case "VariableDeclaration": {
      if (node.kind === "var") {
        // VariableStatement
        return varScopedDeclarations(node);
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
      return varScopedDeclarations(node);
  }

  return [];
}

function statementListTopLevelVarScopedDeclarations(
  node: Statement[] | Statement,
): VarScopedDeclNode[] {
  if (Array.isArray(node)) {
    return node.flatMap(statementListTopLevelVarScopedDeclarations);
  }

  switch (node.type) {
    case "LabeledStatement": {
      return labelledItemTopLevelVarScopedDeclarations(node.body);
    }
    /* BEGIN Statement */
    case "VariableDeclaration": {
      if (node.kind === "var") {
        // VariableStatement
        return varScopedDeclarations(node);
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
      return varScopedDeclarations(node);
    /* HoistableDeclaration */
    case "FunctionDeclaration":
      return [node];
    case "ClassDeclaration":
      return [];
  }

  return [];
}

// function topLevelVarScopedDeclarations(node: Node): VarScopedDeclNode[] {
//   switch (node.type) {
//     case "File":
//       return topLevelVarScopedDeclarations(node.program);
//     case "Program":
//       return varScopedDeclarations(node);
//     case "FunctionDeclaration":
//     case "FunctionExpression":
//     case "ArrowFunctionExpression":
//     case "ObjectMethod":
//     case "ClassMethod":
//     case "ClassPrivateMethod":
//       if (node.body.type === "BlockStatement") {
//         return node.body.body.flatMap((node) => varScopedDeclarations(node));
//       }
//       return [];
//     case "LabeledStatement":
//       return topLevelVarScopedDeclarations(node.body);
//     /* BEGIN Statement */
//     case "BlockStatement":
//     case "VariableDeclaration":
//     case "EmptyStatement":
//     case "ExpressionStatement":
//     case "IfStatement":
//     case "DoWhileStatement": /* BEGIN BreakableStatement */
//     case "WhileStatement":
//     case "ForStatement":
//     case "ForInStatement":
//     case "ForOfStatement":
//     case "SwitchStatement": /* END BreakableStatement */
//     case "ContinueStatement":
//     case "BreakStatement":
//     case "ReturnStatement":
//     case "WithStatement":
//     case "ThrowStatement":
//     case "TryStatement":
//     case "DebuggerStatement":
//       return varScopedDeclarations(node);
//     /* END Statement */
//   }

//   return [];
// }

varScopedDeclarations.topLevel = topLevelVarScopedDeclarations;
