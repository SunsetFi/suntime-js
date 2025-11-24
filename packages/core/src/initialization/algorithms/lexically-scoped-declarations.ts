import type {
  VariableDeclaration,
  FunctionDeclaration,
  ClassDeclaration,
  Node,
} from "@babel/types";

export type LexicallyScopedDeclNode =
  | VariableDeclaration
  | FunctionDeclaration
  | ClassDeclaration;

export default function lexicallyScopedDefinitions(
  node: Node,
): LexicallyScopedDeclNode[] {
  switch (node.type) {
    case "File":
      return lexicallyScopedDefinitions(node.program);
    case "Program":
      return node.body.flatMap(topLevelLexicallyScopedDefinitions);
    case "LabeledStatement":
      return lexicallyScopedDefinitions(node.body);
    /* BEGIN Declaration */
    case "FunctionDeclaration":
      return [node];
    case "ClassDeclaration":
      return [node];
    case "VariableDeclaration": {
      if (node.kind === "var") {
        return [];
      }
      return [node];
    }
    /* END Declaration */
    case "SwitchStatement":
      return node.cases.flatMap(lexicallyScopedDefinitions);
    case "SwitchCase":
      return node.consequent.flatMap(lexicallyScopedDefinitions);
  }
  return [];
}

function topLevelLexicallyScopedDefinitions(
  node: Node,
): LexicallyScopedDeclNode[] {
  switch (node.type) {
    case "File":
      return topLevelLexicallyScopedDefinitions(node.program);
    case "Program":
      return node.body.flatMap(topLevelLexicallyScopedDefinitions);
    case "LabeledStatement":
      return topLevelLexicallyScopedDefinitions(node.body);
    /* BEGIN Declaration */
    case "FunctionDeclaration":
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
      return lexicallyScopedDefinitions(node);
  }

  return [];
}
