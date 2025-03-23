import { Node } from "@babel/types";

import NodeEvaluator from "../NodeEvaluator.js";

import variableDeclarationNodeEvaluator from "./VariableDeclaration.js";
import numericLiteralNodeEvaluator from "./NumericLiteral.js";
import stringLiteralNodeEvaluator from "./StringLiteral.js";
import nullLiteralNodeEvaluator from "./NullLiteral.js";
import booleanLiteralNodeEvaluator from "./BooleanLiteral.js";
import expressionStatementNodeEvaluator from "./ExpressionStatement.js";
import identifierNodeEvaluator from "./Identifier.js";
import unaryExpressionNodeEvaluator from "./UnaryExpression.js";
import assignmentExpressionNodeEvaluator from "./AssignmentExpression.js";
import functionDeclarationNodeEvaluator from "./FunctionDeclaration.js";
import functionExpressionNodeEvaluator from "./FunctionExpression.js";
import callExpressionNodeEvaluator from "./CallExpression.js";
import blockStatementNodeEvaluator from "./BlockStatement.js";
import memberExpressionNodeEvaluator from "./MemberExpression.js";
import arrayExpressionNodeEvaluator from "./ArrayExpression.js";
import objectExpressionNodeEvaluator from "./ObjectExpression.js";
import binaryExpressionNodeEvaluator from "./BinaryExpression.js";
import updateExpressionNodeEvaluator from "./UpdateExpression.js";
import catchClauseNodeEvaluator from "./CatchClause.js";
import forStatementNodeEvaluator from "./ForStatement.js";
import ifStatementNodeEvaluator from "./IfStatement.js";
import breakStatementNodeEvaluator from "./BreakStatement.js";
import continueStatementNodeEvaluator from "./ContinueStatement.js";

import fileNodeEvaluator from "./File.js";
import programNodeEvaluator from "./Program.js";
import emptyStatementNodeEvaluator from "./EmptyStatement.js";

type NodeEvaluators = {
  [key in Node["type"]]?: NodeEvaluator<key>;
};

const nodeEvaluators: NodeEvaluators = {
  ArrayExpression: arrayExpressionNodeEvaluator,
  AssignmentExpression: assignmentExpressionNodeEvaluator,
  BinaryExpression: binaryExpressionNodeEvaluator,
  BlockStatement: blockStatementNodeEvaluator,
  BooleanLiteral: booleanLiteralNodeEvaluator,
  BreakStatement: breakStatementNodeEvaluator,
  CallExpression: callExpressionNodeEvaluator,
  CatchClause: catchClauseNodeEvaluator,
  ContinueStatement: continueStatementNodeEvaluator,
  EmptyStatement: emptyStatementNodeEvaluator,
  ExpressionStatement: expressionStatementNodeEvaluator,
  File: fileNodeEvaluator,
  ForStatement: forStatementNodeEvaluator,
  FunctionDeclaration: functionDeclarationNodeEvaluator,
  FunctionExpression: functionExpressionNodeEvaluator,
  IfStatement: ifStatementNodeEvaluator,
  Identifier: identifierNodeEvaluator,
  MemberExpression: memberExpressionNodeEvaluator,
  NullLiteral: nullLiteralNodeEvaluator,
  NumericLiteral: numericLiteralNodeEvaluator,
  ObjectExpression: objectExpressionNodeEvaluator,
  Program: programNodeEvaluator,
  StringLiteral: stringLiteralNodeEvaluator,
  UnaryExpression: unaryExpressionNodeEvaluator,
  UpdateExpression: updateExpressionNodeEvaluator,
  VariableDeclaration: variableDeclarationNodeEvaluator,
};

export function getEvaluator<TType extends Node["type"]>(
  node: Node & { type: TType },
): NodeEvaluator<TType> | null {
  const evaluator = nodeEvaluators[node.type];
  return evaluator ?? null;
}
