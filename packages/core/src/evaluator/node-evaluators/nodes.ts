import type { Node } from "@babel/types";

import type NodeEvaluator from "../NodeEvaluator.js";

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
import returnStatementNodeEvaluator from "./ReturnStatement.js";
import labeledStatementNodeEvaluator from "./LabelStatement.js";
import tryStatementNodeEvaluator from "./TryStatement.js";
import throwStatementNodeEvaluator from "./ThrowStatement.js";
import logicalExpressionNodeEvaluator from "./LogicalExpression.js";
import whileStatementNodeEvaluator from "./WhileStatement.js";
import doWhileStatementNodeEvaluator from "./DoWhileStatement.js";
import newExpressionNodeEvaluator from "./NewExpression.js";
import thisExpressionNodeEvaluator from "./ThisExpression.js";
import arrowFunctionExpressionNodeEvaluator from "./ArrowFunctionExpression.js";
import importDeclarationNodeEvaluator from "./ImportDeclaration.js";
import forInStatementNodeEvaluator from "./ForInStatement.js";
import exportAllDeclarationNodeEvaluator from "./ExportAllDeclaration.js";
import exportDefaultDeclarationNodeEvaluator from "./ExportDefaultDeclaration.js";
import exportNamedDeclarationNodeEvaluator from "./ExportNamedDeclaration.js";
import awaitExpressionNodeEvaluator from "./AwaitExpression.js";
import withStatementNodeEvaluator from "./WithStatement.js";
import sequenceExpressionNodeEvaluator from "./SequenceExpression.js";

type NodeEvaluators = {
  [key in Node["type"]]?: NodeEvaluator<key>;
};

const nodeEvaluators: NodeEvaluators = {
  ArrayExpression: arrayExpressionNodeEvaluator,
  ArrowFunctionExpression: arrowFunctionExpressionNodeEvaluator,
  AssignmentExpression: assignmentExpressionNodeEvaluator,
  AwaitExpression: awaitExpressionNodeEvaluator,
  BinaryExpression: binaryExpressionNodeEvaluator,
  BlockStatement: blockStatementNodeEvaluator,
  BooleanLiteral: booleanLiteralNodeEvaluator,
  BreakStatement: breakStatementNodeEvaluator,
  CallExpression: callExpressionNodeEvaluator,
  CatchClause: catchClauseNodeEvaluator,
  ContinueStatement: continueStatementNodeEvaluator,
  DoWhileStatement: doWhileStatementNodeEvaluator,
  EmptyStatement: emptyStatementNodeEvaluator,
  ExportAllDeclaration: exportAllDeclarationNodeEvaluator,
  ExportDefaultDeclaration: exportDefaultDeclarationNodeEvaluator,
  ExportNamedDeclaration: exportNamedDeclarationNodeEvaluator,
  ExpressionStatement: expressionStatementNodeEvaluator,
  File: fileNodeEvaluator,
  ForInStatement: forInStatementNodeEvaluator,
  ForStatement: forStatementNodeEvaluator,
  FunctionDeclaration: functionDeclarationNodeEvaluator,
  FunctionExpression: functionExpressionNodeEvaluator,
  IfStatement: ifStatementNodeEvaluator,
  ImportDeclaration: importDeclarationNodeEvaluator,
  Identifier: identifierNodeEvaluator,
  LabeledStatement: labeledStatementNodeEvaluator,
  LogicalExpression: logicalExpressionNodeEvaluator,
  MemberExpression: memberExpressionNodeEvaluator,
  NewExpression: newExpressionNodeEvaluator,
  NullLiteral: nullLiteralNodeEvaluator,
  NumericLiteral: numericLiteralNodeEvaluator,
  ObjectExpression: objectExpressionNodeEvaluator,
  Program: programNodeEvaluator,
  ReturnStatement: returnStatementNodeEvaluator,
  SequenceExpression: sequenceExpressionNodeEvaluator,
  StringLiteral: stringLiteralNodeEvaluator,
  ThisExpression: thisExpressionNodeEvaluator,
  ThrowStatement: throwStatementNodeEvaluator,
  TryStatement: tryStatementNodeEvaluator,
  UnaryExpression: unaryExpressionNodeEvaluator,
  UpdateExpression: updateExpressionNodeEvaluator,
  VariableDeclaration: variableDeclarationNodeEvaluator,
  WhileStatement: whileStatementNodeEvaluator,
  WithStatement: withStatementNodeEvaluator,
};

export function getEvaluator<TType extends Node["type"]>(
  node: Node & { type: TType },
): NodeEvaluator<TType> | null {
  const evaluator = nodeEvaluators[node.type];
  return evaluator ?? null;
}
